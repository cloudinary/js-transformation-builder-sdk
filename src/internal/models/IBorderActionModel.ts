import {IActionModel} from "./IActionModel.js";
import {CornerRadiusValueType} from "./IRoundCornersActionModel.js";

interface IBorderActionModel extends IActionModel {
  borderWidth?: number | string;
  borderColor?: string;
  borderType?: string;
  radius?: CornerRadiusValueType;
}

export {IBorderActionModel};
