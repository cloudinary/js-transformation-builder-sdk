import { CustomRegion } from "./region/CustomRegion.js";
import { NamedRegion } from "./region/NamedRegion.js";
import { RectangleRegion } from "./region/RectangleRegion.js";

/**
 * @summary qualifier
 * @memberOf Qualifiers.Region
 * @return {Qualifiers.Region.CustomRegion}
 */
function custom(): CustomRegion {
  return new CustomRegion();
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.Region
 * @return {Qualifiers.Region.NamedRegion}
 */
function faces(): NamedRegion {
  return new NamedRegion("faces");
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.Region
 * @return {Qualifiers.Region.NamedRegion}
 */
function ocr(): NamedRegion {
  return new NamedRegion("ocr_text");
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.Region
 * @return {Qualifiers.Region.RectangleRegion}
 */
function rectangle(x: number, y: number, width: number, height: number) {
  return new RectangleRegion(x, y, width, height);
}

/**
 * @description Contains functions to select the type of region, used with Effect.blur() and Effect.pixelate().
 * <b>See also</b>: {@link Actions.Effect.BlurAction|Blur Action}
 * <b>See also</b>: {@link Actions.Effect.Pixelate|Blur Action}
 * <b>See also</b>: {@link Actions.Effect|Possible effects}
 * @namespace Region
 * @memberOf Qualifiers
 */
const Region = { ocr, faces, custom, rectangle };
export { Region, ocr, faces, custom, rectangle };
