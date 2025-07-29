import {Action} from "../../internal/Action.js";
import {QualifierValue} from "../../internal/qualifier/QualifierValue.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {ContrastActionModel} from "../../internal/models/IAdjustActionModel.js";
import {IActionModel} from "../../internal/models/IActionModel.js";

/**
 * @description Adjusts the contrast of the image.
 * @memberOf Actions.Adjust
 * @extends SDK.Action
 */
class ContrastAction extends Action {
  private levelValue: number;
  private functionTypeValue: string;
  protected _actionModel: ContrastActionModel = {actionType: 'contrast'};

  constructor(level?: number) {
    super();
    if (level !== undefined) {
      this.level(level);
    }
  }

  /**
   * @description Sets the level of contrast.
   * @param {number} level The level of contrast. 
   *                       Range (sigmoidal): -100 to 100. Default: 0.
   *                       Range (linear): 1 to 200. Default: 100.
   */
  level(level: number): this {
    this.levelValue = level;
    this._actionModel.level = level;
    return this;
  }

  /**
   * @description Sets the function type for the contrast effect.
   * @param {string} functionType The function to use for the contrast effect.
   *                              Possible values: 'sigmoidal' (default), 'linear'
   */
  functionType(functionType: 'sigmoidal' | 'linear' | string): this {
    this.functionTypeValue = functionType;
    this._actionModel.functionType = functionType;
    return this;
  }

  protected prepareQualifiers(): this {
    let qualifierValueStr = 'contrast';
    
    if (this.levelValue !== undefined) {
      if (this.functionTypeValue) {
        // If function type is specified, use the level_ prefix format
        qualifierValueStr += `:level_${this.levelValue}`;
      } else {
        // If no function type, use simple format
        qualifierValueStr += `:${this.levelValue}`;
      }
    }
    
    if (this.functionTypeValue) {
      qualifierValueStr += `;type_${this.functionTypeValue}`;
    }

    const qualifierValue = new QualifierValue(qualifierValueStr);
    this.addQualifier(new Qualifier('e', qualifierValue));
    return this;
  }

  static fromJson(actionModel: IActionModel): ContrastAction {
    const {level, functionType} = (actionModel as ContrastActionModel);

    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created
    const result = new this(level);
    
    if (functionType) {
      result.functionType(functionType);
    }

    return result;
  }
}

export {ContrastAction}; 