import {Action} from "../../internal/Action.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {QualifierValue} from "../../internal/qualifier/QualifierValue.js";
import {IRoundCornersActionModel} from "../../internal/models/IRoundCornersActionModel.js";
import {IActionModel} from "../../internal/models/IActionModel.js";

/**
 * @description A class to round one or more corners of an image or video.
 * @extends SDK.Action
 * @memberOf Actions.RoundCorners
 * @see Visit {@link Actions.RoundCorners|RoundCorners} for an example
 */
class RoundCornersAction extends Action {
  protected _actionModel: IRoundCornersActionModel = {};
  private _radius: [number, number, number, number] | string;

  constructor() {
    super();
    this._actionModel.actionType = 'roundCorners';
  }

  /**
   * @param {number} a
   * @param {number} b
   * @param {number} c
   * @param {number} d
   * @return {RoundCornersAction}
   */
  radius(a: number, b?: number, c?: number, d?: number): this {
    const qualifierValue = new QualifierValue();

    // In case a === 0, check typeof
    typeof a !== undefined && qualifierValue.addValue(a);
    typeof b !== undefined && qualifierValue.addValue(b);
    typeof c !== undefined && qualifierValue.addValue(c);
    typeof d !== undefined && qualifierValue.addValue(d);

    this._radius = [a, b, c, d];
    this._actionModel.radius = [a, b, c, d];

    this.addQualifier(new Qualifier('r').addValue(qualifierValue));
    return this;
  }

  /**
   * @description Applies maximum rounding to the corners of the asset. An asset with square dimensions becomes a circle.
   */
  max(): this {
    this._radius = 'max';
    this._actionModel.radius = 'max';

    return this.addQualifier(new Qualifier('r', 'max'));
  }

  static fromJson(actionModel: IActionModel): RoundCornersAction {
    const { radius } = (actionModel as IRoundCornersActionModel);

    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created
    const result = new this();
    if (Array.isArray(radius)) {
      result.radius(radius[0], radius[1], radius[2], radius[3]);
    }
    if (radius === 'max') {
      result.max();
    }

    return result;
  }
}

export default RoundCornersAction;
