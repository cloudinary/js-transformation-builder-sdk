/**
 * @description Contains functions to select the alignment of the text.
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/layers#text_layer_options|Adding text overlays to images}
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_layers#text_layer_options|Adding text overlays to videos}
 * @memberOf Qualifiers
 * @namespace TextAlignment
 * @see To be used with {@link Qualifiers.TextStyle|Text Style}
 */

/**
 * @summary qualifier
 * @memberOf Qualifiers.TextAlignment
 */
function left(): string {
  return 'left';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.TextAlignment
 */
function right(): string {
  return 'right';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.TextAlignment
 */
function center(): string {
  return 'center';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.TextAlignment
 */
function start(): string {
  return 'start';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.TextAlignment
 */
function end(): string {
  return 'end';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.TextAlignment
 */
function justify(): string {
  return 'justify';
}

const TextAlignment = {left, right, center, end, justify, start};

export {
  TextAlignment,
  left,
  right,
  center,
  end,
  justify,
  start
};
