import {IActionModel} from "./IActionModel.js";

interface IRoundCornersActionModel extends IActionModel {
  radius?: [number?, number?, number?, number?] | 'max';
}

export {IRoundCornersActionModel};
