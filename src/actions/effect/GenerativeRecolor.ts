import { Action } from "../../internal/Action.js";
import { QualifierValue } from "../../internal/qualifier/QualifierValue.js";
import { Qualifier } from "../../internal/qualifier/Qualifier.js";
import { IGenerativeRecolorModel } from "../../internal/models/IEffectActionModel.js";
import {SystemColors} from "../../qualifiers/color.js";

/**
 * @description A class that defines how to recolor objects in an asset using Generative AI
 * @extends SDK.Action
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class GenerativeRecolor extends Action {
  private _prompts: Array<string> = [];
  private _detectMultiple = false;
  private _toColor: SystemColors | string;

  constructor(prompts: string | string[], color: SystemColors | string) {
    super();

    this._prompts = Array.isArray(prompts) ? prompts : [prompts];
    this._toColor = color;

    this._actionModel.actionType = "generativeRecolor";
    this._actionModel.prompts = this._prompts;
    this._actionModel.toColor = this._toColor;
  }

  multiple(value = true) {
    this._detectMultiple = value;

    if (this._detectMultiple) {
      this._actionModel.detectMultiple = this._detectMultiple;
    }

    return this;
  }

  protected prepareQualifiers(): void {
    const qualifierValue = new QualifierValue().setDelimiter(";");

    if (this._prompts.length) {
      qualifierValue.addValue(this.preparePromptValue());
    }

    this.addQualifier(
      new Qualifier("e", `gen_recolor:${qualifierValue.toString()}`)
    );
  }

  private preparePromptValue() {
    const prompts = this._prompts;
    const detectMultiple = this._detectMultiple;
    const toColor = this._toColor;

    const qualifierValue = new QualifierValue().setDelimiter(";");

    if (prompts.length === 1) {
      qualifierValue.addValue(`prompt_${prompts[0]}`);

      if (toColor) {
        qualifierValue.addValue(`to-color_${toColor}`);
      }
      if (detectMultiple) {
        qualifierValue.addValue("multiple_true");
      }
    } else {
      qualifierValue.addValue(`prompt_(${prompts.join(";")})`);

      if (toColor) {
        qualifierValue.addValue(`to-color_${toColor}`);
      }
    }

    return qualifierValue;
  }

  static fromJson(actionModel: IGenerativeRecolorModel): GenerativeRecolor {
    const { prompts, detectMultiple, toColor } = actionModel;
    const result = new this(prompts, toColor);

    if (detectMultiple) {
      result.multiple(detectMultiple);
    }

    return result;
  }
}

export { GenerativeRecolor };
