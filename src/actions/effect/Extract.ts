import { Action } from "../../internal/Action.js";
import { Qualifier } from "../../internal/qualifier/Qualifier.js";
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
  private _preserveAlpha = false;

  constructor(prompts: string | string[]) {
    super();
    this._prompts = Array.isArray(prompts) ? prompts : [prompts];
  }

  detectMultiple(value = false) {
    this._detectMultiple = value;
    return this;
  }

  mode(mode?: ExtractModeType) {
    this._mode = mode;
    return this;
  }

  invert(value = true) {
    this._invert = value;
    return this;
  }

  preserveAlpha(value = true) {
    this._preserveAlpha = value;
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

    if (this._preserveAlpha) {
      qualifierValue.addValue("preserve-alpha_true");
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
}

export { Extract };
