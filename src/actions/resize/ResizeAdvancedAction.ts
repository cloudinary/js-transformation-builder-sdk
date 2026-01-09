import {ResizeSimpleAction} from "./ResizeSimpleAction.js";
import {IGravity} from "../../qualifiers/gravity/GravityQualifier.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";

/**
 * @description Defines an advanced resize.
 * @extends Actions.Resize.ResizeSimpleAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizeAdvancedAction extends ResizeSimpleAction{
  /**
   * @description Which part of the original image to include.
   * @param {Qualifiers.Gravity} gravity
   */
  gravity(gravity: IGravity): this {
    const gravityQualifier = typeof gravity === "string" ? new Qualifier('g', gravity) : gravity;
    return this.addQualifier(gravityQualifier);
  }
}

export {ResizeAdvancedAction};
