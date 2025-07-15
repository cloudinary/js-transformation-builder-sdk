import { IActionModel } from "internal/models/IActionModel.js";
import {Action} from "../../internal/Action.js";
import {SystemColors} from "../../qualifiers/color.js";
import { IImageTrimActionModel } from "internal/models/IImageTrimActionModel.js";
import { ITrimActionModel } from "internal/models/ITrimActionModel.js";

/**
 * @description Removes the edges of the image based on the color of the corner pixels.
 * Specify a color other than the color of the corner pixels using the colorOverride() method
 * @extends SDK.Action
 * @memberOf Actions.Reshape
 * @see Visit {@link Actions.Reshape| Reshape} for examples
 */
class TrimAction extends Action {
  protected _actionModel: ITrimActionModel;

  private _tolerance: number;
  private _color: SystemColors | string;

  constructor() {
    super();
    this._actionModel = {
      actionType: 'trim'
    };
  }

  /**
   * @param {number} tolerance The tolerance level for color similarity.
   */
  colorSimilarity(tolerance: number): this {
    this._tolerance = tolerance;
    this._actionModel.colorSimilarity = tolerance;
    return this;
  }

  /**
   * @param {string | Qualifiers.Color} color Overrides the corner pixels color with the specified color.
   */
  colorOverride(color: SystemColors | string): this {
    this._color = color;
    this._actionModel.colorOverride = color;
    return this;
  }

  static fromJson(actionModel: IActionModel): TrimAction {
    const {colorSimilarity, colorOverride} = actionModel as IImageTrimActionModel;
    const action = new TrimAction();
    action.colorSimilarity(colorSimilarity);
    action.colorOverride(colorOverride);
    return action;
  }

  toString(): string {
    // image.reshape(Reshape.trim()->colorSimilarity(50)->colorOverride(Color.YELLOW));
    // e_trim:50:yellow

    return [
      'e_trim',
      this._tolerance,
      this._color
    ].join(':');
  }
}


export {TrimAction};
export default TrimAction;

