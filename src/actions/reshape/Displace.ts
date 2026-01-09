import {Action} from "../../internal/Action.js";
import {BaseSource} from "../../qualifiers/source/BaseSource.js";
import {Position} from "../../qualifiers/position.js";

/**
 * @description Displaces the pixels in an image according to the color channels of the pixels in another specified image.
 * @extends SDK.Action
 * @memberOf Actions.Reshape
 * @see Visit {@link Actions.Reshape| Reshape} for examples
 */
class DisplaceAction extends Action {
  private _x?: string | number;
  private _y?: string | number;
  private source: BaseSource; 

  constructor(source: BaseSource) {
    super();
    this.source = source;
  }

  /**
   * @description Sets the x coordinate for displacement.
   * @param {string | number} x The x coordinate value (between -999 and 999)
   * @return {this}
   */
  x(x: string | number): this {
    this._x = x;
    return this;
  }

  /**
   * @description Sets the y coordinate for displacement.
   * @param {string | number} y The y coordinate value (between -999 and 999)
   * @return {this}
   */
  y(y: string | number): this {
    this._y = y;
    return this;
  }

  /**
   * @description Sets the position using Position qualifier (alternative to x/y methods).
   * @param {Position} position The position qualifier
   * @return {this}
   */
  position(position: Position): this { 
    // Extract x and y from position's qualifiers
    const positionStr = position.toString();
    const xMatch = positionStr.match(/x_(-?\d+)/);
    const yMatch = positionStr.match(/y_(-?\d+)/);
    
    if (xMatch) {
      this._x = parseInt(xMatch[1], 10);
    }
    if (yMatch) {
      this._y = parseInt(yMatch[1], 10);
    }
    
    return this;
  }

  toString(): string {
    const displaceParams = [
      'e_displace',
      'fl_layer_apply'
    ];
 
    if (this._x !== undefined) {
      displaceParams.push(`x_${this._x}`);
    }
    if (this._y !== undefined) {
      displaceParams.push(`y_${this._y}`);
    } 

    const layerParts = [
      this.source.getOpenSourceString('l'),
      this.source.getTransformation() && this.source.getTransformation().toString(),
      displaceParams.join(',')
    ].filter((a) => a);

    return layerParts.join('/');
  }
}

export {DisplaceAction};
