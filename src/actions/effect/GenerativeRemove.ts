import { Action } from "../../internal/Action.js";
import { QualifierValue } from "../../internal/qualifier/QualifierValue.js";
import { Qualifier } from "../../internal/qualifier/Qualifier.js";
import { IGenerativeRemoveModel } from "../../internal/models/IEffectActionModel.js";

type Region = {
  x: number;
  y: number;
  width: number;
  height: number;
}; // Internal type for regions parameter – it's not interchangeable with CustomRegion

/**
 * @description A class that defines how to remove objects from an asset using Generative AI
 * @extends SDK.Action
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class GenerativeRemove extends Action {
  private _prompts: Array<string> = [];
  private _regions: Array<Region> = [];
  private _detectMultiple = false;

  constructor() {
    super();
    this._actionModel.actionType = "generativeRemove";
  }

  prompt(value: string) {
    return this.prompts([value]);
  }

  prompts(value: Array<string>) {
    this._prompts = value;

    if (this._prompts) {
      this._actionModel.prompts = this._prompts;
    }
    return this;
  }

  region(value: Region) {
    return this.regions([value]);
  }

  regions(value: Array<Region>) {
    this._regions = value;

    if (this._regions) {
      this._actionModel.regions = this._regions;
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
    switch (true) {
      case this._prompts.length === 1: {
        return this.preparePromptQualifier();
      }
      case this._prompts.length > 1: {
        return this.preparePromptsQualifier();
      }
      case this._regions.length === 1: {
        return this.prepareRegionQualifier();
      }
      case this._regions.length > 1: {
        return this.prepareRegionsQualifier();
      }
    }
  }

  private preparePromptQualifier() {
    const prompt = this._prompts[0];

    let str = `gen_remove:${new QualifierValue(`prompt_${prompt}`).toString()}`;

    if (this._detectMultiple) {
      str += `;${new QualifierValue(`multiple_true`).toString()}`;
    }

    this.addQualifier(new Qualifier("e", str));
  }

  private preparePromptsQualifier() {
    const prompts = this._prompts;

    const str = `gen_remove:${new QualifierValue(
      `prompt_(${prompts.join(";")})`
    ).toString()}`;

    this.addQualifier(new Qualifier("e", str));
  }

  private prepareRegionQualifier() {
    const region = this.stringifyRegion(this._regions[0]);

    const str = `gen_remove:${new QualifierValue(
      `region_${region}`
    ).toString()}`;

    this.addQualifier(new Qualifier("e", str));
  }

  private prepareRegionsQualifier() {
    const regions = this._regions.map((region) => this.stringifyRegion(region));

    const str = `gen_remove:${new QualifierValue(
      `region_(${regions.join(";")})`
    ).toString()}`;

    this.addQualifier(new Qualifier("e", str));
  }

  private stringifyRegion(region: Region) {
    const { x, y, width, height } = region;

    return `(x_${x};y_${y};w_${width};h_${height})`;
  }

  static fromJson(actionModel: IGenerativeRemoveModel): GenerativeRemove {
    const { prompts, regions, detectMultiple } = actionModel;
    const result = new this();

    if (regions) {
      result.regions(regions);
    }

    if (prompts) {
      result.prompts(prompts);
    }

    if (detectMultiple) {
      result.detectMultiple(detectMultiple);
    }

    return result;
  }
}

export { GenerativeRemove };
