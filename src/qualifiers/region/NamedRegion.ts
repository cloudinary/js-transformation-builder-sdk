import { Action } from "../../internal/Action.js";

type RegionType = "faces" | "ocr_text" | "named" | "rectangle";

/**
 * @memberOf Qualifiers.Region
 */
class NamedRegion extends Action {
  public regionType: RegionType;

  constructor(type: RegionType) {
    super();
    this.regionType = type;
  }
}

export { NamedRegion, RegionType };
