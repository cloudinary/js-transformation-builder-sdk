import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {QualifierValue} from "../../internal/qualifier/QualifierValue.js";
import {Action} from "../../internal/Action.js";
import {IBlurFacesModel} from "../../internal/models/IEffectActionModel.js";
import {IActionModel} from "../../internal/models/IActionModel.js";

/**
 * @description The Action class of the blurFaces
 * @extends SDK.Action
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class BlurFacesAction extends Action {
  protected _actionModel: IBlurFacesModel = {actionType: 'blurFaces'};

  /**
   * @description Sets the strength of the blur effect.
   * @param {number | string} strength
   */
  strength(strength: number | string): this {
    this._actionModel.strength = strength;
    return this;
  }

  protected prepareQualifiers():void {
    this.addQualifier(new Qualifier('e', new QualifierValue(['blur_faces', this._actionModel.strength])));
    return;
  }

  static fromJson(actionModel: IActionModel): BlurFacesAction {
    const {strength} = actionModel as IBlurFacesModel;

    const result = new this();

    if(strength){
      result.strength(strength);
    }

    return result;
  }
}


export {BlurFacesAction};
