import {Action} from "../../../internal/Action.js";
import {Qualifier} from "../../../internal/qualifier/Qualifier.js";
import {QualifierValue} from "../../../internal/qualifier/QualifierValue.js";


/**
 * @description Fade out at the end of the video, use the length() method to set the time in ms for the fade to occur. (Server default: 2000)
 * @extends Action
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class FadeInEffectAction extends Action{
  constructor(duration?: number) {
    super();
    this.addQualifier(new Qualifier('e', new QualifierValue(['fade', `${duration}`]).setDelimiter(':')));
  }

  /**
   *
   * @description Sets the duration level for the action
   * @param {string | number} duration - The duration of the effect
   */
  duration(duration: number | string): this {
    return this.addQualifier(new Qualifier('e', new QualifierValue(['fade', `${duration}`]).setDelimiter(':')));
  }
}


export {FadeInEffectAction};
