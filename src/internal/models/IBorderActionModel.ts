import {IActionModel} from "./IActionModel.js";
import {CornerRadiusValueType} from "./IRoundCornersActionModel.js";

interface IBorderActionModel extends IActionModel {
  borderWidth?: number | string;
  borderColor?: string;
  borderType?: string;
  roundCorners?: {
    actionType: 'roundCorners';
    radius: CornerRadiusValueType;
  };
}

export {IBorderActionModel};
