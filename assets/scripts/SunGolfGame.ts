import {
  _decorator,
  Color,
  Component,
  EventTouch,
  Graphics,
  HorizontalTextAlignment,
  Label,
  Node,
  ResolutionPolicy,
  UITransform,
  UIOpacity,
  Vec2,
  Vec3,
  VerticalTextAlignment,
  Widget,
  sys,
  tween,
  view,
} from "cc";
import { LEVEL_CONFIGS, LevelConfig, MovingWallConfig, RectZone } from "./data/LevelConfigs";

const { ccclass } = _decorator;

type GamePhase = "menu" | "ready" | "aiming" | "moving" | "win" | "lose";

type SaveData = {
  unlockedLevel: number;
  bestStrokes: Record<string, number>;
};

type DynamicWallState = {
  config: MovingWallConfig;
  rect: RectZone;
  vx: number;
  vy: number;
};

@ccclass("SunGolfGame")
export class SunGolfGame extends Component {
  private readonly designW = 1280;
  private readonly designH = 720;
  private readonly saveKey = "sun_golf_save_v1";
  private readonly ballRadius = 12;
  private readonly wallBounce = 0.82;
  private readonly maxLaunchSpeed = 920;
  private readonly stopSpeed = 8;

  private courseNode!: Node;
  private courseG!: Graphics;
  private dynamicNode!: Node;
  private dynamicG!: Graphics;
  private fxNode!: Node;
  private fxG!: Graphics;
  private ballNode!: Node;
  private ballG!: Graphics;
  private holeNode!: Node;
  private holeG!: Graphics;
  private uiLayer!: Node;
  private overlayNode!: Node;
  private overlayPanelNode!: Node;
  private overlayPanelG!: Graphics;
  private overlayTitle!: Label;
  private overlayDesc!: Label;
  private levelListLabel!: Label;
  private menuRoot!: Node;
  private menuListLabel!: Label;
  private menuListHighlightG!: Graphics;
  private menuGameTitleLabel!: Label;
  private menuSelectedTitleLabel!: Label;
  private menuSelectedMetaLabel!: Label;
  private menuSelectedBestLabel!: Label;
  private menuSelectedRuleLabel!: Label;
  private menuProgressLabel!: Label;
  private menuListHeaderLabel!: Label;
  private menuListTipLabel!: Label;
  private hudLevelLabel!: Label;
  private hudStrokeLabel!: Label;
  private hudParLabel!: Label;
  private hudBestLabel!: Label;
  private hudStarLabel!: Label;
  private hudPowerLabel!: Label;
  private miniMsgLabel!: Label;
  private hudTopBarNode!: Node;
  private hudBottomBarNode!: Node;

  private startBtn!: Node;
  private nextBtn!: Node;
  private restartBtn!: Node;
  private menuBtn!: Node;
  private prevBtn!: Node;

  private currentLevelIndex = 0;
  private phase: GamePhase = "menu";
  private strokes = 0;
  private levelClock = 0;
  private saveData: SaveData = { unlockedLevel: 1, bestStrokes: {} };

  private ballPos = new Vec2();
  private ballVel = new Vec2();
  private lastSafePos = new Vec2();
  private aimCurrentTouch = new Vec2();
  private isAimDragValid = false;
  private dynamicWalls: DynamicWallState[] = [];

  onLoad() {
    this.loadSave();
    view.setDesignResolutionSize(this.designW, this.designH, ResolutionPolicy.SHOW_ALL);
    this.buildRuntimeScene();
    this.bindInput();
    this.showMenu();
  }

