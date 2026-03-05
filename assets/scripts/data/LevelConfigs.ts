export type RectZone = {
  x: number;
  y: number;
  w: number;
  h: number;
};

export type VectorLike = {
  x: number;
  y: number;
};

export type BoostZone = {
  rect: RectZone;
  dir: VectorLike;
  strength: number;
};

export type WindZone = {
  rect: RectZone;
  force: VectorLike;
};

export type MovingWallConfig = {
  rect: RectZone;
  axis: "x" | "y";
  range: number;
  speed: number; // 正弦往返运动的角速度（弧度/秒）
  phase?: number;
};

export type LevelConfig = {
  id: number;
  name: string;
  par: number;
  maxStrokes: number;
  start: VectorLike;
  hole: VectorLike;
  holeRadius: number;
  course: RectZone;
  walls: RectZone[];
  movingWalls?: MovingWallConfig[];
  sand: RectZone[];
  water: RectZone[];
  boosts: BoostZone[];
  winds: WindZone[];
};

const COURSE: RectZone = { x: -560, y: -220, w: 1120, h: 500 };

export const LEVEL_CONFIGS: LevelConfig[] = [
  {
    id: 1,
    name: "晨光练习场",
    par: 2,
    maxStrokes: 6,
    start: { x: -470, y: -60 },
    hole: { x: 430, y: -60 },
    holeRadius: 18,
    course: COURSE,
    walls: [
      { x: -40, y: -170, w: 50, h: 220 },
      { x: 160, y: 10, w: 55, h: 220 },
    ],
    movingWalls: [],
    sand: [{ x: 270, y: -170, w: 180, h: 90 }],
    water: [],
    boosts: [],
    winds: [],
  },
  {
    id: 2,
    name: "暖阳弯道",
    par: 3,
    maxStrokes: 7,
    start: { x: -500, y: 150 },
    hole: { x: 460, y: -150 },
    holeRadius: 18,
    course: COURSE,
    walls: [
      { x: -180, y: -20, w: 600, h: 40 },
      { x: 260, y: -140, w: 40, h: 240 },
      { x: -40, y: 120, w: 340, h: 40 },
    ],
    movingWalls: [
      { rect: { x: 40, y: -170, w: 36, h: 130 }, axis: "y", range: 70, speed: 1.9, phase: 0.4 },
    ],
    sand: [
      { x: -520, y: -210, w: 220, h: 90 },
      { x: 340, y: 120, w: 180, h: 100 },
    ],
    water: [],
    boosts: [],
    winds: [],
  },
  {
    id: 3,
    name: "日光跳台",
    par: 3,
    maxStrokes: 7,
    start: { x: -500, y: 0 },
    hole: { x: 470, y: 150 },
    holeRadius: 18,
    course: COURSE,
    walls: [
      { x: -160, y: -220, w: 40, h: 240 },
      { x: 60, y: 40, w: 40, h: 240 },
      { x: 260, y: -220, w: 40, h: 240 },
    ],
    movingWalls: [],
    sand: [{ x: 320, y: -60, w: 180, h: 90 }],
    water: [{ x: -40, y: -220, w: 260, h: 80 }],
    boosts: [
      {
        rect: { x: -320, y: -80, w: 120, h: 60 },
        dir: { x: 1, y: 0.18 },
        strength: 280,
      },
    ],
    winds: [],
  },
  {
    id: 4,
    name: "光束回廊",
    par: 4,
    maxStrokes: 8,
    start: { x: -520, y: -150 },
    hole: { x: 500, y: 160 },
    holeRadius: 18,
    course: COURSE,
    walls: [
      { x: -350, y: -40, w: 700, h: 32 },
      { x: -350, y: 120, w: 820, h: 32 },
      { x: -110, y: -220, w: 32, h: 180 },
      { x: 160, y: -8, w: 32, h: 128 },
      { x: 420, y: -220, w: 32, h: 340 },
    ],
    movingWalls: [
      { rect: { x: -8, y: -220, w: 32, h: 95 }, axis: "y", range: 70, speed: 2.5, phase: 0 },
      { rect: { x: 280, y: -8, w: 32, h: 128 }, axis: "y", range: 70, speed: 2.1, phase: 1.6 },
    ],
    sand: [{ x: -520, y: 190, w: 200, h: 70 }],
    water: [{ x: 220, y: -220, w: 170, h: 110 }],
    boosts: [],
    winds: [{ rect: { x: -60, y: -190, w: 180, h: 110 }, force: { x: 0, y: 120 } }],
  },
  {
    id: 5,
    name: "海风球道",
    par: 4,
    maxStrokes: 8,
    start: { x: -480, y: 180 },
    hole: { x: 450, y: 180 },
    holeRadius: 18,
    course: COURSE,
    walls: [
      { x: -260, y: 40, w: 40, h: 240 },
      { x: -40, y: -220, w: 40, h: 240 },
      { x: 180, y: 40, w: 40, h: 240 },
    ],
    movingWalls: [
      { rect: { x: -340, y: -140, w: 80, h: 24 }, axis: "x", range: 120, speed: 1.4, phase: 0.7 },
    ],
    sand: [
      { x: -560, y: -110, w: 1120, h: 90 },
      { x: -120, y: 200, w: 240, h: 60 },
    ],
    water: [],
    boosts: [],
    winds: [{ rect: { x: -560, y: -220, w: 1120, h: 500 }, force: { x: 0, y: -55 } }],
  },
  {
    id: 6,
    name: "太阳能加速带",
    par: 4,
    maxStrokes: 9,
    start: { x: -520, y: 0 },
    hole: { x: 500, y: 0 },
    holeRadius: 18,
    course: COURSE,
    walls: [
      { x: -320, y: -40, w: 220, h: 40 },
      { x: -20, y: 20, w: 220, h: 40 },
      { x: 280, y: -40, w: 160, h: 40 },
      { x: 120, y: -180, w: 40, h: 160 },
    ],
    movingWalls: [
      { rect: { x: -60, y: -120, w: 28, h: 140 }, axis: "y", range: 65, speed: 2.4, phase: 0.4 },
      { rect: { x: 240, y: -40, w: 28, h: 140 }, axis: "y", range: 65, speed: 2.4, phase: 2.2 },
    ],
    sand: [{ x: -560, y: 160, w: 1120, h: 120 }],
    water: [{ x: -10, y: -220, w: 110, h: 90 }],
    boosts: [
      { rect: { x: -470, y: -90, w: 130, h: 70 }, dir: { x: 1, y: 0 }, strength: 280 },
      { rect: { x: -180, y: 70, w: 130, h: 70 }, dir: { x: 1, y: 0 }, strength: 300 },
      { rect: { x: 150, y: -90, w: 130, h: 70 }, dir: { x: 1, y: 0 }, strength: 320 },
    ],
    winds: [],
  },
  {
    id: 7,
    name: "黄昏迷宫",
    par: 5,
    maxStrokes: 10,
    start: { x: -520, y: -180 },
    hole: { x: 510, y: 180 },
    holeRadius: 18,
    course: COURSE,
    walls: [
      { x: -420, y: -70, w: 780, h: 28 },
      { x: -160, y: 40, w: 720, h: 28 },
      { x: -520, y: 150, w: 860, h: 28 },
      { x: -260, y: -220, w: 28, h: 260 },
      { x: 70, y: -70, w: 28, h: 260 },
      { x: 350, y: -220, w: 28, h: 260 },
    ],
    movingWalls: [
      { rect: { x: -40, y: -160, w: 180, h: 24 }, axis: "x", range: 120, speed: 1.7, phase: 1.1 },
      { rect: { x: 180, y: 90, w: 150, h: 24 }, axis: "x", range: 110, speed: 1.9, phase: 2.6 },
    ],
    sand: [
      { x: -560, y: -220, w: 170, h: 90 },
      { x: 410, y: 190, w: 150, h: 70 },
    ],
    water: [{ x: 140, y: 150, w: 170, h: 90 }],
    boosts: [],
    winds: [{ rect: { x: -80, y: -220, w: 200, h: 110 }, force: { x: 90, y: 0 } }],
  },
  {
    id: 8,
    name: "冠军洞",
    par: 5,
    maxStrokes: 10,
    start: { x: -500, y: 200 },
    hole: { x: 500, y: -180 },
    holeRadius: 20,
    course: COURSE,
    walls: [
      { x: -380, y: 80, w: 760, h: 30 },
      { x: -560, y: -40, w: 880, h: 30 },
      { x: -260, y: -160, w: 820, h: 30 },
      { x: -140, y: -220, w: 30, h: 180 },
      { x: 140, y: -100, w: 30, h: 180 },
      { x: 400, y: -220, w: 30, h: 180 },
    ],
    movingWalls: [
      { rect: { x: -240, y: 10, w: 28, h: 100 }, axis: "y", range: 70, speed: 2.8, phase: 0.3 },
      { rect: { x: 40, y: -110, w: 28, h: 100 }, axis: "y", range: 70, speed: 2.8, phase: 1.7 },
      { rect: { x: 300, y: -220, w: 100, h: 24 }, axis: "x", range: 90, speed: 2.1, phase: 2.2 },
    ],
    sand: [
      { x: -560, y: 170, w: 230, h: 90 },
      { x: -70, y: 170, w: 220, h: 90 },
      { x: 300, y: 20, w: 220, h: 90 },
    ],
    water: [
      { x: -10, y: -220, w: 120, h: 90 },
      { x: 250, y: -220, w: 120, h: 90 },
    ],
    boosts: [
      { rect: { x: -250, y: -210, w: 120, h: 60 }, dir: { x: 1, y: 0.25 }, strength: 320 },
    ],
    winds: [
      { rect: { x: -560, y: -220, w: 1120, h: 500 }, force: { x: -20, y: 25 } },
      { rect: { x: 220, y: -20, w: 260, h: 140 }, force: { x: 0, y: -140 } },
    ],
  },
];
