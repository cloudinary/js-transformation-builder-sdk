import { fromJson } from "../../../src/internal/fromJson";

describe("roundCorners.fromJson", () => {
  it("should generate a url with round corners from array of models", function () {
    const transformation = fromJson({
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
    expect(transformation.toString()).toStrictEqual("r_10/r_10:20:30:40/r_max");
  });
});