  onDestroy() {
    if (!this.courseNode) return;
    this.courseNode.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
    this.courseNode.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    this.courseNode.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
    this.courseNode.off(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }

  update(dt: number) {
    if (this.phase === "ready" || this.phase === "aiming") {
      this.advanceDynamicWalls(dt);
    }

    if (this.phase !== "moving") {
      if (this.phase === "aiming") this.redrawFx();
      return;
    }

    const level = this.level;
    if (!level) return;

    let remain = Math.min(dt, 1 / 20);
    while (remain > 0) {
      const step = Math.min(remain, 1 / 120);
      remain -= step;
      this.advanceDynamicWalls(step);
      this.simulateBall(step, level);
      if (this.phase !== "moving") break;
    }

    this.syncBallVisual();
    this.redrawFx();
    this.updateHud();
  }

  private get level(): LevelConfig | null {
    return LEVEL_CONFIGS[this.currentLevelIndex] ?? null;
  }

  private buildRuntimeScene() {
    const rootTransform = this.node.getComponent(UITransform) ?? this.node.addComponent(UITransform);
    rootTransform.setContentSize(this.designW, this.designH);

    const widget = this.node.getComponent(Widget) ?? this.node.addComponent(Widget);
    widget.isAlignLeft = true;
    widget.isAlignRight = true;
    widget.isAlignTop = true;
    widget.isAlignBottom = true;
    widget.left = widget.right = widget.top = widget.bottom = 0;

    this.courseNode = new Node("Course");
    this.courseNode.parent = this.node;
    this.courseNode.addComponent(UITransform).setContentSize(this.designW, this.designH);
    this.courseG = this.courseNode.addComponent(Graphics);

    this.dynamicNode = new Node("DynamicWalls");
    this.dynamicNode.parent = this.node;
    this.dynamicNode.addComponent(UITransform).setContentSize(this.designW, this.designH);
    this.dynamicG = this.dynamicNode.addComponent(Graphics);

    this.fxNode = new Node("FX");
    this.fxNode.parent = this.node;
    this.fxNode.addComponent(UITransform).setContentSize(this.designW, this.designH);
    this.fxG = this.fxNode.addComponent(Graphics);

    this.holeNode = new Node("Hole");
    this.holeNode.parent = this.node;
    this.holeNode.addComponent(UITransform).setContentSize(60, 60);
    this.holeG = this.holeNode.addComponent(Graphics);

    this.ballNode = new Node("Ball");
    this.ballNode.parent = this.node;
    this.ballNode.addComponent(UITransform).setContentSize(50, 50);
    this.ballG = this.ballNode.addComponent(Graphics);

    this.uiLayer = new Node("UI");
    this.uiLayer.parent = this.node;
    this.uiLayer.addComponent(UITransform).setContentSize(this.designW, this.designH);

    this.buildHud();
    this.buildOverlay();
    this.drawBall();
  }

  private buildHud() {
    const topBar = new Node("TopBar");
    this.hudTopBarNode = topBar;
    topBar.parent = this.uiLayer;
    topBar.setPosition(0, 314, 0);
    topBar.addComponent(UITransform).setContentSize(1180, 74);
    const topG = topBar.addComponent(Graphics);
    topG.fillColor = new Color(255, 255, 255, 210);
    topG.roundRect(-590, -37, 1180, 74, 26);
    topG.fill();
    topG.fillColor = new Color(255, 220, 112, 90);
    topG.roundRect(-588, -35, 380, 70, 22);
    topG.fill();
    topG.strokeColor = new Color(255, 255, 255, 180);
    topG.lineWidth = 2;
    topG.roundRect(-590, -37, 1180, 74, 26);
    topG.stroke();

    const bottomBar = new Node("BottomBar");
    this.hudBottomBarNode = bottomBar;
    bottomBar.parent = this.uiLayer;
    bottomBar.setPosition(0, -318, 0);
    bottomBar.addComponent(UITransform).setContentSize(1180, 82);
    const bottomG = bottomBar.addComponent(Graphics);
    bottomG.fillColor = new Color(247, 251, 255, 214);
    bottomG.roundRect(-590, -41, 1180, 82, 24);
    bottomG.fill();
    bottomG.fillColor = new Color(102, 184, 255, 26);
    bottomG.roundRect(-586, -37, 1172, 74, 20);
    bottomG.fill();
    bottomG.strokeColor = new Color(255, 255, 255, 170);
    bottomG.lineWidth = 2;
    bottomG.roundRect(-590, -41, 1180, 82, 24);
    bottomG.stroke();

    this.hudLevelLabel = this.createLabel(this.uiLayer, new Vec3(-398, 325, 0), 28, new Color(32, 42, 58), "阳光高尔夫", 340, HorizontalTextAlignment.LEFT);
    this.hudLevelLabel.overflow = Label.Overflow.SHRINK;
    this.hudLevelLabel.node.getComponent(UITransform)?.setContentSize(340, 62);
    this.hudStrokeLabel = this.createLabel(this.uiLayer, new Vec3(-88, 325, 0), 28, new Color(32, 42, 58), "杆数");
    this.hudParLabel = this.createLabel(this.uiLayer, new Vec3(170, 325, 0), 28, new Color(32, 42, 58), "标准杆");
    this.hudBestLabel = this.createLabel(this.uiLayer, new Vec3(410, 325, 0), 28, new Color(32, 42, 58), "最佳");
    this.hudStarLabel = this.createLabel(this.uiLayer, new Vec3(0, -295, 0), 20, new Color(62, 78, 102), "星级", 1100);
    this.miniMsgLabel = this.createLabel(this.uiLayer, new Vec3(0, 292, 0), 22, new Color(230, 119, 54), "", 760);
    this.hudPowerLabel = this.createLabel(this.uiLayer, new Vec3(0, -334, 0), 24, new Color(54, 66, 86), "按住小球，向反方向拖拽后松手击球", 1100);
  }

  private buildOverlay() {
    this.overlayNode = new Node("Overlay");
    this.overlayNode.parent = this.uiLayer;
    this.overlayNode.addComponent(UITransform).setContentSize(this.designW, this.designH);
    this.overlayNode.addComponent(UIOpacity).opacity = 255;

    const mask = new Node("Mask");
    mask.parent = this.overlayNode;
    mask.addComponent(UITransform).setContentSize(this.designW, this.designH);
    const maskG = mask.addComponent(Graphics);
    maskG.fillColor = new Color(12, 20, 34, 208);
    maskG.rect(-640, -360, 1280, 720);
    maskG.fill();
    maskG.fillColor = new Color(255, 208, 103, 44);
    maskG.circle(-430, 235, 150);
    maskG.fill();
    maskG.fillColor = new Color(255, 221, 131, 22);
    maskG.circle(-430, 235, 235);
    maskG.fill();
    maskG.fillColor = new Color(109, 176, 255, 28);
    maskG.circle(438, -182, 196);
    maskG.fill();
    maskG.fillColor = new Color(44, 92, 170, 110);
    maskG.moveTo(-640, -360);
    maskG.bezierCurveTo(-420, -220, -150, -260, 110, -200);
    maskG.bezierCurveTo(350, -145, 560, -240, 640, -200);
    maskG.lineTo(640, -360);
    maskG.close();
    maskG.fill();
    maskG.fillColor = new Color(23, 57, 114, 175);
    maskG.moveTo(-640, -360);
    maskG.bezierCurveTo(-390, -260, -130, -310, 160, -228);
    maskG.bezierCurveTo(360, -172, 520, -220, 640, -172);
    maskG.lineTo(640, -360);
    maskG.close();
    maskG.fill();

    const panel = new Node("Panel");
    this.overlayPanelNode = panel;
    panel.parent = this.overlayNode;
    panel.setPosition(0, 8, 0);
    panel.addComponent(UITransform).setContentSize(1020, 568);
    this.overlayPanelG = panel.addComponent(Graphics);

    this.menuRoot = new Node("寮€濮嬮〉甯冨眬");
    this.menuRoot.parent = panel;
    this.menuRoot.addComponent(UITransform).setContentSize(1020, 568);

    const menuBg = new Node("寮€濮嬮〉甯冨眬鑳屾櫙");
    menuBg.parent = this.menuRoot;
    menuBg.addComponent(UITransform).setContentSize(1020, 568);
    const menuBgG = menuBg.addComponent(Graphics);
    menuBgG.fillColor = new Color(248, 249, 241, 255);
    menuBgG.roundRect(-510, -284, 1020, 568, 28);
    menuBgG.fill();
    menuBgG.fillColor = new Color(255, 228, 138, 78);
    menuBgG.roundRect(-510, 188, 1020, 96, 28);
    menuBgG.fill();
    menuBgG.fillColor = new Color(240, 246, 255, 255);
    menuBgG.roundRect(-488, -104, 430, 314, 22);
    menuBgG.fill();
    menuBgG.fillColor = new Color(247, 251, 255, 255);
    menuBgG.roundRect(-38, -122, 512, 380, 22);
    menuBgG.fill();
    menuBgG.fillColor = new Color(238, 245, 255, 255);
    menuBgG.roundRect(-38, -122, 512, 48, 22);
    menuBgG.fill();
    menuBgG.fillColor = new Color(255, 247, 229, 255);
    menuBgG.roundRect(-488, -262, 962, 118, 20);
    menuBgG.fill();
    menuBgG.fillColor = new Color(255, 212, 84, 255);
    menuBgG.circle(-456, 236, 8);
    menuBgG.fill();
    menuBgG.fillColor = new Color(255, 231, 146, 255);
    menuBgG.circle(-430, 236, 5);
    menuBgG.fill();
    menuBgG.fillColor = new Color(255, 241, 198, 80);
    menuBgG.circle(-370, 72, 120);
    menuBgG.fill();
    menuBgG.fillColor = new Color(112, 173, 255, 34);
    menuBgG.circle(398, -34, 126);
    menuBgG.fill();
    menuBgG.strokeColor = new Color(230, 236, 246, 255);
    menuBgG.lineWidth = 2;
    menuBgG.roundRect(-488, -104, 430, 314, 22);
    menuBgG.stroke();
    menuBgG.roundRect(-38, -122, 512, 380, 22);
    menuBgG.stroke();
    menuBgG.roundRect(-488, -262, 962, 118, 20);
    menuBgG.stroke();

    const menuListHighlightNode = new Node("鍏冲崱鍒楄〃楂樹寒");
    menuListHighlightNode.parent = this.menuRoot;
    menuListHighlightNode.addComponent(UITransform).setContentSize(1020, 568);
    this.menuListHighlightG = menuListHighlightNode.addComponent(Graphics);

    this.menuGameTitleLabel = this.createLabel(this.menuRoot, new Vec3(-274, 170, 0), 42, new Color(31, 42, 60), "阳光高尔夫", 390, HorizontalTextAlignment.LEFT);
    this.menuSelectedTitleLabel = this.createLabel(this.menuRoot, new Vec3(-274, 86, 0), 28, new Color(31, 42, 60), "第1关 晨光练习场", 390, HorizontalTextAlignment.LEFT);
    this.menuSelectedMetaLabel = this.createLabel(this.menuRoot, new Vec3(-274, 48, 0), 20, new Color(80, 94, 116), "标准杆 2｜已解锁", 390, HorizontalTextAlignment.LEFT);
    this.menuSelectedBestLabel = this.createLabel(this.menuRoot, new Vec3(-274, 12, 0), 20, new Color(51, 74, 116), "最佳成绩：暂无｜星级：☆☆☆", 390, HorizontalTextAlignment.LEFT);
    this.menuSelectedRuleLabel = this.createLabel(this.menuRoot, new Vec3(-274, -26, 0), 18, new Color(98, 111, 131), "3星≤标准杆｜2星≤标准杆+1｜完成即得1星", 390, HorizontalTextAlignment.LEFT);
    this.menuSelectedRuleLabel.lineHeight = 24;
    this.menuProgressLabel = this.createLabel(this.menuRoot, new Vec3(-274, -66, 0), 20, new Color(204, 127, 24), "累计星级 0/24", 390, HorizontalTextAlignment.LEFT);
    this.menuListHeaderLabel = this.createLabel(this.menuRoot, new Vec3(220, 203, 0), 26, new Color(41, 54, 78), "关卡选择", 430, HorizontalTextAlignment.LEFT);
    this.menuListTipLabel = this.createLabel(this.menuRoot, new Vec3(220, 170, 0), 16, new Color(111, 126, 149), "使用“上一关 / 下一关”切换已解锁关卡", 430, HorizontalTextAlignment.LEFT);
    this.menuListLabel = this.createLabel(this.menuRoot, new Vec3(220, 17, 0), 18, new Color(56, 72, 95), "", 440, HorizontalTextAlignment.LEFT);
    this.menuListLabel.lineHeight = 34;
    this.menuListLabel.verticalAlign = VerticalTextAlignment.TOP;
    this.menuListLabel.node.getComponent(UITransform)?.setContentSize(440, 286);

    this.overlayTitle = this.createLabel(panel, new Vec3(0, 164, 0), 42, new Color(34, 40, 52), "阳光高尔夫", 900);
    this.overlayDesc = this.createLabel(panel, new Vec3(0, 110, 0), 22, new Color(70, 82, 98), "", 900);
    this.levelListLabel = this.createLabel(panel, new Vec3(0, 6, 0), 20, new Color(65, 78, 95), "", 900);
    this.levelListLabel.lineHeight = 28;
    this.levelListLabel.verticalAlign = VerticalTextAlignment.TOP;
    this.levelListLabel.node.getComponent(UITransform)?.setContentSize(900, 260);

    this.startBtn = this.createButton(panel, "开始第 1 关", new Vec3(-330, -214, 0), new Vec2(240, 66), new Color(250, 188, 66), () => {
      if (this.phase === "menu") this.startLevel(this.currentLevelIndex);
      else this.restartLevel();
    });
    this.prevBtn = this.createButton(panel, "上一关", new Vec3(12, -214, 0), new Vec2(146, 62), new Color(150, 170, 214), () => this.pickLevel(-1));
    this.nextBtn = this.createButton(panel, "下一关", new Vec3(176, -214, 0), new Vec2(146, 62), new Color(150, 170, 214), () => this.pickLevel(1));
    this.restartBtn = this.createButton(panel, "重开本关", new Vec3(350, -214, 0), new Vec2(174, 62), new Color(237, 146, 75), () => this.restartLevel());
    this.menuBtn = this.createButton(panel, "返回菜单", new Vec3(0, -144, 0), new Vec2(190, 54), new Color(109, 133, 176), () => this.showMenu());

    this.setOverlayMenuLayoutActive(true);
  }

  private setHudVisible(visible: boolean) {
    const nodes: Node[] = [
      this.hudTopBarNode,
      this.hudBottomBarNode,
      this.hudLevelLabel.node,
      this.hudStrokeLabel.node,
      this.hudParLabel.node,
      this.hudBestLabel.node,
      this.hudStarLabel.node,
      this.hudPowerLabel.node,
      this.miniMsgLabel.node,
    ];
    for (const n of nodes) {
      if (n) n.active = visible;
    }
  }

  private drawOverlayPanelForMenu() {
    const g = this.overlayPanelG;
    g.clear();
    g.fillColor = new Color(9, 17, 33, 95);
    g.roundRect(-502, -276, 1020, 568, 30);
    g.fill();
    g.fillColor = new Color(255, 255, 255, 18);
    g.roundRect(-510, 196, 1020, 72, 28);
    g.fill();
    g.strokeColor = new Color(255, 222, 120, 240);
    g.lineWidth = 4;
    g.roundRect(-510, -284, 1020, 568, 28);
    g.stroke();
    g.strokeColor = new Color(255, 255, 255, 110);
    g.lineWidth = 2;
    g.roundRect(-506, -280, 1012, 560, 26);
    g.stroke();
  }

  private drawOverlayPanelForResult() {
    const g = this.overlayPanelG;
    g.clear();
    g.fillColor = new Color(11, 19, 33, 110);
    g.roundRect(-462, -252, 940, 520, 28);
    g.fill();
    g.fillColor = new Color(249, 248, 240, 255);
    g.roundRect(-470, -260, 940, 520, 26);
    g.fill();
    g.fillColor = new Color(255, 235, 164, 86);
    g.roundRect(-470, 158, 940, 102, 26);
    g.fill();
    g.fillColor = new Color(243, 248, 255, 255);
    g.roundRect(-430, -58, 860, 240, 20);
    g.fill();
    g.strokeColor = new Color(230, 237, 247, 255);
    g.lineWidth = 2;
    g.roundRect(-430, -58, 860, 240, 20);
    g.stroke();
    g.strokeColor = new Color(225, 182, 79, 255);
    g.lineWidth = 4;
    g.roundRect(-470, -260, 940, 520, 26);
    g.stroke();
  }

  private setOverlayMenuLayoutActive(isMenu: boolean) {
    this.menuRoot.active = isMenu;
    this.overlayTitle.node.active = !isMenu;
    this.overlayDesc.node.active = !isMenu;
    this.levelListLabel.node.active = !isMenu;

    if (isMenu) {
      this.drawOverlayPanelForMenu();
      this.overlayTitle.node.setPosition(0, 0, 0);
      this.overlayDesc.node.setPosition(0, 0, 0);
      this.levelListLabel.node.setPosition(0, 0, 0);
      this.startBtn.setPosition(-330, -214, 0);
      this.prevBtn.setPosition(12, -214, 0);
      this.nextBtn.setPosition(176, -214, 0);
      this.restartBtn.setPosition(350, -214, 0);
      this.menuBtn.setPosition(0, -144, 0);
    } else {
      this.drawOverlayPanelForResult();
      this.overlayTitle.node.setPosition(0, 164, 0);
      this.overlayDesc.node.setPosition(0, 108, 0);
      this.levelListLabel.node.setPosition(0, 10, 0);
      this.levelListLabel.node.getComponent(UITransform)?.setContentSize(860, 220);
      this.startBtn.setPosition(0, -48, 0);
      this.prevBtn.setPosition(-150, -182, 0);
      this.nextBtn.setPosition(150, -182, 0);
      this.restartBtn.setPosition(-170, -182, 0);
      this.menuBtn.setPosition(0, -112, 0);
    }
  }

  private refreshMenuSelectionCard() {
    const level = this.level;
    if (!level) return;

    const bestScore = this.saveData.bestStrokes[String(level.id)];
    const bestStars = bestScore == null ? null : this.calcStars(level, bestScore);
    const unlocked = level.id <= this.saveData.unlockedLevel;
    const bestText = bestScore == null ? "暂无记录" : `${bestScore}杆`;
    const starsText = bestStars == null ? "☆☆☆" : this.formatStars(bestStars);

    this.menuGameTitleLabel.string = "阳光高尔夫";
    this.menuSelectedTitleLabel.string = `第${level.id}关 ${level.name}`;
    this.menuSelectedMetaLabel.string = `标准杆 ${level.par}｜最大杆数 ${level.maxStrokes}｜${unlocked ? "已解锁" : "未解锁"}`;
    this.menuSelectedBestLabel.string = `最佳成绩：${bestText}｜最佳星级：${starsText}`;
    this.menuSelectedRuleLabel.string = this.getStarRuleText(level);
    this.menuProgressLabel.string = `累计星级 ${this.getTotalEarnedStars()}/${LEVEL_CONFIGS.length * 3}｜已解锁关卡 ${this.saveData.unlockedLevel}/${LEVEL_CONFIGS.length}`;
    this.menuListHeaderLabel.string = `关卡选择（当前第${level.id}关）`;
    this.menuListTipLabel.string = unlocked ? "建议优先挑战 3 星，再推进下一关" : "请先通关前置关卡解锁本关";
  }

  private redrawMenuListHighlights() {
    if (!this.menuListHighlightG || !this.menuListLabel) return;
    const g = this.menuListHighlightG;
    g.clear();

    const t = this.menuListLabel.node.getComponent(UITransform);
    if (!t) return;
    const rowHeight = this.menuListLabel.lineHeight || 34;
    const width = t.width;
    const height = t.height;
    const center = this.menuListLabel.node.getPosition();
    const left = center.x - width / 2 - 10;
    const top = center.y + height / 2 - 6;

    for (let i = 0; i < LEVEL_CONFIGS.length; i++) {
      const level = LEVEL_CONFIGS[i];
      const rowBottom = top - rowHeight * (i + 1) + 2;
      const unlocked = level.id <= this.saveData.unlockedLevel;

      if (unlocked) {
        g.fillColor = new Color(255, 255, 255, 52);
        g.roundRect(left, rowBottom, width + 20, rowHeight - 4, 10);
        g.fill();
      } else {
        g.fillColor = new Color(225, 231, 243, 78);
        g.roundRect(left, rowBottom, width + 20, rowHeight - 4, 10);
        g.fill();
      }
    }
  }

  private bindInput() {
    this.courseNode.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
    this.courseNode.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    this.courseNode.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
    this.courseNode.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
  }

  private showMenu() {
    this.phase = "menu";
    this.ballVel.set(0, 0);
    this.clearCourse();
    this.setHudVisible(false);
    this.overlayNode.active = true;
    this.setNodeOpacity(this.overlayNode, 255);
    this.setOverlayMenuLayoutActive(true);
    this.refreshLevelListText();
    this.setButtonVisible(this.startBtn, true);
    this.setButtonVisible(this.prevBtn, true);
    this.setButtonVisible(this.nextBtn, true);
    this.setButtonVisible(this.restartBtn, false);
    this.setButtonVisible(this.menuBtn, false);
    this.setButtonText(this.startBtn, `开始第 ${this.currentLevelIndex + 1} 关`);
    this.miniMsgLabel.string = "";
    this.hudPowerLabel.string = "在菜单中选择已解锁关卡开始挑战";
    this.hudStarLabel.string = "星级规则：3星≤标准杆，2星≤标准杆+1，完成即可至少1星";
    this.updateHud();
    this.redrawFx();
  }

  private refreshLevelListText() {
    const lines: string[] = [];
    const unlocked = this.saveData.unlockedLevel;
    for (let i = 0; i < LEVEL_CONFIGS.length; i++) {
      const lv = LEVEL_CONFIGS[i];
      const lock = i + 1 <= unlocked ? "已解锁" : "未解锁";
      const bestStars = this.getBestStars(lv);
      const rowPrefix = i === this.currentLevelIndex ? "●" : "○";
      lines.push(`${rowPrefix} 第${lv.id}关 ${lv.name}｜P${lv.par}｜${lock}｜${bestStars == null ? "☆☆☆" : this.formatStars(bestStars)}`);
    }
    this.menuListLabel.string = lines.join("\n");
    this.refreshMenuSelectionCard();
    this.redrawMenuListHighlights();
  }

  private pickLevel(dir: number) {
    if (this.phase !== "menu") return;
    const maxIndex = Math.max(0, this.saveData.unlockedLevel - 1);
    const next = this.currentLevelIndex + dir;
    if (next < 0 || next > maxIndex) return;
    this.currentLevelIndex = next;
    this.refreshLevelListText();
    this.setButtonText(this.startBtn, `开始第 ${this.currentLevelIndex + 1} 关`);
  }

  private startLevel(index: number) {
    this.currentLevelIndex = Math.max(0, Math.min(index, LEVEL_CONFIGS.length - 1));
    this.phase = "ready";
    this.strokes = 0;
    this.setHudVisible(true);

    const level = this.level!;
    this.ballPos.set(level.start.x, level.start.y);
    this.ballVel.set(0, 0);
    this.lastSafePos.set(level.start.x, level.start.y);
    this.isAimDragValid = false;
    this.aimCurrentTouch.set(level.start.x, level.start.y);

    this.drawCourse(level);
    this.initDynamicWalls(level);
    this.drawHole(level);
    this.syncBallVisual();
    this.updateHud();
    this.miniMsgLabel.string = "准备击球";
    this.hudPowerLabel.string = "按住小球并向反方向拖拽蓄力，松手击球";
    this.hudStarLabel.string = this.getStarRuleText(level);

    this.overlayNode.active = false;
    this.redrawFx();
  }

  private restartLevel() {
    this.startLevel(this.currentLevelIndex);
  }

  private onTouchStart(event: EventTouch) {
    if (this.phase !== "ready" && this.phase !== "aiming") return;
    const p = this.touchToLocal(event);
    if (!p) return;
    if (Vec2.distance(p, this.ballPos) > this.ballRadius + 22) return;
    this.phase = "aiming";
    this.isAimDragValid = true;
    this.aimCurrentTouch.set(p.x, p.y);
    this.redrawFx();
  }

  private onTouchMove(event: EventTouch) {
    if (this.phase !== "aiming" || !this.isAimDragValid) return;
    const p = this.touchToLocal(event);
    if (!p) return;
    this.aimCurrentTouch.set(p.x, p.y);
    const launch = this.getAimLaunchVelocity();
    this.hudPowerLabel.string = `力度 ${Math.round(launch.length())}/${this.maxLaunchSpeed}`;
    this.redrawFx();
  }

  private onTouchEnd(_event: EventTouch) {
    if (this.phase !== "aiming" || !this.isAimDragValid) return;
    const launch = this.getAimLaunchVelocity();
    this.isAimDragValid = false;
    this.redrawFx();

    if (launch.length() < 40) {
      this.phase = "ready";
      this.hudPowerLabel.string = "力度太小，已取消本次击球";
      return;
    }

    this.ballVel.set(launch.x, launch.y);
    this.phase = "moving";
    this.strokes += 1;
    this.miniMsgLabel.string = `第 ${this.strokes} 杆`;
    this.updateHud();
  }

  private getAimLaunchVelocity(): Vec2 {
    const drag = this.aimCurrentTouch.clone().subtract(this.ballPos).multiplyScalar(-2.8);
    const len = drag.length();
    if (len > this.maxLaunchSpeed) {
      drag.multiplyScalar(this.maxLaunchSpeed / len);
    }
    return drag;
  }

  private touchToLocal(event: EventTouch): Vec2 | null {
    const ui = this.courseNode.getComponent(UITransform);
    if (!ui) return null;
    const p = event.getUILocation();
    const local = ui.convertToNodeSpaceAR(new Vec3(p.x, p.y, 0));
    return new Vec2(local.x, local.y);
  }

  private initDynamicWalls(level: LevelConfig) {
    this.levelClock = 0;
    this.dynamicWalls = (level.movingWalls ?? []).map((config) => ({
      config,
      rect: { ...config.rect },
      vx: 0,
      vy: 0,
    }));
    this.syncDynamicWalls(0);
    this.drawDynamicWalls();
  }

  private advanceDynamicWalls(dt: number) {
    if (this.dynamicWalls.length === 0) return;
    this.levelClock += dt;
    this.syncDynamicWalls(this.levelClock);
    this.drawDynamicWalls();
  }

  private syncDynamicWalls(time: number) {
    for (const wall of this.dynamicWalls) {
      const cfg = wall.config;
      const angle = time * cfg.speed + (cfg.phase ?? 0);
      const offset = Math.sin(angle) * cfg.range;
      const velocity = Math.cos(angle) * cfg.range * cfg.speed;
      wall.rect.x = cfg.rect.x + (cfg.axis === "x" ? offset : 0);
      wall.rect.y = cfg.rect.y + (cfg.axis === "y" ? offset : 0);
      wall.rect.w = cfg.rect.w;
      wall.rect.h = cfg.rect.h;
      wall.vx = cfg.axis === "x" ? velocity : 0;
      wall.vy = cfg.axis === "y" ? velocity : 0;
    }
  }

  private drawDynamicWalls() {
    const g = this.dynamicG;
    g.clear();
    if (this.dynamicWalls.length === 0) return;

    for (let i = 0; i < this.dynamicWalls.length; i++) {
      const wall = this.dynamicWalls[i];
      const r = wall.rect;
      const pulse = 0.75 + 0.25 * Math.sin(this.levelClock * 5 + i * 0.9);

      g.fillColor = new Color(214, 95, 88, Math.round(200 * pulse));
      g.roundRect(r.x, r.y, r.w, r.h, 8);
      g.fill();

      g.strokeColor = new Color(255, 226, 154, 220);
      g.lineWidth = 2;
      g.roundRect(r.x, r.y, r.w, r.h, 8);
      g.stroke();

      const speed = Math.sqrt(wall.vx * wall.vx + wall.vy * wall.vy);
      if (speed > 8) {
        const dir = new Vec2(wall.vx, wall.vy).normalize();
        this.drawArrow(
          g,
          r.x + r.w / 2 - dir.x * 20,
          r.y + r.h / 2 - dir.y * 20,
          r.x + r.w / 2 + dir.x * 20,
          r.y + r.h / 2 + dir.y * 20,
          new Color(255, 242, 196),
        );
      }
    }
  }

  private calcStars(level: LevelConfig, strokes: number): number {
    if (strokes <= 0) return 0;
    if (strokes <= level.par) return 3;
    if (strokes <= level.par + 1) return 2;
    return 1;
  }

  private formatStars(stars: number): string {
    const safe = Math.max(0, Math.min(3, stars));
    return `${"★".repeat(safe)}${"☆".repeat(3 - safe)}`;
  }

  private getBestStars(level: LevelConfig): number | null {
    const best = this.saveData.bestStrokes[String(level.id)];
    if (best == null) return null;
    return this.calcStars(level, best);
  }

  private getTotalEarnedStars(): number {
    let total = 0;
    for (const level of LEVEL_CONFIGS) {
      const stars = this.getBestStars(level);
      if (stars) total += stars;
    }
    return total;
  }

  private getStarRuleText(level: LevelConfig): string {
    return `3星：<=标准杆(${level.par})｜2星：<=${level.par + 1}杆｜1星：完成即可`;
  }

  private simulateBall(dt: number, level: LevelConfig) {
    const pos = this.ballPos;
    const vel = this.ballVel;
    const prevPos = new Vec2(pos.x, pos.y);

    for (const wind of level.winds) {
      if (this.isPointInRect(pos, wind.rect)) {
        vel.x += wind.force.x * dt;
        vel.y += wind.force.y * dt;
      }
    }

    for (const boost of level.boosts) {
      if (!this.isPointInRect(pos, boost.rect)) continue;
      const dir = new Vec2(boost.dir.x, boost.dir.y);
      if (dir.lengthSqr() < 0.0001) continue;
      dir.normalize();
      vel.x += dir.x * boost.strength * dt;
      vel.y += dir.y * boost.strength * dt;
    }

    pos.x += vel.x * dt;
    pos.y += vel.y * dt;

    this.resolveCourseBoundary(level.course);
    for (const wall of level.walls) this.resolveRectCollision(wall);
    for (const wall of this.dynamicWalls) this.resolveRectCollision(wall.rect, wall.vx, wall.vy);

    let drag = 0.992;
    let onSand = false;
    for (const sand of level.sand) {
      if (this.isPointInRect(pos, sand)) {
        onSand = true;
        drag = 0.968;
        break;
      }
    }
    vel.multiplyScalar(Math.pow(drag, dt * 60));
    if (onSand) vel.multiplyScalar(0.985);

    for (const water of level.water) {
      if (!this.isPointInRect(pos, water)) continue;
      this.handleWaterPenalty();
      return;
    }

    this.tryHoleCapture(level, prevPos);
    if (this.phase !== "moving") return;

    if (vel.length() <= this.stopSpeed) {
      vel.set(0, 0);
      this.phase = "ready";
      this.lastSafePos.set(pos.x, pos.y);
      this.miniMsgLabel.string = this.strokes >= level.maxStrokes - 1 ? "注意：快到最大杆数了" : "球已停止";
      this.hudPowerLabel.string = "继续瞄准下一杆";
      if (this.strokes >= level.maxStrokes) {
        this.finishLevelLose();
      }
    }
  }

  private tryHoleCapture(level: LevelConfig, prevPos: Vec2) {
    const holePos = new Vec2(level.hole.x, level.hole.y);
    const touchRadius = level.holeRadius + this.ballRadius;
    if (this.isSegmentTouchCircle(prevPos, this.ballPos, holePos, touchRadius)) {
      this.finishLevelWin();
    }
  }

  private isSegmentTouchCircle(a: Vec2, b: Vec2, center: Vec2, radius: number): boolean {
    const abx = b.x - a.x;
    const aby = b.y - a.y;
    const apx = center.x - a.x;
    const apy = center.y - a.y;
    const abLenSq = abx * abx + aby * aby;

    let t = 0;
    if (abLenSq > 0.000001) {
      t = (apx * abx + apy * aby) / abLenSq;
      t = Math.max(0, Math.min(1, t));
    }

    const nearestX = a.x + abx * t;
    const nearestY = a.y + aby * t;
    const dx = nearestX - center.x;
    const dy = nearestY - center.y;
    return dx * dx + dy * dy <= radius * radius;
  }

  private handleWaterPenalty() {
    this.ballPos.set(this.lastSafePos.x, this.lastSafePos.y);
    this.ballVel.set(0, 0);
    this.phase = "ready";
    this.strokes += 1;
    this.miniMsgLabel.string = "落水罚杆 +1";
    this.hudPowerLabel.string = "已返回上一个安全位置";
    this.updateHud();
    this.syncBallVisual();

    this.ballNode.setScale(1.25, 1.25, 1);
    tween(this.ballNode).stop();
    tween(this.ballNode).to(0.12, { scale: new Vec3(1, 1, 1) }).start();

    if (this.level && this.strokes >= this.level.maxStrokes) {
      this.finishLevelLose();
    }
  }

  private finishLevelWin() {
    const level = this.level;
    if (!level) return;
    this.phase = "win";
    this.ballVel.set(0, 0);
    this.ballPos.set(level.hole.x, level.hole.y);
    this.syncBallVisual();

    const key = String(level.id);
    const prevBest = this.saveData.bestStrokes[key];
    const isNewBest = prevBest == null || this.strokes < prevBest;
    if (isNewBest) this.saveData.bestStrokes[key] = this.strokes;
    this.saveData.unlockedLevel = Math.min(LEVEL_CONFIGS.length, Math.max(this.saveData.unlockedLevel, level.id + 1));
    this.save();
    const stars = this.calcStars(level, this.strokes);

    const diff = this.strokes - level.par;
    const rating =
      diff <= -2 ? "精彩发挥" :
      diff === -1 ? "小鸟球" :
      diff === 0 ? "标准杆" :
      diff === 1 ? "高于标准杆1杆" : "高于标准杆2杆及以上";

    this.overlayNode.active = true;
    this.setNodeOpacity(this.overlayNode, 0);
    const opacity = this.overlayNode.getComponent(UIOpacity)!;
    tween(opacity).to(0.2, { opacity: 255 }).start();
    this.setOverlayMenuLayoutActive(false);

    this.overlayTitle.string = "本关完成";
    this.overlayDesc.string = `Level ${level.id} ${level.name} | ${this.strokes} strokes (par ${level.par}) | ${rating}${isNewBest ? " | New best" : ""}`;
    this.levelListLabel.string = `Stars: ${this.formatStars(stars)}\n${this.getStarRuleText(level)}\nTotal stars: ${this.getTotalEarnedStars()}/${LEVEL_CONFIGS.length * 3}`;
    this.setButtonVisible(this.startBtn, false);
    this.setButtonVisible(this.prevBtn, false);
    this.setButtonVisible(this.nextBtn, true);
    this.setButtonText(this.nextBtn, level.id >= LEVEL_CONFIGS.length ? "完成" : "下一关");
    this.setButtonVisible(this.restartBtn, true);
    this.setButtonVisible(this.menuBtn, true);
    this.miniMsgLabel.string = "进洞成功";
    this.hudStarLabel.string = `本次获得 ${this.formatStars(stars)} | ${this.getStarRuleText(level)}`;
  }

  private finishLevelLose() {
    const level = this.level;
    if (!level) return;
    this.phase = "lose";
    this.ballVel.set(0, 0);
    this.overlayNode.active = true;
    this.setNodeOpacity(this.overlayNode, 255);
    this.setOverlayMenuLayoutActive(false);
    this.overlayTitle.string = "挑战失败";
    this.overlayDesc.string = `第${level.id}关 ${level.name}｜已达到最大杆数 ${level.maxStrokes}，请重新挑战。`;
    this.levelListLabel.string = `目标星级说明\n${this.getStarRuleText(level)}\n提示：善用墙面反弹，并尽量避开沙坑与水域。`;
    this.setButtonVisible(this.startBtn, false);
    this.setButtonVisible(this.prevBtn, false);
    this.setButtonVisible(this.nextBtn, false);
    this.setButtonVisible(this.restartBtn, true);
    this.setButtonVisible(this.menuBtn, true);
    this.miniMsgLabel.string = "本关失败";
    this.hudStarLabel.string = `本次未获得星级｜${this.getStarRuleText(level)}`;
  }

  private goNextPlayable() {
    if (this.currentLevelIndex + 1 >= LEVEL_CONFIGS.length) {
      this.showMenu();
      return;
    }
    if (this.currentLevelIndex + 2 > this.saveData.unlockedLevel) {
      this.showMenu();
      return;
    }
    this.startLevel(this.currentLevelIndex + 1);
  }

  private resolveCourseBoundary(course: RectZone) {
    const minX = course.x + this.ballRadius;
    const maxX = course.x + course.w - this.ballRadius;
    const minY = course.y + this.ballRadius;
    const maxY = course.y + course.h - this.ballRadius;

    if (this.ballPos.x < minX) {
      this.ballPos.x = minX;
      this.ballVel.x = Math.abs(this.ballVel.x) * this.wallBounce;
    } else if (this.ballPos.x > maxX) {
      this.ballPos.x = maxX;
      this.ballVel.x = -Math.abs(this.ballVel.x) * this.wallBounce;
    }

    if (this.ballPos.y < minY) {
      this.ballPos.y = minY;
      this.ballVel.y = Math.abs(this.ballVel.y) * this.wallBounce;
    } else if (this.ballPos.y > maxY) {
      this.ballPos.y = maxY;
      this.ballVel.y = -Math.abs(this.ballVel.y) * this.wallBounce;
    }
  }

  private applyWallBounce(nx: number, ny: number, wallVx = 0, wallVy = 0) {
    const rvx = this.ballVel.x - wallVx;
    const rvy = this.ballVel.y - wallVy;
    const rvn = rvx * nx + rvy * ny;
    if (rvn >= 0) return;

    const outRelX = rvx - (1 + this.wallBounce) * rvn * nx;
    const outRelY = rvy - (1 + this.wallBounce) * rvn * ny;
    this.ballVel.x = outRelX + wallVx;
    this.ballVel.y = outRelY + wallVy;
  }

  private resolveRectCollision(rect: RectZone, wallVx = 0, wallVy = 0) {
    const nearestX = Math.max(rect.x, Math.min(this.ballPos.x, rect.x + rect.w));
    const nearestY = Math.max(rect.y, Math.min(this.ballPos.y, rect.y + rect.h));
    const dx = this.ballPos.x - nearestX;
    const dy = this.ballPos.y - nearestY;
    const distSq = dx * dx + dy * dy;

    if (distSq > this.ballRadius * this.ballRadius) return;

    if (distSq > 0.000001) {
      const dist = Math.sqrt(distSq);
      const nx = dx / dist;
      const ny = dy / dist;
      const penetration = this.ballRadius - dist;
      this.ballPos.x += nx * penetration;
      this.ballPos.y += ny * penetration;
      this.applyWallBounce(nx, ny, wallVx, wallVy);
      return;
    }

    const left = Math.abs(this.ballPos.x - rect.x);
    const right = Math.abs(this.ballPos.x - (rect.x + rect.w));
    const bottom = Math.abs(this.ballPos.y - rect.y);
    const top = Math.abs(this.ballPos.y - (rect.y + rect.h));
    const min = Math.min(left, right, bottom, top);

    if (min === left) {
      this.ballPos.x = rect.x - this.ballRadius;
      this.applyWallBounce(-1, 0, wallVx, wallVy);
    } else if (min === right) {
      this.ballPos.x = rect.x + rect.w + this.ballRadius;
      this.applyWallBounce(1, 0, wallVx, wallVy);
    } else if (min === bottom) {
      this.ballPos.y = rect.y - this.ballRadius;
      this.applyWallBounce(0, -1, wallVx, wallVy);
    } else {
      this.ballPos.y = rect.y + rect.h + this.ballRadius;
      this.applyWallBounce(0, 1, wallVx, wallVy);
    }
  }

  private drawCourse(level: LevelConfig) {
    const g = this.courseG;
    g.clear();

    g.fillColor = new Color(218, 238, 255, 255);
    g.rect(-640, -360, 1280, 720);
    g.fill();

    g.fillColor = new Color(255, 225, 120, 90);
    g.circle(-420, 240, 90);
    g.fill();
    g.fillColor = new Color(255, 207, 77, 45);
    g.circle(-420, 240, 150);
    g.fill();

    g.fillColor = new Color(83, 176, 96, 255);
    g.roundRect(level.course.x, level.course.y, level.course.w, level.course.h, 26);
    g.fill();
    g.fillColor = new Color(121, 198, 112, 255);
    g.roundRect(level.course.x + 14, level.course.y + 14, level.course.w - 28, level.course.h - 28, 20);
    g.fill();

    for (const sand of level.sand) {
      g.fillColor = new Color(235, 209, 137, 255);
      g.roundRect(sand.x, sand.y, sand.w, sand.h, 12);
      g.fill();
      g.strokeColor = new Color(201, 169, 95, 255);
      g.lineWidth = 2;
      g.roundRect(sand.x, sand.y, sand.w, sand.h, 12);
      g.stroke();
    }

    for (const water of level.water) {
      g.fillColor = new Color(76, 170, 230, 220);
      g.roundRect(water.x, water.y, water.w, water.h, 10);
      g.fill();
      g.strokeColor = new Color(22, 119, 188, 255);
      g.lineWidth = 2;
      g.roundRect(water.x, water.y, water.w, water.h, 10);
      g.stroke();
    }

    for (const boost of level.boosts) {
      const r = boost.rect;
      g.fillColor = new Color(255, 201, 82, 220);
      g.roundRect(r.x, r.y, r.w, r.h, 8);
      g.fill();
      g.strokeColor = new Color(233, 143, 36, 255);
      g.lineWidth = 2;
      g.roundRect(r.x, r.y, r.w, r.h, 8);
      g.stroke();
      const dir = new Vec2(boost.dir.x, boost.dir.y);
      if (dir.lengthSqr() > 0.0001) {
        dir.normalize();
        this.drawArrow(
          g,
          r.x + r.w / 2 - dir.x * 24,
          r.y + r.h / 2 - dir.y * 24,
          r.x + r.w / 2 + dir.x * 24,
          r.y + r.h / 2 + dir.y * 24,
          new Color(155, 86, 15),
        );
      }
    }

    for (const wind of level.winds) {
      const r = wind.rect;
      g.strokeColor = new Color(115, 164, 255, 150);
      g.lineWidth = 2;
      g.roundRect(r.x, r.y, r.w, r.h, 8);
      g.stroke();
      const dir = new Vec2(wind.force.x, wind.force.y);
      if (dir.lengthSqr() > 0.0001) {
        dir.normalize();
        this.drawArrow(
          g,
          r.x + r.w / 2 - dir.x * 34,
          r.y + r.h / 2 - dir.y * 34,
          r.x + r.w / 2 + dir.x * 34,
          r.y + r.h / 2 + dir.y * 34,
          new Color(72, 118, 210),
        );
      }
    }

    for (const wall of level.walls) {
      g.fillColor = new Color(102, 85, 64, 255);
      g.roundRect(wall.x, wall.y, wall.w, wall.h, 7);
      g.fill();
      g.fillColor = new Color(133, 114, 87, 255);
      g.roundRect(wall.x + 4, wall.y + 4, wall.w - 8, wall.h - 8, 6);
      g.fill();
    }

    g.strokeColor = new Color(39, 92, 55, 255);
    g.lineWidth = 5;
    g.roundRect(level.course.x, level.course.y, level.course.w, level.course.h, 26);
    g.stroke();
  }

  private drawArrow(g: Graphics, x1: number, y1: number, x2: number, y2: number, color: Color) {
    const d = new Vec2(x2 - x1, y2 - y1);
    if (d.lengthSqr() < 0.001) return;
    d.normalize();
    const p = new Vec2(-d.y, d.x);
    g.strokeColor = color;
    g.lineWidth = 3;
    g.moveTo(x1, y1);
    g.lineTo(x2, y2);
    g.stroke();
    g.fillColor = color;
    g.moveTo(x2, y2);
    g.lineTo(x2 - d.x * 14 + p.x * 7, y2 - d.y * 14 + p.y * 7);
    g.lineTo(x2 - d.x * 14 - p.x * 7, y2 - d.y * 14 - p.y * 7);
    g.close();
    g.fill();
  }

  private drawHole(level: LevelConfig) {
    this.holeNode.setPosition(level.hole.x, level.hole.y, 0);
    const g = this.holeG;
    g.clear();
    g.fillColor = new Color(36, 42, 52, 255);
    g.circle(0, 0, level.holeRadius);
    g.fill();
    g.fillColor = new Color(22, 28, 36, 200);
    g.circle(2, -2, Math.max(4, level.holeRadius - 5));
    g.fill();
    g.strokeColor = new Color(255, 255, 255, 80);
    g.lineWidth = 2;
    g.circle(0, 0, level.holeRadius);
    g.stroke();
  }

  private drawBall() {
    const g = this.ballG;
    g.clear();
    g.fillColor = new Color(255, 255, 255, 255);
    g.circle(0, 0, this.ballRadius);
    g.fill();
    g.strokeColor = new Color(214, 217, 227, 255);
    g.lineWidth = 2;
    g.circle(0, 0, this.ballRadius);
    g.stroke();
    g.fillColor = new Color(230, 236, 255, 180);
    g.circle(-4, 4, 4);
    g.fill();
  }

  private redrawFx() {
    const g = this.fxG;
    g.clear();
    if (this.phase !== "aiming" || !this.isAimDragValid) return;

    const launch = this.getAimLaunchVelocity();
    const power = Math.min(1, launch.length() / this.maxLaunchSpeed);
    const end = new Vec2(this.ballPos.x + launch.x * 0.18, this.ballPos.y + launch.y * 0.18);

    g.strokeColor = new Color(255, 255, 255, 210);
    g.lineWidth = 4;
    g.moveTo(this.ballPos.x, this.ballPos.y);
    g.lineTo(end.x, end.y);
    g.stroke();

    g.fillColor = power > 0.75 ? new Color(244, 109, 63, 110) : power > 0.45 ? new Color(252, 174, 78, 100) : new Color(112, 211, 133, 90);
    g.circle(this.ballPos.x, this.ballPos.y, this.ballRadius + 6 + power * 6);
    g.fill();
  }

  private syncBallVisual() {
    this.ballNode.setPosition(this.ballPos.x, this.ballPos.y, 0);
  }

  private clearCourse() {
    this.courseG.clear();
    this.dynamicG.clear();
    this.fxG.clear();
    this.holeG.clear();
    this.dynamicWalls = [];
    this.levelClock = 0;
    this.ballNode.setPosition(9999, 9999, 0);
    this.holeNode.setPosition(9999, 9999, 0);
  }

  private updateHud() {
    const level = this.level;
    if (!level || this.phase === "menu") {
      this.hudLevelLabel.string = "阳光高尔夫";
      this.hudStrokeLabel.string = "杆数 -";
      this.hudParLabel.string = "标准杆 -";
      this.hudBestLabel.string = "最佳 -";
      this.hudStarLabel.string = `累计星级 ${this.getTotalEarnedStars()}/${LEVEL_CONFIGS.length * 3}`;
      return;
    }
    const bestScore = this.saveData.bestStrokes[String(level.id)];
    const bestStars = bestScore == null ? null : this.calcStars(level, bestScore);
    const liveStars = this.strokes > 0 ? this.calcStars(level, this.strokes) : 0;
    const bestScoreText = bestScore == null ? "暂无" : `${bestScore}杆`;
    this.hudLevelLabel.string = `第${level.id}关 ${level.name}`;
    this.hudStrokeLabel.string = `杆数 ${this.strokes}/${level.maxStrokes}`;
    this.hudParLabel.string = `标准杆 ${level.par}`;
    this.hudBestLabel.string = `最佳 ${bestScoreText} ${bestStars == null ? "☆☆☆" : this.formatStars(bestStars)}`;
    this.hudStarLabel.string = `当前星级 ${this.formatStars(liveStars)}｜${this.getStarRuleText(level)}`;
  }

  private createLabel(
    parent: Node,
    pos: Vec3,
    fontSize: number,
    color: Color,
    text: string,
    width = 600,
    align: HorizontalTextAlignment = HorizontalTextAlignment.CENTER,
  ): Label {
    const n = new Node("Label");
    n.parent = parent;
    n.setPosition(pos);
    const t = n.addComponent(UITransform);
    t.setContentSize(width, 120);
    const label = n.addComponent(Label);
    label.string = text;
    label.fontSize = fontSize;
    label.lineHeight = Math.round(fontSize * 1.25);
    label.color = color;
    label.horizontalAlign = align;
    label.verticalAlign = VerticalTextAlignment.CENTER;
    return label;
  }

  private createButton(
    parent: Node,
    text: string,
    pos: Vec3,
    size: Vec2,
    color: Color,
    onClick: () => void,
  ): Node {
    const node = new Node(`Btn-${text}`);
    node.parent = parent;
    node.setPosition(pos);
    node.addComponent(UITransform).setContentSize(size.x, size.y);
    const g = node.addComponent(Graphics);
    const shadow = new Color(Math.floor(color.r * 0.72), Math.floor(color.g * 0.72), Math.floor(color.b * 0.72), 230);
    const top = new Color(Math.min(255, color.r + 20), Math.min(255, color.g + 20), Math.min(255, color.b + 20), 255);
    g.fillColor = shadow;
    g.roundRect(-size.x / 2, -size.y / 2 - 5, size.x, size.y, 14);
    g.fill();
    g.fillColor = color;
    g.roundRect(-size.x / 2, -size.y / 2 - 1, size.x, size.y, 14);
    g.fill();
    g.fillColor = top;
    g.roundRect(-size.x / 2 + 2, 0, size.x - 4, size.y / 2 - 2, 12);
    g.fill();
    g.fillColor = new Color(255, 255, 255, 26);
    g.roundRect(-size.x / 2 + 3, -size.y / 2 + 3, size.x - 6, size.y - 10, 11);
    g.fill();
    g.strokeColor = new Color(255, 255, 255, 120);
    g.lineWidth = 2;
    g.roundRect(-size.x / 2, -size.y / 2 - 1, size.x, size.y, 14);
    g.stroke();

    const label = this.createLabel(node, new Vec3(0, -1, 0), 24, new Color(36, 42, 52), text, size.x - 12);
    label.verticalAlign = VerticalTextAlignment.CENTER;
    label.horizontalAlign = HorizontalTextAlignment.CENTER;
    (node as any).__btnLabel = label;

    node.on(Node.EventType.TOUCH_START, () => {
      if (!node.active) return;
      node.setScale(0.98, 0.98, 1);
    });
    node.on(Node.EventType.TOUCH_END, () => {
      node.setScale(1, 1, 1);
      if (!node.active) return;
      if (node === this.nextBtn && (this.phase === "win" || this.phase === "lose")) {
        this.goNextPlayable();
        return;
      }
      onClick();
    });
    node.on(Node.EventType.TOUCH_CANCEL, () => {
      node.setScale(1, 1, 1);
    });

    return node;
  }

  private setButtonText(btn: Node, text: string) {
    const label = (btn as any).__btnLabel as Label | undefined;
    if (label) label.string = text;
  }

  private setButtonVisible(btn: Node, visible: boolean) {
    btn.active = visible;
  }

  private setNodeOpacity(node: Node, opacity: number) {
    const comp = node.getComponent(UIOpacity) ?? node.addComponent(UIOpacity);
    comp.opacity = opacity;
  }

  private isPointInRect(p: Vec2, rect: RectZone): boolean {
    return p.x >= rect.x && p.x <= rect.x + rect.w && p.y >= rect.y && p.y <= rect.y + rect.h;
  }

  private loadSave() {
    try {
      const raw = sys.localStorage.getItem(this.saveKey);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Partial<SaveData>;
      this.saveData.unlockedLevel = Math.max(1, Math.min(LEVEL_CONFIGS.length, Number(parsed.unlockedLevel ?? 1)));
      this.saveData.bestStrokes = parsed.bestStrokes ?? {};
    } catch {
      this.saveData = { unlockedLevel: 1, bestStrokes: {} };
    }
  }

  private save() {
    try {
      sys.localStorage.setItem(this.saveKey, JSON.stringify(this.saveData));
    } catch {
      // Ignore storage write errors in restricted environments.
    }
  }
}

