import { Action } from "../../internal/Action.js";
import { QualifierValue } from "../../internal/qualifier/QualifierValue.js";
import { Qualifier } from "../../internal/qualifier/Qualifier.js";
import { RectangleRegion } from "../../qualifiers/region/RectangleRegion.js";

/**
 * @description A class that defines how to remove objects from an asset using Generative AI
 * @extends SDK.Action
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class GenerativeRemove extends Action {
  private _prompts: Array<string> = [];
  private _regions: Array<RectangleRegion> = [];
  private _detectMultiple = false;
  private _removeShadow = false;

  constructor() {
    super();
  }

  prompt(...value: string[]) {
    this._prompts = value;
    return this;
  }

  region(...value: RectangleRegion[]) {
    this._regions = value;
    return this;
  }

  detectMultiple(value = true) {
    this._detectMultiple = value;
    return this;
  }

  removeShadow(value = true) {
    this._removeShadow = value;
    return this;
  }

  protected prepareQualifiers(): void {
    const qualifierValue = new QualifierValue().setDelimiter(";");

    switch (true) {
      case this._prompts.length > 0: {
        qualifierValue.addValue(this.preparePromptValue());
        break;
      }
      case this._regions.length > 0: {
        qualifierValue.addValue(this.prepareRegionValue());
        break;
      }
    }

    if (this._detectMultiple) {
      qualifierValue.addValue("multiple_true");
    }

    if (this._removeShadow) {
      qualifierValue.addValue("remove-shadow_true");
    }

    this.addQualifier(new Qualifier("e", `gen_remove:${qualifierValue.toString()}`));
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

  private prepareRegionValue() {
    const regions = this._regions;
    const qualifierValue = new QualifierValue();

    if (regions.length === 1) {
      const singleRegion = regions[0].toString();
      qualifierValue.addValue(`region_${singleRegion}`);
    } else {
      const regionList = regions.map((region) => region.toString());
      qualifierValue.addValue(`region_(${regionList.join(";")})`);
    }

    return qualifierValue;
  }
}

export { GenerativeRemove };
