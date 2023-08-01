import { Action } from "../../internal/Action.js";
import { QualifierValue } from "../../internal/qualifier/QualifierValue.js";
import { Qualifier } from "../../internal/qualifier/Qualifier.js";
import { IGenerativeRemoveModel } from "../../internal/models/IEffectActionModel.js";
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

  constructor() {
    super();
    this._actionModel.actionType = "generativeRemove";
  }

  prompt(...value: string[]) {
    this._prompts = value;

    if (this._prompts.length > 0) {
      this._actionModel.prompts = this._prompts;
    }
    return this;
  }

  region(...value: RectangleRegion[]) {
    this._regions = value;

    if (this._regions.length > 0) {
      this._actionModel.regions = this._regions.map((region) =>
        region.toJson()
      );
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

    this.addQualifier(
      new Qualifier("e", `gen_remove:${qualifierValue.toString()}`)
    );
  }

  private preparePromptValue() {
    const prompts = this._prompts;
    const detectMultiple = this._detectMultiple;

    const qualifierValue = new QualifierValue().setDelimiter(";");

    if (prompts.length === 1) {
      qualifierValue.addValue(`prompt_${prompts[0]}`);

      if (detectMultiple) {
        qualifierValue.addValue("multiple_true");
      }
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

  static fromJson(actionModel: IGenerativeRemoveModel): GenerativeRemove {
    const { prompts, regions, detectMultiple } = actionModel;
    const result = new this();

    if (regions) {
      result.region(
        ...regions.map(
          ({ x, y, width, height }) => new RectangleRegion(x, y, width, height)
        )
      );
    }

    if (prompts) {
      result.prompt(...prompts);
    }

    if (detectMultiple) {
      result.detectMultiple(detectMultiple);
    }

    return result;
  }
}

export { GenerativeRemove };
