import {Action} from "../../internal/Action.js";
import {stringOrNumber} from "../../types/types.js";
import {IActionModel} from "../../internal/models/IActionModel.js";
import {IShearActionModel} from "../../internal/models/IShearActionModel.js";

/**
 * @description Skews the image according to the two specified values in degrees.
 * @extends SDK.Action
 * @memberOf Actions.Reshape
 * @see Visit {@link Actions.Reshape| Reshape} for examples
 */
class ShearAction extends Action {
  protected _actionModel: IShearActionModel;
  private _x: stringOrNumber;
  private _y: stringOrNumber;

  constructor(x: stringOrNumber, y:stringOrNumber) {
    super();
    this._actionModel = {
      actionType: 'shear',
      skewX: x,
      skewY: y
    };
    this.skewX(x);
    this.skewY(y);
  }
  /**
   * @param {number} x Skews the image according to the two specified values in degrees. (X and Y)
   */
  skewX(x: stringOrNumber): this {
    this._x = x;
    this._actionModel.skewX = x;
    return this;
  }

  /**
   * @param {number} y Skews the image according to the two specified values in degrees. (X and Y)
   */
  skewY(y: stringOrNumber): this {
    this._y = y;
    this._actionModel.skewY = y;
    return this;
  }

  static fromJson(actionModel: IActionModel): ShearAction {
    const {skewX, skewY} = (actionModel as IShearActionModel);
    return new ShearAction(skewX, skewY);
  }

  toString(): string {
    return [
      'e_shear',
      this._x,
      this._y
    ].filter((a) => a !== undefined && a !== null).join(':');
  }
}


export {ShearAction};
