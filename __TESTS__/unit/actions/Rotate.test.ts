import * as Rotate from "../../../src/actions/rotate";
import * as RotationMode from "../../../src/qualifiers/rotationMode";
import { Transformation } from "../../../src";

describe("Tests for Transformation Action -- Rotate", () => {
  it("Creates a Transformation with Rotate", () => {
    const tx = new Transformation()
      .rotate(Rotate.mode(RotationMode.verticalFlip()))
      .rotate(Rotate.mode(RotationMode.horizontalFlip()))
      .rotate(Rotate.mode(RotationMode.autoLeft()))
      .rotate(Rotate.mode(RotationMode.autoRight()))
      .rotate(Rotate.mode(RotationMode.ignore()))
      .rotate(Rotate.byAngle(40))
      .toString();

    expect(tx).toContain("a_vflip/a_hflip/a_auto_left/a_auto_right/a_ignore/a_40");
  });

  it("Can use shortened Rotate notation", () => {
    const tx = new Transformation().rotate(Rotate.mode("hflip")).rotate(Rotate.byAngle(40)).toString();

    expect(tx).toContain("a_hflip/a_40");
  });
});
