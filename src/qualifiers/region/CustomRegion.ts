import {NamedRegion} from "./NamedRegion.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import { ICustomRegionModel } from "../../internal/models/IEffectActionModel.js";

/**
 * @memberOf Qualifiers.Region
 */
class CustomRegion extends NamedRegion {
  constructor() {
    super('custom');
  }

  /**
   * @description The x position in pixels.
   * @param {number | string} x
   */
  x(x: number | string): this {
    this._actionModel.x = x;
    this.addQualifier(new Qualifier('x', x));
    return this;
  }

  /**
   * @description The y position in pixels.
   * @param {number | string} y
   */
  y(y: number | string): this {
    this._actionModel.y = y;
    this.addQualifier(new Qualifier('y', y));
    return this;
  }

  /**
   * @description The width of the region in pixels.
   * @param {number | string} width
   */
  width(width: number | string): this {
    this._actionModel.width = width;
    this.addQualifier(new Qualifier('w', width));
    return this;
  }

  /**
   * @description The height of the region in pixels.
   * @param {number | string} height
   */
  height(height: number | string): this {
    this._actionModel.height = height;
    this.addQualifier(new Qualifier('h', height));
    return this;
  }

  static fromJson(model: ICustomRegionModel): CustomRegion {
    const customRegion = new CustomRegion();

    if (model.width) {
      customRegion.width(model.width);
    }
    if (model.height) {
      customRegion.height(model.height);
    }
    if (model.x) {
      customRegion.x(model.x);
    }
    if (model.y) {
      customRegion.y(model.y);
    }

    return customRegion;
  }
}

export {CustomRegion};
