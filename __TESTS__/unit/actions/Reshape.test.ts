import { image } from "../../../src/qualifiers/source";
import { scale } from "../../../src/actions/resize";
import { Reshape } from "../../../src/actions/reshape";
import { Position } from "../../../src/qualifiers/position";
import { Gravity } from "../../../src/qualifiers/gravity";
import { Compass } from "../../../src/qualifiers/compass";
import { Transformation } from "../../../src";

describe("Tests for Transformation Action -- Cutter", () => {
  it("Creates a reshape.cutByImage (cutter)overlay", () => {
    const tx = new Transformation()
      .reshape(Reshape.cutByImage(image("sourceImage").transformation(new Transformation().resize(scale().width(100)))))
      .toString();

    expect(tx).toContain("l_sourceImage/c_scale,w_100/fl_cutter,fl_layer_apply");
  });

  it("Creates a reshape.cutByImage (cutter)overlay with position g_center", () => {
    const tx = new Transformation()
      .reshape(
        Reshape.cutByImage(image("sourceImage")).position(new Position().gravity(Gravity.compass(Compass.center())))
      )
      .toString();

    expect(tx).toContain("l_sourceImage/fl_cutter,fl_layer_apply,g_center");
  });

  it("Creates a reshape.cutByImage (cutter)overlay with position g_north", () => {
    const tx = new Transformation()
      .reshape(
        Reshape.cutByImage(image("sourceImage")).position(new Position().gravity(Gravity.compass(Compass.north())))
      )
      .toString();

    expect(tx).toContain("l_sourceImage/fl_cutter,fl_layer_apply,g_north");
  });

  it("Distorts an image with an arc", () => {
    const tx = new Transformation().reshape(Reshape.distortArc(200)).toString();

    expect(tx).toBe("e_distort:arc:200");
  });

  it("Shears an image with constructor arguments", () => {
    const tx = new Transformation().reshape(Reshape.shear(100, 200)).toString();

    expect(tx).toBe("e_shear:100:200");
  });

  it("Distorts an image with coordinates", () => {
    const tx = new Transformation().reshape(Reshape.distort([1, 2, 3, 4, 5, 6, 7, 8])).toString();

    expect(tx).toBe("e_distort:1:2:3:4:5:6:7:8");
  });

  it("Trims an image", () => {
    const tx = new Transformation().reshape(Reshape.trim().colorOverride("blue").colorSimilarity(15)).toString();

    expect(tx).toBe("e_trim:15:blue");
  });
});
