import {Action} from "../../internal/Action.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {IActionModel} from "../../internal/models/IActionModel.js";
import {IDistortActionModel} from "../../internal/models/IDistortActionModel.js";


export type IDistortCoordinates = [number, number, number, number, number, number, number, number];

/**
 * @description Distorts the image to a new shape by adjusting its corners to achieve perception warping.
 * Specify four corner coordinates, representing the new coordinates for each of the image's four corners,
 * in clockwise order from the top-left corner.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/transformation_reference#e_distort|Distorting images}
 * @param {number[]} coordinates - Four x/y pairs representing the new image corners
 * @extends SDK.Action
 * @memberOf Actions.Reshape
 * @see Visit {@link Actions.Reshape| Reshape} for examples
 */
class DistortAction extends Action {
  protected _actionModel: IDistortActionModel;

  constructor(coordinates: IDistortCoordinates) {
    super();
    const [topLeftX, topLeftY, topRightX, topRightY, bottomRightX, bottomRightY, bottomLeftX, bottomLeftY] = coordinates;
    
    this._actionModel = {
      actionType: 'distort',
      topLeft: { x: topLeftX, y: topLeftY },
      topRight: { x: topRightX, y: topRightY },
      bottomRight: { x: bottomRightX, y: bottomRightY },
      bottomLeft: { x: bottomLeftX, y: bottomLeftY }
    };
    this.addQualifier(new Qualifier('e', `distort:${coordinates.join(':')}`));
  }

  static fromJson(actionModel: IActionModel): DistortAction {
    const {topLeft, topRight, bottomRight, bottomLeft} = (actionModel as IDistortActionModel);
    const coordinates: IDistortCoordinates = [
      topLeft.x, topLeft.y,
      topRight.x, topRight.y,
      bottomRight.x, bottomRight.y,
      bottomLeft.x, bottomLeft.y
    ];
    return new DistortAction(coordinates);
  }
}


export {DistortAction};
