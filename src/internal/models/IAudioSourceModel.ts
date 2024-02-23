import {ISourceModel} from "./ISourceModel.js";

export interface IAudioSourceModel extends ISourceModel {
  sourceType: 'audio';
  publicId: string;
}

/**
 * Validates that given obj is an IImageSourceModel
 * @param obj
 */
export function isIAudioSourceModel(obj: unknown): obj is IAudioSourceModel {
  return obj && (obj as IAudioSourceModel).sourceType === 'audio';
}
