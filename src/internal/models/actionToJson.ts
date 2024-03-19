import {IActionModel} from "./IActionModel.js";
import {IErrorObject} from "./IErrorObject.js";
import {createUnsupportedError} from "../utils/unsupportedError.js";

export type IActionToJson = IActionModel | IErrorObject;
/**
 * Returns the action's model
 */
export function actionToJson(): IActionToJson {
  const actionModelIsNotEmpty = this._actionModel && Object.keys(this._actionModel).length;
  const sourceTransformationError = this._actionModel?.source?.transformation?.error;

  // Should return error when there is unsupported transformation inside
  if (sourceTransformationError && sourceTransformationError instanceof Error) {
    return { error: sourceTransformationError };
  }

  if (actionModelIsNotEmpty) {
    return this._actionModel;
  }

  return {error: createUnsupportedError(`unsupported action ${this.constructor.name}`)};
}

// test
