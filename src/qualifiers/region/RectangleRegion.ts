import { NamedRegion } from "./NamedRegion.js";
import { Qualifier } from "../../internal/qualifier/Qualifier.js";

/**
 * @memberOf Qualifiers.Region
 */
class RectangleRegion extends NamedRegion {
  /**
   * Rectangle defines a region where action will be applied
   *
   * @param {number} x The x position in pixels
   * @param {number} y The y position in pixels
   * @param {number} width The width in pixels
   * @param {number} height The height in pixels
   */
  constructor(x: number, y: number, width: number, height: number) {
    super("rectangle");

    this.addQualifier(new Qualifier("x", x));
    this.addQualifier(new Qualifier("y", y));
    this.addQualifier(new Qualifier("w", width));
    this.addQualifier(new Qualifier("h", height));

    this._actionModel = {
      x,
      y,
      width,
      height,
      regionType: this.regionType,
    };
  }

  toString(): string {
    const { x, y, width, height } = this._actionModel;

    return `(x_${x};y_${y};w_${width};h_${height})`;
  }
}

export { RectangleRegion };
