import {BackgroundQualifier} from "../../qualifiers/background/shared/base/BackgroundQualifier.js";
import {IGravity} from "../../qualifiers/gravity/GravityQualifier.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {ResizeAdvancedAction} from "./ResizeAdvancedAction.js";
import {IActionModel} from "../../internal/models/IActionModel.js";
import {CompassGravity} from "../../qualifiers/gravity/compassGravity/CompassGravity.js";
import {createBackgroundModel, IBackgroundModel} from "../../internal/models/createBackgroundModel.js";
import {createBackgroundFromModel} from "../../internal/models/createBackgroundFromModel.js";
import {BackgroundGenerativeFillQualifier, isGenerativeFillBackgroundValue} from "../../qualifiers/background/shared/BackgroundGenerativeFillQualifier.js";

/**
 * @description Defines an advanced resize with padding.
 * @extends Actions.Resize.ResizeAdvancedAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizePadAction<GravityType extends IGravity> extends ResizeAdvancedAction {
  /**
   * @description Sets the background.
   * @param {Qualifiers.Background} backgroundQualifier Defines the background color to use instead of
   * transparent background areas or when resizing with padding.
   */
  background(backgroundQualifier: BackgroundQualifier | string): this {
    let parsedBackgroundQualifier = backgroundQualifier;

    // Support for Generative Fill explicit string syntax: `background("gen_fill:prompt_hello world")`.
    if (isGenerativeFillBackgroundValue(backgroundQualifier)) {
      parsedBackgroundQualifier = new BackgroundGenerativeFillQualifier(backgroundQualifier as string);
    }

    this._actionModel.background = createBackgroundModel(parsedBackgroundQualifier);
    return this.addQualifier(parsedBackgroundQualifier);
  }

  /**
   * @description Horizontal position for custom-coordinates based padding.
   * @param {number} x The x position.
   */
  offsetX(x: number | string): this {
    this._actionModel.x = x;
    return this.addQualifier(new Qualifier('x', x));
  }

  /**
   * @description Vertical position for custom-coordinates based padding
   * @param {number} y The y position.
   */
  offsetY(y: number | string): this {
    this._actionModel.y = y;
    return this.addQualifier(new Qualifier('y', y));
  }

  static fromJson(actionModel: IActionModel): ResizePadAction<CompassGravity> {
    const result = super.fromJson.apply(this, [actionModel]);
    actionModel.background && result.background(createBackgroundFromModel(actionModel.background as IBackgroundModel));
    actionModel.x && result.offsetX(actionModel.x);
    actionModel.y && result.offsetY(actionModel.y);
    actionModel.zoom && result.zoom(actionModel.zoom as string);

    return result;
  }
}


export {ResizePadAction};
