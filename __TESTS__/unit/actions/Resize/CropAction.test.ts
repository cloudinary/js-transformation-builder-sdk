import * as Gravity from "../../../../src/qualifiers/gravity";
import { crop } from "../../../../src/actions/resize";
import { face } from "../../../../src/qualifiers/focusOn";
import { Transformation } from "../../../../src";

describe("Tests for Transformation Action -- Resize.crop", () => {
  it("Ensures it generates the right transformation", () => {
    const tx = new Transformation().resize(crop(250, 250)).toString();
    expect(tx).toContain("c_crop,h_250,w_250");
  });

  it("Ensures it generates the right transformation using qualifiers", () => {
    const tx = new Transformation()
      .resize(crop().width(250).height(250).x(10).y(10).gravity(Gravity.autoGravity()).aspectRatio(1.2).relative())
      .toString();
    expect(tx).toContain("ar_1.2,c_crop,fl_relative,g_auto,h_250,w_250,x_10,y_10");
  });

  it("Ensures it generates the right transformation using qualifiers (With region relative", () => {
    const tx = new Transformation().resize(crop().regionRelative()).toString();
    expect(tx).toContain("fl_region_relative");
  });

  it("Uses xyCenter as a gravity type", () => {
    const tx = new Transformation().resize(crop().gravity(Gravity.xyCenter()).x(100).y(100)).toString();
    expect(tx).toContain("g_xy_center,x_100,y_100");
  });

  it("Uses zoom on crop", () => {
    const tx = new Transformation().resize(crop().gravity(Gravity.focusOn(face())).zoom(1.3)).toString();
    expect(tx).toContain("c_crop,g_face,z_1.3");
  });
});
