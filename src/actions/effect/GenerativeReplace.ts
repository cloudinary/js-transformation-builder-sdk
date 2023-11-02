import { Action } from "../../internal/Action.js";
import { Qualifier } from "../../internal/qualifier/Qualifier.js";
import { IGenerativeReplaceModel } from "../../internal/models/IEffectActionModel.js";

/**
 * @description Uses generative AI to replace parts of your image with something else.
 * @extends SDK.Action
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class GenerativeReplace extends Action {
  private _from: string;
  private _to: string;
  private _preserveGeometry = false;
  private _detectMultiple = false;

  constructor() {
    super();
    this._actionModel.actionType = "generativeReplace";
  }

  from(value: string): GenerativeReplace {
    this._from = value;
    this._actionModel.from = value;

    return this;
  }

  to(value: string): GenerativeReplace {
    this._to = value;
    this._actionModel.to = value;

    return this;
  }

  preserveGeometry(value = true): GenerativeReplace {
    this._preserveGeometry = value;

    if (value) {
      this._actionModel.preserveGeometry = true;
    }

    return this;
  }

  detectMultiple(value = true) {
    this._detectMultiple = value;

    if (this._detectMultiple) {
      this._actionModel.detectMultiple = this._detectMultiple;
    }

    return this;
  }

  protected prepareQualifiers(): void {
    let str = `gen_replace:from_${this._from};to_${this._to}`;

    if (this._preserveGeometry) {
      str += `;preserve-geometry_true`;
    }

    if (this._detectMultiple) {
      str += `;multiple_true`;
    }

    this.addQualifier(new Qualifier("e", str));
  }

  static fromJson(actionModel: IGenerativeReplaceModel): GenerativeReplace {
    const { from, to, preserveGeometry, detectMultiple } = actionModel;
    const result = new this();

    result.from(from);
    result.to(to);

    if (preserveGeometry) {
      result.preserveGeometry();
    }

    if (detectMultiple) {
      result.detectMultiple();
    }

    return result;
  }
}

export { GenerativeReplace };
