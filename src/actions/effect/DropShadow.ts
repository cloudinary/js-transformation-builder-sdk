import {Action} from "../../internal/Action.js";
import {QualifierValue} from "../../internal/qualifier/QualifierValue.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {IDropShadowModel} from "../../internal/models/IEffectActionModel.js";
import {IActionModel} from "../../internal/models/IActionModel.js";

/**
 * @description Adds a shadow to the object in an image.
 * @extends SDK.Action
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class DropShadow extends Action {
  private _azimuth: number;
  private _elevation: number;
  private _spread : number;
  protected _actionModel: IDropShadowModel = {};

  constructor() {
    super();
    this._actionModel.actionType = 'dropshadow';
  }

  /**
   * @description
   * The direction the light is coming from to cause the shadow effect. (Range: 0 to 360, Server default: 100)
   * @param {number} azimuth
   * @return {this}
   */
  azimuth(azimuth?: number): this{
    this._actionModel.azimuth = azimuth;
    this._azimuth = azimuth;
    return this;
  }

  /**
   * @description
   * The height of the light source above the 'ground' to cause the shadow effect. (Range: 0 to 90, Server default: 70)
   * @param {number} elevation
   * @return {this}
   */
  elevation(elevation?: number): this {
    this._actionModel.elevation = elevation;
    this._elevation = elevation;
    return this;
  }

  /**
   * @description
   * The spread of the light source. A small number means 'point' light. A larger number means 'area' light. (Range: 0 to 100, Server default: 50)
   * @param {number} spread
   * @return {this}
   */
  spread(spread?: number): this {
    this._actionModel.spread = spread;
    this._spread = spread;
    return this;
  }

  protected prepareQualifiers() : void {
    const paramNames = ['azimuth', 'elevation', 'spread'];
    const paramValues = [this._azimuth, this._elevation, this._spread];
    const paramString = paramValues.map((value, index) => value !== undefined ? `${paramNames[index]}_${value}` : '').filter(Boolean).join(';');

    this.addQualifier(new Qualifier(
      'e',
      new QualifierValue(['dropshadow', paramString]).setDelimiter(':'))
    );
  }

  static fromJson(actionModel: IActionModel): DropShadow {
    const {azimuth, elevation, spread} = (actionModel as IDropShadowModel);

    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created
    const result = new this();
    azimuth && result.azimuth(azimuth);
    elevation && result.elevation(elevation);
    spread && result.spread(spread);

    return result;
  }
}



export {DropShadow};
