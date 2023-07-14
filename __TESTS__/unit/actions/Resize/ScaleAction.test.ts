import { Transformation } from "../../../../src";
import { scale } from "../../../../src/actions/resize";

describe("Tests for Transformation Action -- Resize.scale", () => {
  it("Ensures it generates the right transformation", () => {
    const tx = new Transformation().resize(scale(250, 250)).toString();
    expect(tx).toContain("c_scale,h_250,w_250");
  });

  it("Ensures it generates the right transformation using qualifiers", () => {
    const tx = new Transformation()
      .resize(scale().width(250).height(250).liquidRescaling().aspectRatio(1.2))
      .toString();
    expect(tx).toContain("ar_1.2,c_scale,g_liquid,h_250,w_250");
  });
});
