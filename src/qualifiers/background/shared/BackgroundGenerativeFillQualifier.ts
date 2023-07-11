import {BackgroundQualifier} from "./base/BackgroundQualifier.js";
import {IGenerativeFillBackgroundModel} from "../../../internal/models/createBackgroundModel.js";

/**
 * @description Automatically fills the padded area using generative AI to extend the image seamlessly.
 * Optionally include a prompt to guide the image generation.
 * @memberOf Qualifiers.Background
 */
class BackgroundGenerativeFillQualifier extends BackgroundQualifier {
  protected _prompt: string | undefined;
  protected _backgroundType: 'generativeFill';

  constructor(backgroundValue: string) {
    super(backgroundValue);

    this._prompt = getPromptFromBackgroundValue(backgroundValue);
    this._backgroundType = 'generativeFill';
  }

  get prompt(): string | undefined {
    return this._prompt;
  }
  get backgroundType(): 'generativeFill' {
    return this._backgroundType;
  }

  /**
   * @description
   * Override the toString() function to explicitly stringify the qualifier.
   */
  toString(): string {
    return `b_gen_fill${this._prompt ? `:prompt_${this._prompt}` : ''}`;
  }

  static createInstanceFromModel(backgroundModel: IGenerativeFillBackgroundModel): BackgroundGenerativeFillQualifier {
    const backgroundValue = `gen_fill${backgroundModel.prompt ? `:prompt_${backgroundModel.prompt}` : ''}`;
    return new BackgroundGenerativeFillQualifier(backgroundValue);
  }
}

/**
 * @description Helper for checking if the background value is type of Generative Fill.
 */
function isGenerativeFillBackgroundValue(backgroundValue: unknown): boolean {
  return typeof backgroundValue === 'string' && backgroundValue.startsWith('gen_fill');
}

/**
 * @description Helper for getting prompt from the Generative Fill background value.
 */
function getPromptFromBackgroundValue(backgroundValue: string): string | undefined {
  return backgroundValue.split(':prompt_')[1];
}

export {
  BackgroundGenerativeFillQualifier,
  isGenerativeFillBackgroundValue,
  getPromptFromBackgroundValue
};
