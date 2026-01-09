import { Action } from "../../internal/Action.js";
import { QualifierValue } from "../../internal/qualifier/QualifierValue.js";
import { Qualifier } from "../../internal/qualifier/Qualifier.js";
import { ForegroundObjectValue } from "../../qualifiers/foregroundObject.js";

/**
 * @description A class that defines how to remove the background of an asset
 * @extends SDK.Action
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class BackgroundRemoval extends Action {
  private _fineEdges: boolean;
  private _hints: Array<ForegroundObjectValue>;

  constructor() {
    super();
  }

  fineEdges(value = true) {
    this._fineEdges = value;
    return this;
  }

  hints(...values: ForegroundObjectValue[] | [ForegroundObjectValue[]]) {
    if (values.length === 1 && Array.isArray(values[0])) {
      // Handle the case of a single array argument
      this._hints = values[0];
    } else if (values.length) {
      this._hints = values as ForegroundObjectValue[];
    }
    return this;
  }

  protected prepareQualifiers(): void {
    let str = "background_removal";

    const params: string[] = [];

    if (this._fineEdges !== undefined) {
      params.push(
        new QualifierValue(
          `fineedges_${this._fineEdges ? "y" : "n"}`
        ).toString()
      );
    }

    if (this._hints?.length) {
      params.push(
        new QualifierValue(`hints_(${this._hints.join(";")})`).toString()
      );
    }

    if (params.length > 0) {
      str += `:${params.join(";")}`;
    }

    this.addQualifier(new Qualifier("e", str));
  }
}

export { BackgroundRemoval };
