import {Action} from "../../internal/Action.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {IGradientFadeEffecModel} from "../../internal/models/IEffectActionModel.js";
import {IActionModel} from "../../internal/models/IActionModel.js";

/**
 * @description Applies a gradient fade effect from one edge of the image.
 * @extends SDK.Action
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class GradientFadeEffectAction extends Action {
  private _strength: number;
  private _type: string;
  protected _actionModel: IGradientFadeEffecModel = {actionType: 'gradientFade'};

  /**
   * @description Sets the strength of the fade effect.
   * @param {number} strength The strength of the fade effect. (Range: 0 to 100, Server default: 20)
   */
  strength(strength:number): this {
    this._actionModel.strength = strength;
    this._strength = strength;
    return this;
  }

  /**
   * @description Sets the mode of gradient fade.
   * @param {string | Qualifiers.GradientFade} type The mode of gradient fade.
   */
  type(type:string): this {
    this._actionModel.type = type;
    this._type = type;
    return this;
  }

  /**
   * @description Sets the x dimension of the start point.
   * @param {number | string} x The x dimension of the start point.
   */
  horizontalStartPoint(x:number | string): this {
    this._actionModel.horizontalStartPoint = x as string;
    return this.addQualifier(new Qualifier('x', x));
  }

  /**
   * @description Sets the y dimension of the start point.
   * @param {number | string} y The y dimension of the start point.
   */
  verticalStartPoint(y:number | string): this {
    this._actionModel.verticalStartPoint = y as string;
    return this.addQualifier(new Qualifier('y', y));
  }

  protected prepareQualifiers(): void {
    let str = 'gradient_fade';
    if (this._type) {
      str += `:${this._type}`;
    }

    if (this._strength) {
      str += `:${this._strength}`;
    }

    this.addQualifier(new Qualifier('e', str));
  }

  static fromJson(actionModel: IActionModel): GradientFadeEffectAction {
    const {actionType, verticalStartPoint, horizontalStartPoint, type, strength} = (actionModel as IGradientFadeEffecModel);

    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created
    const result = new this();
    verticalStartPoint && result.verticalStartPoint(verticalStartPoint);
    horizontalStartPoint && result.horizontalStartPoint(horizontalStartPoint);
    type && result.type(type);
    strength && result.strength(strength);

    return result;
  }
}

export {GradientFadeEffectAction};
