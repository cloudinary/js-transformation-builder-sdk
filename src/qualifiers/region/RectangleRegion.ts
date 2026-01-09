import { Qualifier } from "../../internal/qualifier/Qualifier.js";
import { Action } from "../../internal/Action.js";

/**
 * @memberOf Qualifiers.Region
 */
class RectangleRegion extends Action {
  private _x: number;
  private _y: number;
  private _width: number;
  private _height: number;

  /**
   * Rectangle defines a region where action will be applied
   *
   * @param {number} x The x position in pixels
   * @param {number} y The y position in pixels
   * @param {number} width The width in pixels
   * @param {number} height The height in pixels
   */
  constructor(x: number, y: number, width: number, height: number) {
    super();

    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;

    this.addQualifier(new Qualifier("x", x));
    this.addQualifier(new Qualifier("y", y));
    this.addQualifier(new Qualifier("w", width));
    this.addQualifier(new Qualifier("h", height));
  }

  toString(): string {
    return `(x_${this._x};y_${this._y};w_${this._width};h_${this._height})`;
  }
}

export { RectangleRegion };
