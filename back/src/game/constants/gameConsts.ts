export class Consts {
  static readonly CANVAS_H = 600;
  static readonly CANVAS_W = 1000;
  static readonly MAX_SCORE = 10;
  static readonly MAX_SPECTATORS = 10;
  static readonly BALL_RADIUS = 12;
  static readonly BALL_INIT_X = Consts.CANVAS_W / 2;
  static readonly BALL_INIT_Y = Consts.CANVAS_H / 2;
  static readonly BALL_SPEED = 6;
  static readonly BALL_MAX_SPEED = 15;
  static readonly PADDLE_W = 15;
  static readonly PADDLE_H = 100;
  static readonly PADDLE_DIFF = 10;
  static readonly L_PADDLE_X = 0 + 20; // 20 is the pad dist from the border
  static readonly R_PADDLE_X = Consts.CANVAS_W - Consts.PADDLE_W - 20;
  static readonly PADDLE_INIT_Y = Consts.CANVAS_H / 2 - Consts.PADDLE_H / 2;
  static readonly framePerSec = 60;
}
