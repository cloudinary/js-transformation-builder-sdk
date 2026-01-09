import {Action} from "../../../internal/Action.js";
import {Qualifier} from "../../../internal/qualifier/Qualifier.js";
import {QualifierValue} from "../../../internal/qualifier/QualifierValue.js";

/**
 * @description Changes the speed of the video playback using the rate() method
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class AccelerationEffectAction extends Action {
  private _rate: string | number;

  constructor(rate?: string | number) {
    super();
    rate && this.rate(rate);
  }

  rate(rate: number | string): this {
    this._rate = rate;
    return this;
  }

  protected prepareQualifiers(): this {
    const qualifierValue = new QualifierValue(['accelerate', this._rate]).setDelimiter(':');
    this.addQualifier(new Qualifier('e', qualifierValue));
    return this;
  }
}


export {AccelerationEffectAction};
