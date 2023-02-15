import {IActionModel} from "./IActionModel.js";

interface IRoundCornersActionModel extends IActionModel {
  radius?: [number?, number?, number?, number?] | string;
}

export {IRoundCornersActionModel};
