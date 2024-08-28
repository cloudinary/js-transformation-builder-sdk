import { Action } from "../../internal/Action.js";
import { Qualifier } from "../../internal/qualifier/Qualifier.js";
import { IExtractModel } from "../../internal/models/IEffectActionModel.js";
import { ExtractModeType } from "../../types/types.js";
import { QualifierValue } from "../../internal/qualifier/QualifierValue.js";

/**
 * @description Extracts an area or multiple areas of an image, described in natural language.
 * @extends SDK.Action
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class Extract extends Action {
  private _prompts: Array<string> = [];
  private _detectMultiple = false;
  private _mode: ExtractModeType;
  private _invert = false;

  constructor(prompts: string | string[]) {
    super();
    this._actionModel.actionType = "extract";

    this._prompts = Array.isArray(prompts) ? prompts : [prompts];
    this._actionModel.prompts = this._prompts;
  }

  detectMultiple(value = false) {
    this._detectMultiple = value;

    if (this._detectMultiple) {
      this._actionModel.detectMultiple = this._detectMultiple;
    }

    return this;
  }

  mode(mode?: ExtractModeType) {
    this._mode = mode;
    this._actionModel.mode = this._mode;

    return this;
  }

  invert(value = false) {
    this._invert = value;

    if (this._invert) {
      this._actionModel.invert = this._invert;
    }

    return this;
  }

  protected prepareQualifiers(): void {
    const qualifierValue = new QualifierValue().setDelimiter(";");

    if (this._prompts.length) {
      qualifierValue.addValue(this.preparePromptValue());
    }

    if (this._detectMultiple) {
      qualifierValue.addValue("multiple_true");
    }

    if (this._mode) {
      qualifierValue.addValue(`mode_${this._mode}`);
    }

    if (this._invert) {
      qualifierValue.addValue("invert_true");
    }

    this.addQualifier(
      new Qualifier("e", `extract:${qualifierValue.toString()}`)
    );
  }

  private preparePromptValue() {
    const prompts = this._prompts;
    const qualifierValue = new QualifierValue().setDelimiter(";");

    if (prompts.length === 1) {
      qualifierValue.addValue(`prompt_${prompts[0]}`);
    } else {
      qualifierValue.addValue(`prompt_(${prompts.join(";")})`);
    }

    return qualifierValue;
  }

  static fromJson(actionModel: IExtractModel): Extract {
    const { prompts, detectMultiple, mode, invert } = actionModel;
    const result = new this(prompts);

    if (detectMultiple) {
      result.detectMultiple(detectMultiple);
    }

    if (mode) {
      result.mode(mode);
    }

    if (invert) {
      result.invert(invert);
    }

    return result;
  }
}

export { Extract };
