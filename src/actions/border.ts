import {Action} from "../internal/Action.js";
import {QualifierValue} from "../internal/qualifier/QualifierValue.js";
import {Qualifier} from "../internal/qualifier/Qualifier.js";
import {prepareColor} from "../internal/utils/prepareColor.js";
import {SystemColors} from "../qualifiers/color.js";
import RoundCornersAction from "./roundCorners/RoundCornersAction.js";
import {IBorderActionModel} from "../internal/models/IBorderActionModel.js";
import {IActionModel} from "../internal/models/IActionModel.js";

/**
 * @description Adds a solid border around an image or video.
 *
 *  <b>Learn more:</b>
 * {@link https://cloudinary.com/documentation/effects_and_artistic_enhancements#borders|Adding image borders}
 * @memberOf Actions
 * @namespace Border
 * @example
 * import {Cloudinary} from "@cloudinary/url-gen";
 * import {solid} from "@cloudinary/url-gen/actions/border";
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.border(
 *  solid(15, 'green'),
 *  // Or alternatively
 *  solid().width(15).color('green')
 * );
 *
 */



/**
 * @memberOf Actions.Border
 * @see Actions.Border
 * @example
 * // Used through a builder function Border.solid(), and not by creating a new instance
 * import {Cloudinary} from "@cloudinary/url-gen";
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.border(
 *  Border.solid(15, 'green'),
 *  // Or alternatively
 *  Border.solid().width(15).color('green')
 * );
 */
class BorderAction extends Action {
  private borderWidth: number | string;
  private borderColor: string;
  private borderType: string;
  private _roundCorners: RoundCornersAction;
  protected _actionModel: IBorderActionModel = {};

  /**
   * @description Adds a border of the specified type around an image or video.
   * @param {'solid'} borderType The type of border (currently only 'solid' is supported). Use values in {@link Qualifiers.Border|Border Values}.
   * @param {string} color The color of the border.
   * @param {number} borderWidth The width in pixels.
   */
  constructor(borderType: string, color: SystemColors, borderWidth: number | string) {
    super();
    this.borderType = borderType;
    this.borderColor = prepareColor(color);
    this.borderWidth = borderWidth;

    this._actionModel = {
      borderType,
      borderColor: prepareColor(color),
      borderWidth,
      actionType: 'border',
    };
  }

  /**
   * @description Sets the width of the border
   * @param {number | string} borderWidth The width in pixels.
   */
  width(borderWidth: number | string): this {
    this.borderWidth = borderWidth;
    this._actionModel.borderWidth = borderWidth;
    return this;
  }

  /**
   * @description Sets the color of the border.
   * @param {string} borderColor The color of the border.
   */
  color(borderColor: SystemColors): this {
    this.borderColor = prepareColor(borderColor);
    this._actionModel.borderColor = prepareColor(borderColor);
    return this;
  }

  /**
   * @description Rounds the specified corners of an image.
   * @param {RoundCornersAction} roundCorners
   * @return {this}
   */
  roundCorners(roundCorners: RoundCornersAction): this {
    this._roundCorners = roundCorners;
    this._actionModel.roundCorners = {
      actionType: 'roundCorners',
      radius: roundCorners.getRadius()
    };
    return this;
  }

  /**
   * @description Sets the style of the border.
   * @param {number | string} width The width in pixels.
   * @param {string} color The color of the border, e.g 'green', 'yellow'.
   * @return {this}
   */
  solid(width: number | string, color: SystemColors): BorderAction {
    this.borderType = 'solid';
    this.borderColor = prepareColor(color);
    this.borderWidth = width;

    this._actionModel.borderType = 'solid';
    this._actionModel.borderColor = prepareColor(color);
    this._actionModel.borderWidth = width;

    return this;
  }

  protected prepareQualifiers(): void {
    const qualifierValue = new QualifierValue([`${this.borderWidth}px`, this.borderType, `${this.borderColor}`]).setDelimiter('_');
    this.addQualifier(new Qualifier('bo', qualifierValue));

    if (this._roundCorners) {
      this.addQualifier(this._roundCorners.qualifiers.get('r'));
    }
  }

  static fromJson(actionModel: IActionModel): BorderAction {
    const { borderWidth, borderColor, borderType, roundCorners } = (actionModel as IBorderActionModel);

    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created
    const result = new this(borderType, borderColor, borderWidth);

    if (roundCorners) {
      const roundCornersAction = (() => {
        if (roundCorners.radius === 'max') {
          return new RoundCornersAction().max();
        }
        if (Array.isArray(roundCorners.radius)) {
          return new RoundCornersAction().radius(...roundCorners.radius);
        }
        return undefined;
      })();

      if (roundCornersAction) {
        result.roundCorners(roundCornersAction);
      }
    }

    return result;
  }
}




/**
 * @summary action
 * @memberOf Actions.Border
 * @description Sets the style of the border.
 * @param {number | string} width The width in pixels.
 * @param {string} color The color of the border, e.g 'green', 'yellow'.
 * @return {Actions.Border.BorderAction}
 */
function solid(width: number | string, color: SystemColors): BorderAction {
  return new BorderAction('solid', color, width);
}


/**
 * @summary action
 * @memberOf Actions.Border
 * @description Sets the radius of the border.
 * @param {Actions.RoundCorners.RoundCornersAction} roundCorners RoundCorners action.
 * @return {Actions.Border.BorderAction}
 */
function roundCorners(roundCorners: RoundCornersAction): BorderAction {
  const borderActionInstance = new BorderAction('solid', 'transparent', 0);
  borderActionInstance.roundCorners(roundCorners);
  return borderActionInstance;
}

const Border = {
  solid,
  roundCorners,
};

export {BorderAction, Border, solid, roundCorners};
