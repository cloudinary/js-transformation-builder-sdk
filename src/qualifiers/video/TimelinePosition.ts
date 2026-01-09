import {Action} from "../../internal/Action.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {StringNumberOrExpression} from "../../simpleTypes.js";

/**
 * @description Defines a video range using startOffset, endOffset, duration.
 * @namespace TimelinePosition
 * @memberOf Qualifiers
 */


/**
 * TimelinePosition
 * @memberOf Qualifiers.TimelinePosition
 */
class TimelinePosition extends Action {
  constructor() {
    super();
  }

  /**
   * @param {string | number} startOffset
   */
  startOffset(startOffset: StringNumberOrExpression): this {
    const startOffsetQualifier = new Qualifier('so', startOffset);
    this.addQualifier(startOffsetQualifier);
    return this;
  }

  /**
   * @param {string | number} endOffset
   */
  endOffset(endOffset: StringNumberOrExpression): this {
    const endOffsetQualifier = new Qualifier('eo', endOffset);
    this.addQualifier(endOffsetQualifier);
    return this;
  }

  /**
   * @param {string | number} duration
   */
  duration(duration: StringNumberOrExpression): this {
    const durationQualifier = new Qualifier('du', duration);
    this.addQualifier(durationQualifier);
    return this;
  }
}

export {
  TimelinePosition
};
