import {encodePromptComponent} from "../../../internal/utils/encodePromptComponents.js";
import {BackgroundQualifier} from "./base/BackgroundQualifier.js";

/**
 * @description Automatically fills the padded area using generative AI to extend the image seamlessly.
 * Optionally include a prompt to guide the image generation.
 * @memberOf Qualifiers.Background
 */
class BackgroundGenerativeFillQualifier extends BackgroundQualifier {
  protected _prompt: string | undefined;
  protected _backgroundType: 'generativeFill';

  constructor() {
    super("gen_fill");
    this._backgroundType = 'generativeFill';
  }

  prompt(prompt: string): BackgroundGenerativeFillQualifier {
    try {
      this._prompt = decodeURIComponent(prompt);
    } catch {
      this._prompt = prompt;
    }

    return this;
  }

  getPrompt(): string | undefined {
    return this._prompt;
  }

  getBackgroundType(): 'generativeFill' {
    return this._backgroundType;
  }

  /**
   * @description
   * Override the toString() function to explicitly stringify the qualifier.
   */
  toString(): string {
    return `b_gen_fill${this._prompt ? `:prompt_${encodePromptComponent(this._prompt)}` : ''}`;
  }
}

export {
  BackgroundGenerativeFillQualifier
};
