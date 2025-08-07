import {IActionModel} from "./IActionModel.js";

export interface IDistortActionModel extends IActionModel {
  coordinates: [number, number, number, number, number, number, number, number];
} 