import { AspectRatio } from "../../../../src/qualifiers/aspectRatio";
import { crop } from "../../../../src/actions/resize";
import { Transformation } from "../../../../src";

describe("Tests for AspectRatio values Action -- Resize.crop", () => {
  it("Generates transformation using AspectRatio options", () => {
    const tx = new Transformation()
      .resize(crop().aspectRatio(AspectRatio.ar1X1()))
      .resize(crop().aspectRatio(AspectRatio.ar16X9()))
      .resize(crop().aspectRatio(AspectRatio.ar4X3()))
      .resize(crop().aspectRatio(AspectRatio.ar3X2()))
      .resize(crop().aspectRatio(AspectRatio.ar3X1()))
      .resize(crop().aspectRatio(AspectRatio.ar5X4()))
      .resize(crop().aspectRatio(AspectRatio.ignoreInitialAspectRatio()))
      .toString();

    expect(tx).toContain(
      "ar_1:1,c_crop/ar_16:9,c_crop/ar_4:3,c_crop/ar_3:2,c_crop/ar_3:1,c_crop/ar_5:4,c_crop/c_crop,fl_ignore_aspect_ratio"
    );
  });
  it("Can use shortened aspectRatio notation", () => {
    const tx = new Transformation().resize(crop().aspectRatio("3:2")).toString();

    expect(tx).toContain("ar_3:2,c_crop");
  });
});
