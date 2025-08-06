import {Action} from "../../internal/Action.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {IActionModel} from "../../internal/models/IActionModel.js";
import {IDisplaceActionModel} from "../../internal/models/IDisplaceActionModel.js";

/**
 * @description Displaces the pixels in an image according to the color channels of the pixels in another specified image.
 * @extends SDK.Action
 * @memberOf Actions.Reshape
 * @see Visit {@link Actions.Reshape| Reshape} for examples
 */
class DisplaceAction extends Action {
  protected _actionModel: IDisplaceActionModel;
  private _x?: string | number;
  private _y?: string | number;
  private _source: string;

  constructor(source: string) {
    super();
    this._source = source;
    this._actionModel = {
      actionType: 'displace',
      source: {
        sourceType: 'image',
        publicId: source
      }
    };
  }

  /**
   * @description Sets the x coordinate for displacement.
   * @param {string | number} x The x coordinate value (between -999 and 999)
   * @return {this}
   */
  x(x: string | number): this {
    this._x = x;
    this._actionModel.x = x;
    return this;
  }

  /**
   * @description Sets the y coordinate for displacement.
   * @param {string | number} y The y coordinate value (between -999 and 999)
   * @return {this}
   */
  y(y: string | number): this {
    this._y = y;
    this._actionModel.y = y;
    return this;
  }

  static fromJson(actionModel: IActionModel): DisplaceAction {
    const {source, x, y} = (actionModel as IDisplaceActionModel);
    const result = new DisplaceAction(source.publicId);
    if (x !== undefined) result.x(x);
    if (y !== undefined) result.y(y);
    return result;
  }

  toString(): string {
    const displaceParams = [
      'e_displace',
      'fl_layer_apply',
      this._x !== undefined ? `x_${this._x}` : null,
      this._y !== undefined ? `y_${this._y}` : null
    ].filter((a) => a).join(',');

    return `l_${this._source}/${displaceParams}`;
  }
}

export {DisplaceAction};
