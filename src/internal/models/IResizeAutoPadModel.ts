import {IActionModel} from "./IActionModel.js";
import {IDimensionsModel} from "./IDimensionsModel.js";

interface IResizeAutoPadModel extends IActionModel {
  dimensions: IDimensionsModel;
  gravity: "auto";
}

export {IResizeAutoPadModel};
