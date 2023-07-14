import { Action } from "../../internal/Action.js";
import { Qualifier } from "../../internal/qualifier/Qualifier.js";
import { OpacityActionModel } from "../../internal/models/IOpacityActionModel.js";
import { IActionModel } from "../../internal/models/IActionModel.js";

/**
 * @description OpacityAction class, used to define the opacity of an asset
 * @memberOf Actions.Adjust
 * @extends SDK.Action
 */
class OpacityAdjustAction extends Action {
  private level: number;
  protected _actionModel: OpacityActionModel = { actionType: "opacity" };

  constructor(level: number) {
    super();
    this.level = level;
    this._actionModel.level = level;
    this.addQualifier(new Qualifier("o", level));
  }

  static fromJson(actionModel: IActionModel): OpacityAdjustAction {
    const { level } = actionModel as OpacityActionModel;

    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created
    return new this(level);
  }
}

export { OpacityAdjustAction };
