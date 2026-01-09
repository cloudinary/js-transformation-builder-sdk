import {Action} from "../../internal/Action.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {toFloatAsString} from "../../internal/utils/toFloatAsString.js";

/**
 * @description Specifies the dpr.
 * @memberOf Actions.Delivery
 * @extends SDK.Action
 * @see Visit {@link Actions.Delivery|Delivery} for an example
 */
class DeliveryDPRAction extends Action {
  /**
   * Create a new DeliveryDPRAction
   * @param dprValue
   */
  constructor(dprValue: string | number) {
    super();
    // toFloatAsString is used to ensure 1 turns into 1.0
    const dprAsFloat = toFloatAsString(dprValue);
    this.addQualifier(new Qualifier('dpr', dprAsFloat));
  }
}

export {DeliveryDPRAction};
