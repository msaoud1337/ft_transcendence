import { Consts } from '../constants/gameConsts';

class Paddle {
  private _x: number;
  private _y: number;
  private _height: number;
  private _width: number;
  private _padSpeed: number;

  constructor(x: number) {
    this._x = x;
    this._y = Consts.PADDLE_INIT_Y;
    this._padSpeed = 0;
    this._height = Consts.PADDLE_H;
    this._width = Consts.PADDLE_W;
  }

  //* move the paddle
  public movePaddle() {
    if (this._padSpeed === 0) return;
    this._y += this._padSpeed;
    if (this._y + this._height > Consts.CANVAS_H) {
      this._padSpeed = 0;
      this._y = Consts.CANVAS_H - this._height;
      return;
    }
    if (this._y <= 0) {
      this._padSpeed = 0;
      this._y = 0;
      return;
    }
  }

  //* is it the left paddle
  public isLeft() {
    return this._x - Consts.PADDLE_W <= 0;
  }

  //* reset paddle
  public resetPaddle(): void {
    this._height = Consts.PADDLE_H;
    this._width = Consts.PADDLE_W;
  }

  //* move the paddle forward
  public move_forward(key: string): void {
    if (key === 'down') {
      this._padSpeed = -Consts.PADDLE_DIFF;
    } else {
      this._padSpeed = 0;
    }
  }

  //* move the paddle backward
  public move_backward(key: string): void {
    if (key === 'down') {
      this._padSpeed = Consts.PADDLE_DIFF;
    } else {
      this._padSpeed = 0;
    }
  }

  //* getters and setters
  public getX(): number {
    return this._x;
  }

  public setY(newPos: number): void {
    this._y = newPos;
  }

  public getY(): number {
    return this._y;
  }

  public setHeight(newHeight: number): void {
    this._height = newHeight;
  }

  public getHeight(): number {
    return this._height;
  }

  public setWidth(newWidth: number): void {
    this._width = newWidth;
  }

  public getWidth(): number {
    return this._width;
  }

  public setPadSpeed(pad_speed: number): void {
    this._padSpeed = pad_speed;
  }

  public getPadSpeed(): number {
    return this._padSpeed;
  }
}

export default Paddle;
