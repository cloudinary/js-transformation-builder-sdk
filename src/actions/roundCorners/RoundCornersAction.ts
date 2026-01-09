import {Action} from "../../internal/Action.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {QualifierValue} from "../../internal/qualifier/QualifierValue.js";

type CornerRadiusValueType = 'max' | [number?, number?, number?, number?];

/**
 * @description A class to round one or more corners of an image or video.
 * @extends SDK.Action
 * @memberOf Actions.RoundCorners
 * @see Visit {@link Actions.RoundCorners|RoundCorners} for an example
 */
class RoundCornersAction extends Action {
  private _radius: CornerRadiusValueType;

  constructor() {
    super();
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
    a !== undefined && qualifierValue.addValue(a);
    b !== undefined && qualifierValue.addValue(b);
    c !== undefined && qualifierValue.addValue(c);
    d !== undefined && qualifierValue.addValue(d);

    const definedRadiuses = ([a, b, c, d].filter((r) => r !== undefined) as [number?, number?, number?, number?]);
    this._radius = definedRadiuses;

    this.addQualifier(new Qualifier('r').addValue(qualifierValue));
    return this;
  }

  /**
   * @description Applies maximum rounding to the corners of the asset. An asset with square dimensions becomes a circle.
   */
  max(): this {
    this._radius = 'max';
    return this.addQualifier(new Qualifier('r', 'max'));
  }

  getRadius(): CornerRadiusValueType {
    return this._radius;
  }
}

export default RoundCornersAction;
