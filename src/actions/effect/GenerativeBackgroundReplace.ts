import { Action } from "../../internal/Action.js";
import { Qualifier } from "../../internal/qualifier/Qualifier.js";
import { encodePromptComponent } from "../../internal/utils/encodePromptComponents.js";

/**
 * @description Uses generative AI to replace background of your image with something else.
 * @extends SDK.Action
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class GenerativeBackgroundReplace extends Action {
  private _prompt: string;

  constructor() {
    super();
  }

  prompt(value: string): GenerativeBackgroundReplace {
    this._prompt = value;
    return this;
  }

  protected prepareQualifiers(): void {
    if (!this._prompt) {
      this.addQualifier(new Qualifier("e", "gen_background_replace"));
    } else {
      this.addQualifier(
        new Qualifier(
          "e",
          `gen_background_replace:prompt_${encodePromptComponent(this._prompt)}`
        )
      );
    }
  }
}

export { GenerativeBackgroundReplace };
