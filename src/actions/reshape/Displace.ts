import {Action} from "../../internal/Action.js";
import {IActionModel} from "../../internal/models/IActionModel.js";
import {IDisplaceActionModel} from "../../internal/models/IDisplaceActionModel.js";
import {ISourceModel} from "../../internal/models/ISourceModel.js";
import {BaseSource} from "../../qualifiers/source/BaseSource.js";
import {createSourceFromModel} from "../../internal/models/createSourceFromModel.js";
import {ITransformationFromJson} from "../../internal/models/IHasFromJson.js";
import {Position} from "../../qualifiers/position.js";

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
  private source: BaseSource; 

  constructor(source: BaseSource) {
    super();
    this.source = source;
    this._actionModel = {
      actionType: 'displace',
      source: source.toJson() as ISourceModel
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

  /**
   * @description Sets the position using Position qualifier (alternative to x/y methods).
   * @param {Position} position The position qualifier
   * @return {this}
   */
  position(position: Position): this { 
    // Extract x and y from position and set them in the model
    const positionJson = position.toJson() as any;
    if (positionJson.offsetX !== undefined) {
      this._x = positionJson.offsetX;
      this._actionModel.x = positionJson.offsetX;
    }
    if (positionJson.offsetY !== undefined) {
      this._y = positionJson.offsetY;
      this._actionModel.y = positionJson.offsetY;
    }
    
    return this;
  }

  static fromJson(actionModel: IActionModel, transformationFromJson?: ITransformationFromJson): DisplaceAction {
    const {source, x, y} = (actionModel as IDisplaceActionModel);
    const sourceInstance = createSourceFromModel(source, transformationFromJson);
    const result = new DisplaceAction(sourceInstance);

    if (x !== undefined) {
      result.x(x);
    }
    if (y !== undefined) {
      result.y(y);
    }
    return result;
  }

  toString(): string {
    const displaceParams = [
      'e_displace',
      'fl_layer_apply'
    ];
 
    if (this._x !== undefined) {
      displaceParams.push(`x_${this._x}`);
    }
    if (this._y !== undefined) {
      displaceParams.push(`y_${this._y}`);
    } 

    const layerParts = [
      this.source.getOpenSourceString('l'),
      this.source.getTransformation() && this.source.getTransformation().toString(),
      displaceParams.join(',')
    ].filter((a) => a);

    return layerParts.join('/');
  }
}

export {DisplaceAction};
