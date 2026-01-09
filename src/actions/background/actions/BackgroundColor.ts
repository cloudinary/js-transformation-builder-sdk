import {Action} from "../../../internal/Action.js";
import {QualifierValue} from "../../../internal/qualifier/QualifierValue.js";
import {Qualifier} from "../../../internal/qualifier/Qualifier.js";
import {SystemColors} from "../../../qualifiers/color.js";
import {prepareColor} from "../../../internal/utils/prepareColor.js";

/**
 * @extends SDK.Action
 * @description A class for background transformations.
 */
class BackgroundColor extends Action {
  constructor(color: SystemColors) {
    super();
    this.addQualifier(new Qualifier('b', new QualifierValue(prepareColor(color)).setDelimiter('_')));
  }
}

export {BackgroundColor};
