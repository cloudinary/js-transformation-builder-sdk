import {Action} from "../../../internal/Action.js";
import {QualifierValue} from "../../../internal/qualifier/QualifierValue.js";
import {Qualifier} from "../../../internal/qualifier/Qualifier.js";
import {SystemColors} from "../../../qualifiers/color.js";
import {IActionModel} from "../../../internal/models/IActionModel.js";
import {IBackgroundColorActionModel} from "../../../internal/models/IBackgroundColorActionModel.js";
import {prepareColor} from "../../../internal/utils/prepareColor.js";
import {IBackgroundColorModel} from "../../../internal/models/IEffectActionModel.js";

/**
 * @extends SDK.Action
 * @description A class for background transformations.
 */
class BackgroundColor extends Action {
  protected _actionModel: IBackgroundColorModel = {};

  constructor(color: SystemColors) {
    super();
    this.addQualifier(new Qualifier('b', new QualifierValue(prepareColor(color)).setDelimiter('_')));
    this._actionModel.color = color;
    this._actionModel.actionType = 'backgroundColor';
  }

  static fromJson(actionModel: IActionModel): BackgroundColor {
    const { color } = (actionModel as IBackgroundColorActionModel);

    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created
    const result = new this(color);

    return result;
  }
}

export {BackgroundColor};
