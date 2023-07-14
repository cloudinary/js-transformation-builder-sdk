import { Transformation } from "../../../../src";
import { imaggaCrop } from "../../../../src/actions/resize";

describe("Tests for Transformation Action -- Resize.imaggaCrop", () => {
  it("Ensures it generates the right transformation", () => {
    const tx = new Transformation().resize(imaggaCrop(250, 250)).toString();
    expect(tx).toContain("c_imagga_crop,h_250,w_250");
  });

  it("Ensures it generates the right transformation using qualifiers", () => {
    const tx = new Transformation().resize(imaggaCrop().width(250).height(250).aspectRatio(1.2).relative()).toString();
    expect(tx).toContain("ar_1.2,c_imagga_crop,fl_relative,h_250,w_250");
  });
});
