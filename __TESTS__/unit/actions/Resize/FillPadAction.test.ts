import { Transformation } from "../../../../src";
import { Gravity } from "../../../../src/qualifiers/gravity";
import { Background } from "../../../../src/qualifiers/background";
import { fillPad } from "../../../../src/actions/resize";

describe("Tests for Transformation Action -- Resize.fillPad", () => {
  it("Ensures it generates the right transformation", () => {
    const tx = new Transformation().resize(fillPad(250, 250)).toString();
    expect(tx).toContain("c_fill_pad,h_250,w_250");
  });

  it("Ensures it generates the right transformation using qualifiers", () => {
    const tx = new Transformation()
      .resize(
        fillPad()
          .width(250)
          .height(250)
          .offsetX(10)
          .offsetY(10)
          .gravity(Gravity.autoGravity())
          .aspectRatio(1.2)
          .background(Background.color("red"))
      )
      .toString();
    expect(tx).toContain("ar_1.2,b_red,c_fill_pad,g_auto,h_250,w_250,x_10,y_10");
  });
});
