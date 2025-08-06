import {IActionModel} from "./IActionModel.js";

interface IImageSource {
  sourceType: "image";
  publicId: string;
  format?: string;
  transformation?: any; // TODO: add proper transformation type
}

export interface IDisplaceActionModel extends IActionModel {
  actionType: "displace";
  source: IImageSource;
  x?: string | number;
  y?: string | number;
} 