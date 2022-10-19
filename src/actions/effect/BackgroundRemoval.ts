import {Action} from "../../internal/Action.js";
import {QualifierValue} from "../../internal/qualifier/QualifierValue.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {ForegroundObjectValue} from "../../qualifiers/foregroundObject.js";
import {IActionModel} from "../../internal/models/IActionModel.js";
import {IBackgroundRemovalModel} from "../../internal/models/IEffectActionModel.js";

/**
 * @description A class that defines how to remove the background of an asset
 * @extends SDK.Action
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class BackgroundRemoval extends Action {
  private _fineEdges: boolean;
  private _hints: Array<ForegroundObjectValue>;

  constructor() {
    super();
    this._actionModel.actionType = 'backgroundRemoval';
  }

  fineEdges(value: boolean) {
    this._fineEdges = value;

    if (this._fineEdges) {
      this._actionModel.fineEdges = this._fineEdges;
    }
    return this;
  }

  hints(value: Array<ForegroundObjectValue>) {
    this._hints = value;

    if (this._hints) {
      this._actionModel.hints = this._hints;
    }
    return this;
  }

  protected prepareQualifiers(): void {
    let str = 'background_removal';

    if (this._fineEdges !== undefined) {
      str += `:${new QualifierValue(`fineedges_${this._fineEdges ? 'y' : 'n'}`).toString()}`;
    }

    if (this._hints?.length) {
      str += `:${new QualifierValue(`hints_(${this._hints.join(';')})`).toString()}`;
    }

    this.addQualifier(new Qualifier('e', str));
  }

  static fromJson(actionModel: IActionModel): BackgroundRemoval {
    const {fineEdges, hints} = (actionModel as IBackgroundRemovalModel);

    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created
    return new this().fineEdges(fineEdges).hints(hints);
  }
}


export {BackgroundRemoval};
