import { Transformation } from "../../../src";
import { RoundCorners } from "../../../src/actions";

describe("RoundCorners toJson()", () => {
  it("roundCorners", () => {
    const transformation = new Transformation()
      .addAction(RoundCorners.byRadius(10))
      .addAction(RoundCorners.byRadius(10, 20, 30, 40))
      .addAction(RoundCorners.max());

    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: "roundCorners",
          radius: [10],
        },
        {
          actionType: "roundCorners",
          radius: [10, 20, 30, 40],
        },
        {
          actionType: "roundCorners",
          radius: "max",
        },
      ],
    });
  });
});
