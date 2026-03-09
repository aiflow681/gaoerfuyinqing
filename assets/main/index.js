System.register("chunks:///_virtual/reporter.js", [], function (_export, _context) {
  "use strict";

  /**
   * 该模块用于检测循环引用。
   */

  /**
   * 上报由模块导入触发的循环引用错误。
   * 参数一：导入绑定名称。
   * 参数二：导入请求路径。
   * 参数三：来源模块元信息。
   * 参数四：循环引用检测附加数据。
   */
  function report(imported, moduleRequest, importMeta, extras) {
    console.warn("Found possible circular reference in \"" + importMeta.url + "\", happened when use \"" + imported + "\" imported from \"" + moduleRequest + "\" ", extras.error);
  }

  _export("report", report);

  return {
    setters: [],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/LevelConfigs.ts", ["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, COURSE, LEVEL_CONFIGS;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b198egr89hCdoItduejLJy/", "LevelConfigs", undefined);

      COURSE = {
        x: -560,
        y: -220,
        w: 1120,
        h: 500
      };

      _export("LEVEL_CONFIGS", LEVEL_CONFIGS = [{
        id: 1,
        name: "晨光练习场",
        par: 2,
        maxStrokes: 6,
        start: {
          x: -470,
          y: -60
        },
        hole: {
          x: 430,
          y: -60
        },
        holeRadius: 18,
        course: COURSE,
        walls: [{
          x: -40,
          y: -170,
          w: 50,
          h: 220
        }, {
          x: 160,
          y: 10,
          w: 55,
          h: 220
        }],
        movingWalls: [],
        sand: [{
          x: 270,
          y: -170,
          w: 180,
          h: 90
        }],
        water: [],
        boosts: [],
        winds: []
      }, {
        id: 2,
        name: "暖阳弯道",
        par: 3,
        maxStrokes: 7,
        start: {
          x: -500,
          y: 150
        },
        hole: {
          x: 460,
          y: -150
        },
        holeRadius: 18,
        course: COURSE,
        walls: [{
          x: -180,
          y: -20,
          w: 600,
          h: 40
        }, {
          x: 260,
          y: -140,
          w: 40,
          h: 240
        }, {
          x: -40,
          y: 120,
          w: 340,
          h: 40
        }],
        movingWalls: [{
          rect: {
            x: 40,
            y: -170,
            w: 36,
            h: 130
          },
          axis: "y",
          range: 70,
          speed: 1.9,
          phase: 0.4
        }],
        sand: [{
          x: -520,
          y: -210,
          w: 220,
          h: 90
        }, {
          x: 340,
          y: 120,
          w: 180,
          h: 100
        }],
        water: [],
        boosts: [],
        winds: []
      }, {
        id: 3,
        name: "日光跳台",
        par: 3,
        maxStrokes: 7,
        start: {
          x: -500,
          y: 0
        },
        hole: {
          x: 470,
          y: 150
        },
        holeRadius: 18,
        course: COURSE,
        walls: [{
          x: -160,
          y: -220,
          w: 40,
          h: 240
        }, {
          x: 60,
          y: 40,
          w: 40,
          h: 240
        }, {
          x: 260,
          y: -220,
          w: 40,
          h: 240
        }],
        movingWalls: [],
        sand: [{
          x: 320,
          y: -60,
          w: 180,
          h: 90
        }],
        water: [{
          x: -40,
          y: -220,
          w: 260,
          h: 80
        }],
        boosts: [{
          rect: {
            x: -320,
            y: -80,
            w: 120,
            h: 60
          },
          dir: {
            x: 1,
            y: 0.18
          },
          strength: 280
        }],
        winds: []
      }, {
        id: 4,
        name: "光束回廊",
        par: 4,
        maxStrokes: 8,
        start: {
          x: -520,
          y: -150
        },
        hole: {
          x: 500,
          y: 160
        },
        holeRadius: 18,
        course: COURSE,
        walls: [{
          x: -350,
          y: -40,
          w: 700,
          h: 32
        }, {
          x: -350,
          y: 120,
          w: 820,
          h: 32
        }, {
          x: -110,
          y: -220,
          w: 32,
          h: 180
        }, {
          x: 160,
          y: -8,
          w: 32,
          h: 128
        }, {
          x: 420,
          y: -220,
          w: 32,
          h: 340
        }],
        movingWalls: [{
          rect: {
            x: -8,
            y: -220,
            w: 32,
            h: 95
          },
          axis: "y",
          range: 70,
          speed: 2.5,
          phase: 0
        }, {
          rect: {
            x: 280,
            y: -8,
            w: 32,
            h: 128
          },
          axis: "y",
          range: 70,
          speed: 2.1,
          phase: 1.6
        }],
        sand: [{
          x: -520,
          y: 190,
          w: 200,
          h: 70
        }],
        water: [{
          x: 220,
          y: -220,
          w: 170,
          h: 110
        }],
        boosts: [],
        winds: [{
          rect: {
            x: -60,
            y: -190,
            w: 180,
            h: 110
          },
          force: {
            x: 0,
            y: 120
          }
        }]
      }, {
        id: 5,
        name: "海风球道",
        par: 4,
        maxStrokes: 8,
        start: {
          x: -480,
          y: 180
        },
        hole: {
          x: 450,
          y: 180
        },
        holeRadius: 18,
        course: COURSE,
        walls: [{
          x: -260,
          y: 40,
          w: 40,
          h: 240
        }, {
          x: -40,
          y: -220,
          w: 40,
          h: 240
        }, {
          x: 180,
          y: 40,
          w: 40,
          h: 240
        }],
        movingWalls: [{
          rect: {
            x: -340,
            y: -140,
            w: 80,
            h: 24
          },
          axis: "x",
          range: 120,
          speed: 1.4,
          phase: 0.7
        }],
        sand: [{
          x: -560,
          y: -110,
          w: 1120,
          h: 90
        }, {
          x: -120,
          y: 200,
          w: 240,
          h: 60
        }],
        water: [],
        boosts: [],
        winds: [{
          rect: {
            x: -560,
            y: -220,
            w: 1120,
            h: 500
          },
          force: {
            x: 0,
            y: -55
          }
        }]
      }, {
        id: 6,
        name: "太阳能加速带",
        par: 4,
        maxStrokes: 9,
        start: {
          x: -520,
          y: 0
        },
        hole: {
          x: 500,
          y: 0
        },
        holeRadius: 18,
        course: COURSE,
        walls: [{
          x: -320,
          y: -40,
          w: 220,
          h: 40
        }, {
          x: -20,
          y: 20,
          w: 220,
          h: 40
        }, {
          x: 280,
          y: -40,
          w: 160,
          h: 40
        }, {
          x: 120,
          y: -180,
          w: 40,
          h: 160
        }],
        movingWalls: [{
          rect: {
            x: -60,
            y: -120,
            w: 28,
            h: 140
          },
          axis: "y",
          range: 65,
          speed: 2.4,
          phase: 0.4
        }, {
          rect: {
            x: 240,
            y: -40,
            w: 28,
            h: 140
          },
          axis: "y",
          range: 65,
          speed: 2.4,
          phase: 2.2
        }],
        sand: [{
          x: -560,
          y: 160,
          w: 1120,
          h: 120
        }],
        water: [{
          x: -10,
          y: -220,
          w: 110,
          h: 90
        }],
        boosts: [{
          rect: {
            x: -470,
            y: -90,
            w: 130,
            h: 70
          },
          dir: {
            x: 1,
            y: 0
          },
          strength: 280
        }, {
          rect: {
            x: -180,
            y: 70,
            w: 130,
            h: 70
          },
          dir: {
            x: 1,
            y: 0
          },
          strength: 300
        }, {
          rect: {
            x: 150,
            y: -90,
            w: 130,
            h: 70
          },
          dir: {
            x: 1,
            y: 0
          },
          strength: 320
        }],
        winds: []
      }, {
        id: 7,
        name: "黄昏迷宫",
        par: 5,
        maxStrokes: 10,
        start: {
          x: -520,
          y: -180
        },
        hole: {
          x: 510,
          y: 180
        },
        holeRadius: 18,
        course: COURSE,
        walls: [{
          x: -420,
          y: -70,
          w: 780,
          h: 28
        }, {
          x: -160,
          y: 40,
          w: 720,
          h: 28
        }, {
          x: -520,
          y: 150,
          w: 860,
          h: 28
        }, {
          x: -260,
          y: -220,
          w: 28,
          h: 260
        }, {
          x: 70,
          y: -70,
          w: 28,
          h: 260
        }, {
          x: 350,
          y: -220,
          w: 28,
          h: 260
        }],
        movingWalls: [{
          rect: {
            x: -40,
            y: -160,
            w: 180,
            h: 24
          },
          axis: "x",
          range: 120,
          speed: 1.7,
          phase: 1.1
        }, {
          rect: {
            x: 180,
            y: 90,
            w: 150,
            h: 24
          },
          axis: "x",
          range: 110,
          speed: 1.9,
          phase: 2.6
        }],
        sand: [{
          x: -560,
          y: -220,
          w: 170,
          h: 90
        }, {
          x: 410,
          y: 190,
          w: 150,
          h: 70
        }],
        water: [{
          x: 140,
          y: 150,
          w: 170,
          h: 90
        }],
        boosts: [],
        winds: [{
          rect: {
            x: -80,
            y: -220,
            w: 200,
            h: 110
          },
          force: {
            x: 90,
            y: 0
          }
        }]
      }, {
        id: 8,
        name: "冠军洞",
        par: 5,
        maxStrokes: 10,
        start: {
          x: -500,
          y: 200
        },
        hole: {
          x: 500,
          y: -180
        },
        holeRadius: 20,
        course: COURSE,
        walls: [{
          x: -380,
          y: 80,
          w: 760,
          h: 30
        }, {
          x: -560,
          y: -40,
          w: 880,
          h: 30
        }, {
          x: -260,
          y: -160,
          w: 600,
          h: 30
        }, {
          x: -140,
          y: -220,
          w: 30,
          h: 180
        }, {
          x: 140,
          y: -100,
          w: 30,
          h: 180
        }, {
          x: 400,
          y: -220,
          w: 30,
          h: 180
        }],
        movingWalls: [{
          rect: {
            x: -240,
            y: 10,
            w: 28,
            h: 100
          },
          axis: "y",
          range: 70,
          speed: 2.8,
          phase: 0.3
        }, {
          rect: {
            x: 40,
            y: -110,
            w: 28,
            h: 100
          },
          axis: "y",
          range: 70,
          speed: 2.8,
          phase: 1.7
        }, {
          rect: {
            x: 300,
            y: -220,
            w: 100,
            h: 24
          },
          axis: "x",
          range: 90,
          speed: 2.1,
          phase: 2.2
        }],
        sand: [{
          x: -560,
          y: 170,
          w: 230,
          h: 90
        }, {
          x: -70,
          y: 170,
          w: 220,
          h: 90
        }, {
          x: 300,
          y: 20,
          w: 220,
          h: 90
        }],
        water: [{
          x: -10,
          y: -220,
          w: 120,
          h: 90
        }, {
          x: 250,
          y: -220,
          w: 120,
          h: 90
        }],
        boosts: [{
          rect: {
            x: -250,
            y: -210,
            w: 120,
            h: 60
          },
          dir: {
            x: 1,
            y: 0.25
          },
          strength: 320
        }],
        winds: [{
          rect: {
            x: -560,
            y: -220,
            w: 1120,
            h: 500
          },
          force: {
            x: -20,
            y: 25
          }
        }, {
          rect: {
            x: 220,
            y: -20,
            w: 260,
            h: 140
          },
          force: {
            x: 0,
            y: -140
          }
        }]
      }]);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});

System.register("chunks:///_virtual/SunGolfGame.ts", ["./reporter.js", "cc", "./LevelConfigs.ts"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Graphics, HorizontalTextAlignment, Label, Node, ResolutionPolicy, UITransform, UIOpacity, Vec2, Vec3, VerticalTextAlignment, Widget, sys, tween, view, LEVEL_CONFIGS, _dec, _class, _crd, ccclass, SunGolfGame;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _reportPossibleCrUseOfLEVEL_CONFIGS(extras) {
    _reporterNs.report("LEVEL_CONFIGS", "./data/LevelConfigs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLevelConfig(extras) {
    _reporterNs.report("LevelConfig", "./data/LevelConfigs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMovingWallConfig(extras) {
    _reporterNs.report("MovingWallConfig", "./data/LevelConfigs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRectZone(extras) {
    _reporterNs.report("RectZone", "./data/LevelConfigs", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      Graphics = _cc.Graphics;
      HorizontalTextAlignment = _cc.HorizontalTextAlignment;
      Label = _cc.Label;
      Node = _cc.Node;
      ResolutionPolicy = _cc.ResolutionPolicy;
      UITransform = _cc.UITransform;
      UIOpacity = _cc.UIOpacity;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      VerticalTextAlignment = _cc.VerticalTextAlignment;
      Widget = _cc.Widget;
      sys = _cc.sys;
      tween = _cc.tween;
      view = _cc.view;
    }, function (_unresolved_2) {
      LEVEL_CONFIGS = _unresolved_2.LEVEL_CONFIGS;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e2f17JODApFprEwVZ3uAiXP", "SunGolfGame", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'EventTouch', 'Graphics', 'HorizontalTextAlignment', 'Label', 'Node', 'ResolutionPolicy', 'UITransform', 'UIOpacity', 'Vec2', 'Vec3', 'VerticalTextAlignment', 'Widget', 'sys', 'tween', 'view']);

      ({
        ccclass
      } = _decorator);

      _export("SunGolfGame", SunGolfGame = (_dec = ccclass("SunGolfGame"), _dec(_class = class SunGolfGame extends Component {
        constructor() {
          super(...arguments);
          this.designW = 1280;
          this.designH = 720;
          this.saveKey = "sun_golf_save_v1";
          this.ballRadius = 12;
          this.wallBounce = 0.82;
          this.maxLaunchSpeed = 920;
          this.stopSpeed = 8;
          this.courseNode = void 0;
          this.courseG = void 0;
          this.dynamicNode = void 0;
          this.dynamicG = void 0;
          this.fxNode = void 0;
          this.fxG = void 0;
          this.ballNode = void 0;
          this.ballG = void 0;
          this.holeNode = void 0;
          this.holeG = void 0;
          this.uiLayer = void 0;
          this.overlayNode = void 0;
          this.overlayPanelNode = void 0;
          this.overlayPanelG = void 0;
          this.overlayTitle = void 0;
          this.overlayDesc = void 0;
          this.levelListLabel = void 0;
          this.menuRoot = void 0;
          this.menuListLabel = void 0;
          this.menuListHighlightG = void 0;
          this.menuGameTitleLabel = void 0;
          this.menuGameSubLabel = void 0;
          this.menuSelectedTitleLabel = void 0;
          this.menuSelectedMetaLabel = void 0;
          this.menuSelectedBestLabel = void 0;
          this.menuSelectedRuleLabel = void 0;
          this.menuProgressLabel = void 0;
          this.menuListHeaderLabel = void 0;
          this.menuListTipLabel = void 0;
          this.menuHeroBadgeLabel = void 0;
          this.hudLevelLabel = void 0;
          this.hudStrokeLabel = void 0;
          this.hudParLabel = void 0;
          this.hudBestLabel = void 0;
          this.hudStarLabel = void 0;
          this.hudPowerLabel = void 0;
          this.miniMsgLabel = void 0;
          this.hudTopBarNode = void 0;
          this.hudBottomBarNode = void 0;
          this.startBtn = void 0;
          this.nextBtn = void 0;
          this.restartBtn = void 0;
          this.menuBtn = void 0;
          this.prevBtn = void 0;
          this.currentLevelIndex = 0;
          this.phase = "menu";
          this.strokes = 0;
          this.levelClock = 0;
          this.saveData = {
            unlockedLevel: 1,
            bestStrokes: {}
          };
          this.ballPos = new Vec2();
          this.ballVel = new Vec2();
          this.lastSafePos = new Vec2();
          this.aimCurrentTouch = new Vec2();
          this.isAimDragValid = false;
          this.dynamicWalls = [];
        }

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

        update(dt) {
          if (this.phase === "ready" || this.phase === "aiming") {
            this.advanceDynamicWalls(dt);
          }

          if (this.phase !== "moving") {
            if (this.phase === "aiming") this.redrawFx();
            return;
          }

          var level = this.level;
          if (!level) return;
          var remain = Math.min(dt, 1 / 20);

          while (remain > 0) {
            var step = Math.min(remain, 1 / 120);
            remain -= step;
            this.advanceDynamicWalls(step);
            this.simulateBall(step, level);
            if (this.phase !== "moving") break;
          }

          this.syncBallVisual();
          this.redrawFx();
          this.updateHud();
        }

        get level() {
          var _this$currentLevelInd;

          return (_this$currentLevelInd = (_crd && LEVEL_CONFIGS === void 0 ? (_reportPossibleCrUseOfLEVEL_CONFIGS({
            error: Error()
          }), LEVEL_CONFIGS) : LEVEL_CONFIGS)[this.currentLevelIndex]) != null ? _this$currentLevelInd : null;
        }

        buildRuntimeScene() {
          var _this$node$getCompone, _this$node$getCompone2;

          var rootTransform = (_this$node$getCompone = this.node.getComponent(UITransform)) != null ? _this$node$getCompone : this.node.addComponent(UITransform);
          rootTransform.setContentSize(this.designW, this.designH);
          var widget = (_this$node$getCompone2 = this.node.getComponent(Widget)) != null ? _this$node$getCompone2 : this.node.addComponent(Widget);
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

        buildHud() {
          var topBar = new Node("顶部信息条");
          this.hudTopBarNode = topBar;
          topBar.parent = this.uiLayer;
          topBar.setPosition(0, 314, 0);
          topBar.addComponent(UITransform).setContentSize(1180, 74);
          var topG = topBar.addComponent(Graphics);
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
          var bottomBar = new Node("底部提示条");
          this.hudBottomBarNode = bottomBar;
          bottomBar.parent = this.uiLayer;
          bottomBar.setPosition(0, -318, 0);
          bottomBar.addComponent(UITransform).setContentSize(1180, 82);
          var bottomG = bottomBar.addComponent(Graphics);
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
          this.hudLevelLabel = this.createLabel(this.uiLayer, new Vec3(-560, 325, 0), 28, new Color(32, 42, 58), "阳光高尔夫", 680, HorizontalTextAlignment.LEFT);
          this.hudLevelLabel.node.setPosition(-398, 325, 0);
          var hudLevelTransform = this.hudLevelLabel.node.getComponent(UITransform);
          if (hudLevelTransform) hudLevelTransform.setContentSize(340, 120);
          this.hudLevelLabel.enableWrapText = false;
          this.hudLevelLabel.overflow = Label.Overflow.SHRINK;
          this.hudStrokeLabel = this.createLabel(this.uiLayer, new Vec3(-90, 325, 0), 28, new Color(32, 42, 58), "杆数");
          this.hudParLabel = this.createLabel(this.uiLayer, new Vec3(110, 325, 0), 28, new Color(32, 42, 58), "标准杆");
          this.hudBestLabel = this.createLabel(this.uiLayer, new Vec3(410, 325, 0), 28, new Color(32, 42, 58), "最佳");
          this.hudStarLabel = this.createLabel(this.uiLayer, new Vec3(0, -295, 0), 20, new Color(62, 78, 102), "星级", 1100);
          this.miniMsgLabel = this.createLabel(this.uiLayer, new Vec3(0, 292, 0), 22, new Color(230, 119, 54), "", 760);
          this.hudPowerLabel = this.createLabel(this.uiLayer, new Vec3(0, -334, 0), 24, new Color(54, 66, 86), "按住小球，向反方向拖拽后松手击球", 1100);
        }

        buildOverlay() {
          var _this$menuListLabel$n, _this$levelListLabel$;

          this.overlayNode = new Node("Overlay");
          this.overlayNode.parent = this.uiLayer;
          this.overlayNode.addComponent(UITransform).setContentSize(this.designW, this.designH);
          this.overlayNode.addComponent(UIOpacity).opacity = 255;
          var mask = new Node("Mask");
          mask.parent = this.overlayNode;
          mask.addComponent(UITransform).setContentSize(this.designW, this.designH);
          var maskG = mask.addComponent(Graphics);
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
          var panel = new Node("Panel");
          this.overlayPanelNode = panel;
          panel.parent = this.overlayNode;
          panel.setPosition(0, 8, 0);
          panel.addComponent(UITransform).setContentSize(1020, 568);
          this.overlayPanelG = panel.addComponent(Graphics);
          this.menuRoot = new Node("开始页布局");
          this.menuRoot.parent = panel;
          this.menuRoot.addComponent(UITransform).setContentSize(1020, 568);
          var menuBg = new Node("开始页布局背景");
          menuBg.parent = this.menuRoot;
          menuBg.addComponent(UITransform).setContentSize(1020, 568);
          var menuBgG = menuBg.addComponent(Graphics);
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
          var menuListHighlightNode = new Node("关卡列表高亮");
          menuListHighlightNode.parent = this.menuRoot;
          menuListHighlightNode.addComponent(UITransform).setContentSize(1020, 568);
          this.menuListHighlightG = menuListHighlightNode.addComponent(Graphics);
          this.menuHeroBadgeLabel = this.createLabel(this.menuRoot, new Vec3(-330, 206, 0), 16, new Color(163, 116, 22), "阳光球场联赛", 300, HorizontalTextAlignment.LEFT);
          this.menuHeroBadgeLabel.lineHeight = 20;
          this.menuHeroBadgeLabel.node.active = false;
          this.menuGameTitleLabel = this.createLabel(this.menuRoot, new Vec3(-274, 170, 0), 42, new Color(31, 42, 60), "阳光高尔夫", 390, HorizontalTextAlignment.LEFT);
          this.menuGameSubLabel = this.createLabel(this.menuRoot, new Vec3(-274, 132, 0), 18, new Color(104, 117, 139), "轻竞技闯关｜反弹路线｜星级挑战", 390, HorizontalTextAlignment.LEFT);
          this.menuGameSubLabel.node.active = false;
          this.menuSelectedTitleLabel = this.createLabel(this.menuRoot, new Vec3(-274, 86, 0), 28, new Color(31, 42, 60), "第1关 晨光练习场", 390, HorizontalTextAlignment.LEFT);
          this.menuSelectedMetaLabel = this.createLabel(this.menuRoot, new Vec3(-274, 48, 0), 20, new Color(80, 94, 116), "标准杆 2｜已解锁", 390, HorizontalTextAlignment.LEFT);
          this.menuSelectedBestLabel = this.createLabel(this.menuRoot, new Vec3(-274, 12, 0), 20, new Color(51, 74, 116), "最佳成绩：暂无｜星级：☆☆☆", 390, HorizontalTextAlignment.LEFT);
          this.menuSelectedRuleLabel = this.createLabel(this.menuRoot, new Vec3(-274, -26, 0), 18, new Color(98, 111, 131), "3星≤标准杆｜2星≤标准杆+1｜完成即得1星", 390, HorizontalTextAlignment.LEFT);
          this.menuSelectedRuleLabel.lineHeight = 24;
          this.menuProgressLabel = this.createLabel(this.menuRoot, new Vec3(-274, -66, 0), 20, new Color(204, 127, 24), "累计星级 0/24", 390, HorizontalTextAlignment.LEFT);
          this.menuListHeaderLabel = this.createLabel(this.menuRoot, new Vec3(220, 203, 0), 26, new Color(41, 54, 78), "关卡选择", 430, HorizontalTextAlignment.LEFT);
          this.menuListTipLabel = this.createLabel(this.menuRoot, new Vec3(220, 170, 0), 16, new Color(111, 126, 149), "使用“上一关 / 下一关”切换已解锁关卡", 430, HorizontalTextAlignment.LEFT);
          this.menuListTipLabel.node.active = false;
          this.menuListLabel = this.createLabel(this.menuRoot, new Vec3(220, 17, 0), 18, new Color(56, 72, 95), "", 440, HorizontalTextAlignment.LEFT);
          this.menuListLabel.lineHeight = 34;
          this.menuListLabel.verticalAlign = VerticalTextAlignment.TOP;
          (_this$menuListLabel$n = this.menuListLabel.node.getComponent(UITransform)) == null || _this$menuListLabel$n.setContentSize(440, 286);
          this.overlayTitle = this.createLabel(panel, new Vec3(0, 164, 0), 42, new Color(34, 40, 52), "阳光高尔夫", 900);
          this.overlayDesc = this.createLabel(panel, new Vec3(0, 110, 0), 22, new Color(70, 82, 98), "", 900);
          this.levelListLabel = this.createLabel(panel, new Vec3(0, 6, 0), 20, new Color(65, 78, 95), "", 900);
          this.levelListLabel.lineHeight = 28;
          this.levelListLabel.verticalAlign = VerticalTextAlignment.TOP;
          (_this$levelListLabel$ = this.levelListLabel.node.getComponent(UITransform)) == null || _this$levelListLabel$.setContentSize(900, 260);
          this.startBtn = this.createButton(panel, "开始游戏", new Vec3(-330, -214, 0), new Vec2(240, 66), new Color(250, 188, 66), () => {
            if (this.phase === "menu") this.startLevel(this.currentLevelIndex);else this.restartLevel();
          });
          this.prevBtn = this.createButton(panel, "上一关", new Vec3(12, -214, 0), new Vec2(146, 62), new Color(150, 170, 214), () => this.pickLevel(-1));
          this.nextBtn = this.createButton(panel, "下一关", new Vec3(176, -214, 0), new Vec2(146, 62), new Color(150, 170, 214), () => this.pickLevel(1));
          this.restartBtn = this.createButton(panel, "重开本关", new Vec3(350, -214, 0), new Vec2(174, 62), new Color(237, 146, 75), () => this.restartLevel());
          this.menuBtn = this.createButton(panel, "返回菜单", new Vec3(0, -144, 0), new Vec2(190, 54), new Color(109, 133, 176), () => this.showMenu());
          this.setOverlayMenuLayoutActive(true);
        }

        setHudVisible(visible) {
          var nodes = [this.hudTopBarNode, this.hudBottomBarNode, this.hudLevelLabel.node, this.hudStrokeLabel.node, this.hudParLabel.node, this.hudBestLabel.node, this.hudStarLabel.node, this.hudPowerLabel.node, this.miniMsgLabel.node];

          for (var n of nodes) {
            if (n) n.active = visible;
          }
        }

        drawOverlayPanelForMenu() {
          var g = this.overlayPanelG;
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

        drawOverlayPanelForResult() {
          var g = this.overlayPanelG;
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

        setOverlayMenuLayoutActive(isMenu) {
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
            var _this$levelListLabel$2;

            this.drawOverlayPanelForResult();
            this.overlayTitle.node.setPosition(0, 164, 0);
            this.overlayDesc.node.setPosition(0, 108, 0);
            this.levelListLabel.node.setPosition(0, 10, 0);
            (_this$levelListLabel$2 = this.levelListLabel.node.getComponent(UITransform)) == null || _this$levelListLabel$2.setContentSize(860, 220);
            this.startBtn.setPosition(0, -48, 0);
            this.prevBtn.setPosition(-150, -182, 0);
            this.nextBtn.setPosition(150, -182, 0);
            this.restartBtn.setPosition(-170, -182, 0);
            this.menuBtn.setPosition(0, -112, 0);
          }
        }

        refreshMenuSelectionCard() {
          var level = this.level;
          if (!level) return;
          var bestScore = this.saveData.bestStrokes[String(level.id)];
          var bestStars = bestScore == null ? null : this.calcStars(level, bestScore);
          var unlocked = level.id <= this.saveData.unlockedLevel;
          var bestText = bestScore == null ? "暂无记录" : bestScore + "\u6746";
          var starsText = bestStars == null ? "☆☆☆" : this.formatStars(bestStars);
          this.menuHeroBadgeLabel.string = unlocked ? "阳光球场联赛｜已解锁关卡" : "阳光球场联赛｜待解锁关卡";
          this.menuGameTitleLabel.string = "阳光高尔夫";
          this.menuGameSubLabel.string = "\u7B2C" + level.id + "\u5173\u7126\u70B9\uFF1A" + level.name;
          this.menuSelectedTitleLabel.string = "\u7B2C" + level.id + "\u5173  " + level.name;
          this.menuSelectedMetaLabel.string = "\u6807\u51C6\u6746 " + level.par + "\uFF5C\u6700\u5927\u6746\u6570 " + level.maxStrokes + "\uFF5C" + (unlocked ? "已解锁" : "未解锁");
          this.menuSelectedBestLabel.string = "\u6700\u4F73\u6210\u7EE9\uFF1A" + bestText + "\uFF5C\u6700\u4F73\u661F\u7EA7\uFF1A" + starsText;
          this.menuSelectedRuleLabel.string = this.getStarRuleText(level);
          this.menuProgressLabel.string = "\u7D2F\u8BA1\u661F\u7EA7 " + this.getTotalEarnedStars() + "/" + (_crd && LEVEL_CONFIGS === void 0 ? (_reportPossibleCrUseOfLEVEL_CONFIGS({
            error: Error()
          }), LEVEL_CONFIGS) : LEVEL_CONFIGS).length * 3 + "\uFF5C\u5DF2\u89E3\u9501\u5173\u5361 " + this.saveData.unlockedLevel + "/" + (_crd && LEVEL_CONFIGS === void 0 ? (_reportPossibleCrUseOfLEVEL_CONFIGS({
            error: Error()
          }), LEVEL_CONFIGS) : LEVEL_CONFIGS).length;
          this.menuListHeaderLabel.string = "\u5173\u5361\u9009\u62E9\uFF08\u5F53\u524D\u7B2C" + level.id + "\u5173\uFF09";
          this.menuListTipLabel.string = unlocked ? "建议优先挑战 3 星，再推进下一关" : "请先通关前置关卡解锁本关";
        }

        redrawMenuListHighlights() {
          if (!this.menuListHighlightG || !this.menuListLabel) return;
          var g = this.menuListHighlightG;
          g.clear();
          var t = this.menuListLabel.node.getComponent(UITransform);
          if (!t) return;
          var rowHeight = this.menuListLabel.lineHeight || 34;
          var width = t.width;
          var height = t.height;
          var center = this.menuListLabel.node.getPosition();
          var horizontalPadding = 20;
          var left = center.x - width / 2 - horizontalPadding;
          var top = center.y + height / 2 - 6;
          var fontSize = this.menuListLabel.actualFontSize || this.menuListLabel.fontSize || rowHeight;
          var rowWidth = width + horizontalPadding * 2;
          var rowRectHeight = rowHeight - 4;
          var rowVerticalOffset = Math.round((rowHeight - rowRectHeight) * 0.5 + (rowHeight - fontSize) * 0.5);

          for (var i = 0; i < (_crd && LEVEL_CONFIGS === void 0 ? (_reportPossibleCrUseOfLEVEL_CONFIGS({
            error: Error()
          }), LEVEL_CONFIGS) : LEVEL_CONFIGS).length; i++) {
            var level = (_crd && LEVEL_CONFIGS === void 0 ? (_reportPossibleCrUseOfLEVEL_CONFIGS({
              error: Error()
            }), LEVEL_CONFIGS) : LEVEL_CONFIGS)[i];
            var rowBottom = top - rowHeight * (i + 1) + rowVerticalOffset;
            var isSelected = i === this.currentLevelIndex;
            var unlocked = level.id <= this.saveData.unlockedLevel;

            if (isSelected) {
              // 按界面需求移除选中行高亮。
            } else if (unlocked) {
              g.fillColor = new Color(255, 255, 255, 52);
              g.roundRect(left, rowBottom, rowWidth, rowRectHeight, 10);
              g.fill();
            } else {
              g.fillColor = new Color(225, 231, 243, 78);
              g.roundRect(left, rowBottom, rowWidth, rowRectHeight, 10);
              g.fill();
            }
          }
        }

        bindInput() {
          this.courseNode.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.courseNode.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.courseNode.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.courseNode.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }

        showMenu() {
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
          this.setButtonText(this.startBtn, "\u5F00\u59CB\u7B2C " + (this.currentLevelIndex + 1) + " \u5173");
          this.miniMsgLabel.string = "";
          this.hudPowerLabel.string = "在菜单中选择已解锁关卡开始挑战";
          this.hudStarLabel.string = "星级规则：3星≤标准杆，2星≤标准杆+1，完成即至少1星";
          this.updateHud();
          this.redrawFx();
        }

        refreshLevelListText() {
          var lines = [];
          var unlocked = this.saveData.unlockedLevel;

          for (var i = 0; i < (_crd && LEVEL_CONFIGS === void 0 ? (_reportPossibleCrUseOfLEVEL_CONFIGS({
            error: Error()
          }), LEVEL_CONFIGS) : LEVEL_CONFIGS).length; i++) {
            var lv = (_crd && LEVEL_CONFIGS === void 0 ? (_reportPossibleCrUseOfLEVEL_CONFIGS({
              error: Error()
            }), LEVEL_CONFIGS) : LEVEL_CONFIGS)[i];
            var lock = i + 1 <= unlocked ? "已解锁" : "未解锁";
            var bestStars = this.getBestStars(lv);
            var rowPrefix = i === this.currentLevelIndex ? "●" : "○";
            lines.push(rowPrefix + " \u7B2C" + lv.id + "\u5173 " + lv.name + "\uFF5CP" + lv.par + "\uFF5C" + lock + "\uFF5C" + (bestStars == null ? "☆☆☆" : this.formatStars(bestStars)));
          }

          this.menuListLabel.string = lines.join("\n");
          this.refreshMenuSelectionCard();
          this.redrawMenuListHighlights();
        }

        pickLevel(dir) {
          if (this.phase !== "menu") return;
          var maxIndex = Math.max(0, this.saveData.unlockedLevel - 1);
          var next = this.currentLevelIndex + dir;
          if (next < 0 || next > maxIndex) return;
          this.currentLevelIndex = next;
          this.refreshLevelListText();
          this.setButtonText(this.startBtn, "\u5F00\u59CB\u7B2C " + (this.currentLevelIndex + 1) + " \u5173");
        }

        startLevel(index) {
          this.currentLevelIndex = Math.max(0, Math.min(index, (_crd && LEVEL_CONFIGS === void 0 ? (_reportPossibleCrUseOfLEVEL_CONFIGS({
            error: Error()
          }), LEVEL_CONFIGS) : LEVEL_CONFIGS).length - 1));
          this.phase = "ready";
          this.strokes = 0;
          this.setHudVisible(true);
          var level = this.level;
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

        restartLevel() {
          this.startLevel(this.currentLevelIndex);
        }

        onTouchStart(event) {
          if (this.phase !== "ready" && this.phase !== "aiming") return;
          var p = this.touchToLocal(event);
          if (!p) return;
          if (Vec2.distance(p, this.ballPos) > this.ballRadius + 22) return;
          this.phase = "aiming";
          this.isAimDragValid = true;
          this.aimCurrentTouch.set(p.x, p.y);
          this.redrawFx();
        }

        onTouchMove(event) {
          if (this.phase !== "aiming" || !this.isAimDragValid) return;
          var p = this.touchToLocal(event);
          if (!p) return;
          this.aimCurrentTouch.set(p.x, p.y);
          var launch = this.getAimLaunchVelocity();
          this.hudPowerLabel.string = "\u529B\u5EA6 " + Math.round(launch.length()) + "/" + this.maxLaunchSpeed;
          this.redrawFx();
        }

        onTouchEnd(_event) {
          if (this.phase !== "aiming" || !this.isAimDragValid) return;
          var launch = this.getAimLaunchVelocity();
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
          this.miniMsgLabel.string = "\u7B2C " + this.strokes + " \u6746";
          this.updateHud();
        }

        getAimLaunchVelocity() {
          var drag = this.aimCurrentTouch.clone().subtract(this.ballPos).multiplyScalar(-2.8);
          var len = drag.length();

          if (len > this.maxLaunchSpeed) {
            drag.multiplyScalar(this.maxLaunchSpeed / len);
          }

          return drag;
        }

        touchToLocal(event) {
          var ui = this.courseNode.getComponent(UITransform);
          if (!ui) return null;
          var p = event.getUILocation();
          var local = ui.convertToNodeSpaceAR(new Vec3(p.x, p.y, 0));
          return new Vec2(local.x, local.y);
        }

        initDynamicWalls(level) {
          var _level$movingWalls;

          this.levelClock = 0;
          this.dynamicWalls = ((_level$movingWalls = level.movingWalls) != null ? _level$movingWalls : []).map(config => ({
            config,
            rect: _extends({}, config.rect),
            vx: 0,
            vy: 0
          }));
          this.syncDynamicWalls(0);
          this.drawDynamicWalls();
        }

        advanceDynamicWalls(dt) {
          if (this.dynamicWalls.length === 0) return;
          this.levelClock += dt;
          this.syncDynamicWalls(this.levelClock);
          this.drawDynamicWalls();
        }

        syncDynamicWalls(time) {
          for (var wall of this.dynamicWalls) {
            var _cfg$phase;

            var cfg = wall.config;
            var angle = time * cfg.speed + ((_cfg$phase = cfg.phase) != null ? _cfg$phase : 0);
            var offset = Math.sin(angle) * cfg.range;
            var velocity = Math.cos(angle) * cfg.range * cfg.speed;
            wall.rect.x = cfg.rect.x + (cfg.axis === "x" ? offset : 0);
            wall.rect.y = cfg.rect.y + (cfg.axis === "y" ? offset : 0);
            wall.rect.w = cfg.rect.w;
            wall.rect.h = cfg.rect.h;
            wall.vx = cfg.axis === "x" ? velocity : 0;
            wall.vy = cfg.axis === "y" ? velocity : 0;
          }
        }

        drawDynamicWalls() {
          var g = this.dynamicG;
          g.clear();
          if (this.dynamicWalls.length === 0) return;

          for (var i = 0; i < this.dynamicWalls.length; i++) {
            var wall = this.dynamicWalls[i];
            var r = wall.rect;
            var pulse = 0.75 + 0.25 * Math.sin(this.levelClock * 5 + i * 0.9);
            g.fillColor = new Color(214, 95, 88, Math.round(200 * pulse));
            g.roundRect(r.x, r.y, r.w, r.h, 8);
            g.fill();
            g.strokeColor = new Color(255, 226, 154, 220);
            g.lineWidth = 2;
            g.roundRect(r.x, r.y, r.w, r.h, 8);
            g.stroke();
            var speed = Math.sqrt(wall.vx * wall.vx + wall.vy * wall.vy);

            if (speed > 8) {
              var dir = new Vec2(wall.vx, wall.vy).normalize();
              this.drawArrow(g, r.x + r.w / 2 - dir.x * 20, r.y + r.h / 2 - dir.y * 20, r.x + r.w / 2 + dir.x * 20, r.y + r.h / 2 + dir.y * 20, new Color(255, 242, 196));
            }
          }
        }

        calcStars(level, strokes) {
          if (strokes <= 0) return 0;
          if (strokes <= level.par) return 3;
          if (strokes <= level.par + 1) return 2;
          return 1;
        }

        formatStars(stars) {
          var safe = Math.max(0, Math.min(3, stars));
          return "" + "★".repeat(safe) + "☆".repeat(3 - safe);
        }

        getBestStars(level) {
          var best = this.saveData.bestStrokes[String(level.id)];
          if (best == null) return null;
          return this.calcStars(level, best);
        }

        getTotalEarnedStars() {
          var total = 0;

          for (var level of _crd && LEVEL_CONFIGS === void 0 ? (_reportPossibleCrUseOfLEVEL_CONFIGS({
            error: Error()
          }), LEVEL_CONFIGS) : LEVEL_CONFIGS) {
            var stars = this.getBestStars(level);
            if (stars) total += stars;
          }

          return total;
        }

        getStarRuleText(level) {
          return "3\u661F\uFF1A\u2264\u6807\u51C6\u6746(" + level.par + ")\uFF5C2\u661F\uFF1A\u2264" + (level.par + 1) + "\u6746\uFF5C1\u661F\uFF1A\u5B8C\u6210\u5373\u53EF";
        }

        simulateBall(dt, level) {
          var pos = this.ballPos;
          var vel = this.ballVel;
          var prevPos = new Vec2(pos.x, pos.y);

          for (var wind of level.winds) {
            if (this.isPointInRect(pos, wind.rect)) {
              vel.x += wind.force.x * dt;
              vel.y += wind.force.y * dt;
            }
          }

          for (var boost of level.boosts) {
            if (!this.isPointInRect(pos, boost.rect)) continue;
            var dir = new Vec2(boost.dir.x, boost.dir.y);
            if (dir.lengthSqr() < 0.0001) continue;
            dir.normalize();
            vel.x += dir.x * boost.strength * dt;
            vel.y += dir.y * boost.strength * dt;
          }

          pos.x += vel.x * dt;
          pos.y += vel.y * dt;
          this.resolveCourseBoundary(level.course);

          for (var wall of level.walls) this.resolveRectCollision(wall);

          for (var _wall of this.dynamicWalls) this.resolveRectCollision(_wall.rect, _wall.vx, _wall.vy);

          var drag = 0.992;
          var onSand = false;

          for (var sand of level.sand) {
            if (this.isPointInRect(pos, sand)) {
              onSand = true;
              drag = 0.968;
              break;
            }
          }

          vel.multiplyScalar(Math.pow(drag, dt * 60));
          if (onSand) vel.multiplyScalar(0.985);

          for (var water of level.water) {
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

        tryHoleCapture(level, prevPos) {
          var holePos = new Vec2(level.hole.x, level.hole.y);
          var touchRadius = level.holeRadius + this.ballRadius;

          if (this.isSegmentTouchCircle(prevPos, this.ballPos, holePos, touchRadius)) {
            this.finishLevelWin();
          }
        }

        isSegmentTouchCircle(a, b, center, radius) {
          var abx = b.x - a.x;
          var aby = b.y - a.y;
          var apx = center.x - a.x;
          var apy = center.y - a.y;
          var abLenSq = abx * abx + aby * aby;
          var t = 0;

          if (abLenSq > 0.000001) {
            t = (apx * abx + apy * aby) / abLenSq;
            t = Math.max(0, Math.min(1, t));
          }

          var nearestX = a.x + abx * t;
          var nearestY = a.y + aby * t;
          var dx = nearestX - center.x;
          var dy = nearestY - center.y;
          return dx * dx + dy * dy <= radius * radius;
        }

        handleWaterPenalty() {
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
          tween(this.ballNode).to(0.12, {
            scale: new Vec3(1, 1, 1)
          }).start();

          if (this.level && this.strokes >= this.level.maxStrokes) {
            this.finishLevelLose();
          }
        }

        finishLevelWin() {
          var level = this.level;
          if (!level) return;
          this.phase = "win";
          this.ballVel.set(0, 0);
          this.ballPos.set(level.hole.x, level.hole.y);
          this.syncBallVisual();
          var key = String(level.id);
          var prevBest = this.saveData.bestStrokes[key];
          var isNewBest = prevBest == null || this.strokes < prevBest;
          if (isNewBest) this.saveData.bestStrokes[key] = this.strokes;
          this.saveData.unlockedLevel = Math.min((_crd && LEVEL_CONFIGS === void 0 ? (_reportPossibleCrUseOfLEVEL_CONFIGS({
            error: Error()
          }), LEVEL_CONFIGS) : LEVEL_CONFIGS).length, Math.max(this.saveData.unlockedLevel, level.id + 1));
          this.save();
          var stars = this.calcStars(level, this.strokes);
          var diff = this.strokes - level.par;
          var rating = diff <= -2 ? "精彩发挥" : diff === -1 ? "小鸟球" : diff === 0 ? "标准杆" : diff === 1 ? "高于标准杆1杆" : "高于标准杆2杆及以上";
          this.overlayNode.active = true;
          this.setNodeOpacity(this.overlayNode, 0);
          var opacity = this.overlayNode.getComponent(UIOpacity);
          tween(opacity).to(0.2, {
            opacity: 255
          }).start();
          this.setOverlayMenuLayoutActive(false);
          this.overlayTitle.string = "本关完成";
          this.overlayDesc.string = "\u7B2C" + level.id + "\u5173 " + level.name + "\uFF5C" + this.strokes + "\u6746\uFF08\u6807\u51C6\u6746 " + level.par + "\uFF09\uFF5C" + rating + (isNewBest ? "｜刷新最佳" : "");
          this.levelListLabel.string = "\u672C\u5173\u661F\u7EA7\uFF1A" + this.formatStars(stars) + "\n" + this.getStarRuleText(level) + "\n\u7D2F\u8BA1\u661F\u7EA7\uFF1A" + this.getTotalEarnedStars() + "/" + (_crd && LEVEL_CONFIGS === void 0 ? (_reportPossibleCrUseOfLEVEL_CONFIGS({
            error: Error()
          }), LEVEL_CONFIGS) : LEVEL_CONFIGS).length * 3;
          this.setButtonVisible(this.startBtn, false);
          this.setButtonVisible(this.prevBtn, false);
          this.setButtonVisible(this.nextBtn, true);
          this.setButtonText(this.nextBtn, "下一关");
          this.setButtonVisible(this.restartBtn, true);
          this.setButtonVisible(this.menuBtn, true);
          this.miniMsgLabel.string = "进洞成功";
          this.hudStarLabel.string = "\u672C\u6B21\u83B7\u5F97 " + this.formatStars(stars) + "\uFF5C" + this.getStarRuleText(level);
        }

        finishLevelLose() {
          var level = this.level;
          if (!level) return;
          this.phase = "lose";
          this.ballVel.set(0, 0);
          this.overlayNode.active = true;
          this.setNodeOpacity(this.overlayNode, 255);
          this.setOverlayMenuLayoutActive(false);
          this.overlayTitle.string = "挑战失败";
          this.overlayDesc.string = "\u7B2C" + level.id + "\u5173 " + level.name + "\uFF5C\u5DF2\u8FBE\u5230\u6700\u5927\u6746\u6570 " + level.maxStrokes + "\uFF0C\u8BF7\u91CD\u65B0\u6311\u6218\u3002";
          this.levelListLabel.string = "\u76EE\u6807\u661F\u7EA7\u8BF4\u660E\n" + this.getStarRuleText(level) + "\n\u63D0\u793A\uFF1A\u5584\u7528\u5899\u9762\u53CD\u5F39\uFF0C\u5E76\u5C3D\u91CF\u907F\u5F00\u6C99\u5751\u4E0E\u6C34\u57DF\u3002";
          this.setButtonVisible(this.startBtn, false);
          this.setButtonVisible(this.prevBtn, false);
          this.setButtonVisible(this.nextBtn, false);
          this.setButtonVisible(this.restartBtn, true);
          this.setButtonVisible(this.menuBtn, true);
          this.miniMsgLabel.string = "本关失败";
          this.hudStarLabel.string = "\u672C\u6B21\u672A\u83B7\u5F97\u661F\u7EA7\uFF5C" + this.getStarRuleText(level);
        }

        goNextPlayable() {
          if (this.currentLevelIndex + 1 >= (_crd && LEVEL_CONFIGS === void 0 ? (_reportPossibleCrUseOfLEVEL_CONFIGS({
            error: Error()
          }), LEVEL_CONFIGS) : LEVEL_CONFIGS).length) {
            this.showMenu();
            return;
          }

          if (this.currentLevelIndex + 2 > this.saveData.unlockedLevel) {
            this.showMenu();
            return;
          }

          this.startLevel(this.currentLevelIndex + 1);
        }

        resolveCourseBoundary(course) {
          var minX = course.x + this.ballRadius;
          var maxX = course.x + course.w - this.ballRadius;
          var minY = course.y + this.ballRadius;
          var maxY = course.y + course.h - this.ballRadius;

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

        applyWallBounce(nx, ny, wallVx, wallVy) {
          if (wallVx === void 0) {
            wallVx = 0;
          }

          if (wallVy === void 0) {
            wallVy = 0;
          }

          var rvx = this.ballVel.x - wallVx;
          var rvy = this.ballVel.y - wallVy;
          var rvn = rvx * nx + rvy * ny;
          if (rvn >= 0) return;
          var outRelX = rvx - (1 + this.wallBounce) * rvn * nx;
          var outRelY = rvy - (1 + this.wallBounce) * rvn * ny;
          this.ballVel.x = outRelX + wallVx;
          this.ballVel.y = outRelY + wallVy;
        }

        resolveRectCollision(rect, wallVx, wallVy) {
          if (wallVx === void 0) {
            wallVx = 0;
          }

          if (wallVy === void 0) {
            wallVy = 0;
          }

          var nearestX = Math.max(rect.x, Math.min(this.ballPos.x, rect.x + rect.w));
          var nearestY = Math.max(rect.y, Math.min(this.ballPos.y, rect.y + rect.h));
          var dx = this.ballPos.x - nearestX;
          var dy = this.ballPos.y - nearestY;
          var distSq = dx * dx + dy * dy;
          if (distSq > this.ballRadius * this.ballRadius) return;

          if (distSq > 0.000001) {
            var dist = Math.sqrt(distSq);
            var nx = dx / dist;
            var ny = dy / dist;
            var penetration = this.ballRadius - dist;
            this.ballPos.x += nx * penetration;
            this.ballPos.y += ny * penetration;
            this.applyWallBounce(nx, ny, wallVx, wallVy);
            return;
          }

          var left = Math.abs(this.ballPos.x - rect.x);
          var right = Math.abs(this.ballPos.x - (rect.x + rect.w));
          var bottom = Math.abs(this.ballPos.y - rect.y);
          var top = Math.abs(this.ballPos.y - (rect.y + rect.h));
          var min = Math.min(left, right, bottom, top);

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

        drawCourse(level) {
          var g = this.courseG;
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

          for (var sand of level.sand) {
            g.fillColor = new Color(235, 209, 137, 255);
            g.roundRect(sand.x, sand.y, sand.w, sand.h, 12);
            g.fill();
            g.strokeColor = new Color(201, 169, 95, 255);
            g.lineWidth = 2;
            g.roundRect(sand.x, sand.y, sand.w, sand.h, 12);
            g.stroke();
          }

          for (var water of level.water) {
            g.fillColor = new Color(76, 170, 230, 220);
            g.roundRect(water.x, water.y, water.w, water.h, 10);
            g.fill();
            g.strokeColor = new Color(22, 119, 188, 255);
            g.lineWidth = 2;
            g.roundRect(water.x, water.y, water.w, water.h, 10);
            g.stroke();
          }

          for (var boost of level.boosts) {
            var r = boost.rect;
            g.fillColor = new Color(255, 201, 82, 220);
            g.roundRect(r.x, r.y, r.w, r.h, 8);
            g.fill();
            g.strokeColor = new Color(233, 143, 36, 255);
            g.lineWidth = 2;
            g.roundRect(r.x, r.y, r.w, r.h, 8);
            g.stroke();
            var dir = new Vec2(boost.dir.x, boost.dir.y);

            if (dir.lengthSqr() > 0.0001) {
              dir.normalize();
              this.drawArrow(g, r.x + r.w / 2 - dir.x * 24, r.y + r.h / 2 - dir.y * 24, r.x + r.w / 2 + dir.x * 24, r.y + r.h / 2 + dir.y * 24, new Color(155, 86, 15));
            }
          }

          for (var wind of level.winds) {
            var _r = wind.rect;
            g.strokeColor = new Color(115, 164, 255, 150);
            g.lineWidth = 2;
            g.roundRect(_r.x, _r.y, _r.w, _r.h, 8);
            g.stroke();

            var _dir = new Vec2(wind.force.x, wind.force.y);

            if (_dir.lengthSqr() > 0.0001) {
              _dir.normalize();

              this.drawArrow(g, _r.x + _r.w / 2 - _dir.x * 34, _r.y + _r.h / 2 - _dir.y * 34, _r.x + _r.w / 2 + _dir.x * 34, _r.y + _r.h / 2 + _dir.y * 34, new Color(72, 118, 210));
            }
          }

          for (var wall of level.walls) {
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

        drawArrow(g, x1, y1, x2, y2, color) {
          var d = new Vec2(x2 - x1, y2 - y1);
          if (d.lengthSqr() < 0.001) return;
          d.normalize();
          var p = new Vec2(-d.y, d.x);
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

        drawHole(level) {
          this.holeNode.setPosition(level.hole.x, level.hole.y, 0);
          var g = this.holeG;
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

        drawBall() {
          var g = this.ballG;
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

        redrawFx() {
          var g = this.fxG;
          g.clear();
          if (this.phase !== "aiming" || !this.isAimDragValid) return;
          var launch = this.getAimLaunchVelocity();
          var power = Math.min(1, launch.length() / this.maxLaunchSpeed);
          var end = new Vec2(this.ballPos.x + launch.x * 0.18, this.ballPos.y + launch.y * 0.18);
          g.strokeColor = new Color(255, 255, 255, 210);
          g.lineWidth = 4;
          g.moveTo(this.ballPos.x, this.ballPos.y);
          g.lineTo(end.x, end.y);
          g.stroke();
          g.fillColor = power > 0.75 ? new Color(244, 109, 63, 110) : power > 0.45 ? new Color(252, 174, 78, 100) : new Color(112, 211, 133, 90);
          g.circle(this.ballPos.x, this.ballPos.y, this.ballRadius + 6 + power * 6);
          g.fill();
        }

        syncBallVisual() {
          this.ballNode.setPosition(this.ballPos.x, this.ballPos.y, 0);
        }

        clearCourse() {
          this.courseG.clear();
          this.dynamicG.clear();
          this.fxG.clear();
          this.holeG.clear();
          this.dynamicWalls = [];
          this.levelClock = 0;
          this.ballNode.setPosition(9999, 9999, 0);
          this.holeNode.setPosition(9999, 9999, 0);
        }

        updateHud() {
          var level = this.level;

          if (!level || this.phase === "menu") {
            this.hudLevelLabel.string = "阳光高尔夫";
            this.hudStrokeLabel.string = "杆数 -";
            this.hudParLabel.string = "标准杆 -";
            this.hudBestLabel.string = "最佳 -";
            this.hudStarLabel.string = "\u7D2F\u8BA1\u661F\u7EA7 " + this.getTotalEarnedStars() + "/" + (_crd && LEVEL_CONFIGS === void 0 ? (_reportPossibleCrUseOfLEVEL_CONFIGS({
              error: Error()
            }), LEVEL_CONFIGS) : LEVEL_CONFIGS).length * 3;
            return;
          }

          var bestScore = this.saveData.bestStrokes[String(level.id)];
          var bestStars = bestScore == null ? null : this.calcStars(level, bestScore);
          var liveStars = this.strokes > 0 ? this.calcStars(level, this.strokes) : 0;
          var bestScoreText = bestScore == null ? "暂无" : bestScore + "\u6746";
          this.hudLevelLabel.string = "\u7B2C" + level.id + "\u5173 " + level.name;
          this.hudStrokeLabel.string = "\u6746\u6570 " + this.strokes + "/" + level.maxStrokes;
          this.hudParLabel.string = "\u6807\u51C6\u6746 " + level.par;
          this.hudBestLabel.string = "\u6700\u4F73 " + bestScoreText + " " + (bestStars == null ? "☆☆☆" : this.formatStars(bestStars));
          this.hudStarLabel.string = "\u5F53\u524D\u661F\u7EA7 " + this.formatStars(liveStars) + "\uFF5C" + this.getStarRuleText(level);
        }

        createLabel(parent, pos, fontSize, color, text, width, align) {
          if (width === void 0) {
            width = 600;
          }

          if (align === void 0) {
            align = HorizontalTextAlignment.CENTER;
          }

          var n = new Node("Label");
          n.parent = parent;
          n.setPosition(pos);
          var t = n.addComponent(UITransform);
          t.setContentSize(width, 120);
          var label = n.addComponent(Label);
          label.string = text;
          label.fontSize = fontSize;
          label.lineHeight = Math.round(fontSize * 1.25);
          label.color = color;
          label.horizontalAlign = align;
          label.verticalAlign = VerticalTextAlignment.CENTER;
          return label;
        }

        createButton(parent, text, pos, size, color, onClick) {
          var node = new Node("Btn-" + text);
          node.parent = parent;
          node.setPosition(pos);
          node.addComponent(UITransform).setContentSize(size.x, size.y);
          var g = node.addComponent(Graphics);
          var shadow = new Color(Math.floor(color.r * 0.72), Math.floor(color.g * 0.72), Math.floor(color.b * 0.72), 230);
          var top = new Color(Math.min(255, color.r + 20), Math.min(255, color.g + 20), Math.min(255, color.b + 20), 255);
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
          var label = this.createLabel(node, new Vec3(0, -1, 0), 24, new Color(36, 42, 52), text, size.x - 12);
          label.verticalAlign = VerticalTextAlignment.CENTER;
          label.horizontalAlign = HorizontalTextAlignment.CENTER;
          node.__btnLabel = label;
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

        setButtonText(btn, text) {
          var label = btn.__btnLabel;
          if (label) label.string = text;
        }

        setButtonVisible(btn, visible) {
          btn.active = visible;
        }

        setNodeOpacity(node, opacity) {
          var _node$getComponent;

          var comp = (_node$getComponent = node.getComponent(UIOpacity)) != null ? _node$getComponent : node.addComponent(UIOpacity);
          comp.opacity = opacity;
        }

        isPointInRect(p, rect) {
          return p.x >= rect.x && p.x <= rect.x + rect.w && p.y >= rect.y && p.y <= rect.y + rect.h;
        }

        loadSave() {
          try {
            var _parsed$unlockedLevel, _parsed$bestStrokes;

            var raw = sys.localStorage.getItem(this.saveKey);
            if (!raw) return;
            var parsed = JSON.parse(raw);
            this.saveData.unlockedLevel = Math.max(1, Math.min((_crd && LEVEL_CONFIGS === void 0 ? (_reportPossibleCrUseOfLEVEL_CONFIGS({
              error: Error()
            }), LEVEL_CONFIGS) : LEVEL_CONFIGS).length, Number((_parsed$unlockedLevel = parsed.unlockedLevel) != null ? _parsed$unlockedLevel : 1)));
            this.saveData.bestStrokes = (_parsed$bestStrokes = parsed.bestStrokes) != null ? _parsed$bestStrokes : {};
          } catch (_unused) {
            this.saveData = {
              unlockedLevel: 1,
              bestStrokes: {}
            };
          }
        }

        save() {
          try {
            sys.localStorage.setItem(this.saveKey, JSON.stringify(this.saveData));
          } catch (_unused2) {// 某些受限环境可能禁用本地存储，这里忽略写入失败
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});

System.register("chunks:///_virtual/main", ["./LevelConfigs.ts", "./SunGolfGame.ts"], function () {
  return {
    setters: [null, null],
    execute: function () {}
  };
});

(function (r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main');
})(function (mid, cid) {
  System.register(mid, [cid], function (_export, _context) {
    return {
      setters: [function (_m) {
        var _exportObj = {};
        for (var _key in _m) {
          if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
        }
        _export(_exportObj);
      }],
      execute: function () {}
    };
  });
});
