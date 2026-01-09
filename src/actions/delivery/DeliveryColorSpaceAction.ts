import {Action} from "../../internal/Action.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {ColorSpace} from "../../qualifiers/colorSpace.js";
import {ColorSpaceType} from "../../types/types.js";

/**
 * @description Specifies the color space to use.
 * @memberOf Actions.Delivery
 * @extends SDK.Action
 * @see Visit {@link Actions.Delivery|Delivery} for an example
 */
class DeliveryColorSpaceAction extends Action {
  /**
   * Create a new DeliveryColorSpaceAction
   * @param mode
   */
  constructor(mode: ColorSpaceType) {
    super();
    this.addQualifier(new Qualifier('cs', ColorSpace[mode] ? ColorSpace[mode]() : mode));
  }
}

export {DeliveryColorSpaceAction};
