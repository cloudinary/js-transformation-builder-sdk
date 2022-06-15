/**
 * @description Contains functions to select the font weight.
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/layers#text_layer_options|Adding text overlays to images}
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_layers#text_layer_options|Adding text overlays to videos}
 * @memberOf Qualifiers
 * @namespace FontWeight
 * @see To be used with {@link Qualifiers.TextStyle|Text Style}
 */

/**
 * @summary qualifier
 * @memberOf Qualifiers.FontWeight
 */
function thin(): string {
  return 'thin';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.FontWeight
 */
function light(): string {
  return 'light';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.FontWeight
 */
function normal(): string {
  return 'normal';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.FontWeight
 */
function bold(): string {
  return 'bold';
}


const FontWeight = {bold, light, normal, thin};
export {
  FontWeight,
  bold,
  light,
  normal,
  thin
};
