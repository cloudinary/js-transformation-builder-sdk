import { Transformation } from "../../../../src";
import { limitFill } from "../../../../src/actions/resize";
import { Gravity } from "../../../../src/qualifiers/gravity";

describe("Tests for Transformation Action -- Resize.limitFill", () => {
  it("Ensures it generates the right transformation", () => {
    const tx = new Transformation().resize(limitFill(250, 250)).toString();
    expect(tx).toContain("c_lfill,h_250,w_250");
  });

  it("Ensures it generates the right transformation using qualifiers", () => {
    const tx = new Transformation()
      .resize(limitFill().width(250).height(250).gravity(Gravity.autoGravity()).aspectRatio(1.2))
      .toString();
    expect(tx).toContain("ar_1.2,c_lfill,g_auto,h_250,w_250");
  });

  it("Ensures it generates the right transformation using xyGravity and x,y", () => {
    const tx = new Transformation()
      .resize(limitFill().width(250).height(250).x(100).y(100).gravity(Gravity.xyCenter()).aspectRatio(1.2))
      .toString();
    expect(tx).toContain("ar_1.2,c_lfill,g_xy_center,h_250,w_250,x_100,y_100");
  });
});
