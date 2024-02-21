import {BackgroundQualifier} from "../../qualifiers/background/shared/base/BackgroundQualifier.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {IActionModel} from "../../internal/models/IActionModel.js";
import {createBackgroundModel, IBackgroundModel} from "../../internal/models/createBackgroundModel.js";
import {createBackgroundFromModel} from "../../internal/models/createBackgroundFromModel.js";
import {IResizeAutoPadModel} from "../../internal/models/IResizeAutoPadModel.js";
import {ResizeSimpleAction} from "./ResizeSimpleAction.js";

/**
 * @description Tries to prevent a "bad crop" by first attempting to use the auto cropping mode, but adding some padding if the algorithm determines that more of the original image needs to be included in the final image.
 * @extends Actions.Resize.autoPad
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizeAutoPadAction extends ResizeSimpleAction {
  protected _actionModel: IResizeAutoPadModel;

  constructor(cropType: string, cropWidth: number | string, cropHeight?: number | string) {
    super(cropType, cropWidth, cropHeight);

    this.addQualifier(new Qualifier('g', 'auto'))
  }

  /**
   * @description Sets the background.
   * @param {Qualifiers.Background} backgroundQualifier Defines the background color to use instead of
   * transparent background areas or when resizing with padding.
   */
  background(backgroundQualifier: BackgroundQualifier | string): this {
    this._actionModel.background = createBackgroundModel(backgroundQualifier);
    return this.addQualifier(backgroundQualifier);
  }

  static fromJson(actionModel: IActionModel): ResizeAutoPadAction {
    const result = super.fromJson.apply(this, [actionModel]);
    actionModel.background && result.background(createBackgroundFromModel(actionModel.background as IBackgroundModel));

    return result;
  }
}


export {ResizeAutoPadAction};
