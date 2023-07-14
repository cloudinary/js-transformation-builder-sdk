import { fromJson } from "../../../src/internal/fromJson";
import { ForegroundObject } from "../../../src/qualifiers/foregroundObject";

describe("backgroundRemoval.fromJson", () => {
  it("should generate a url with backgroundRemoval", function () {
    const transformation = fromJson({
      actions: [
        { actionType: "backgroundRemoval" },
        { actionType: "backgroundRemoval", fineEdges: true },
        { actionType: "backgroundRemoval", fineEdges: false },
        { actionType: "backgroundRemoval", hints: [] },
        {
          actionType: "backgroundRemoval",
          hints: [ForegroundObject.DOG, ForegroundObject.CAT],
        },
        {
          actionType: "backgroundRemoval",
          fineEdges: true,
          hints: [ForegroundObject.DOG, ForegroundObject.CAT],
        },
      ],
    });

    expect(transformation.toString()).toStrictEqual(
      [
        "e_background_removal",
        "e_background_removal:fineedges_y",
        "e_background_removal:fineedges_n",
        "e_background_removal",
        "e_background_removal:hints_(dog;cat)",
        "e_background_removal:fineedges_y:hints_(dog;cat)",
      ].join("/")
    );
  });
});
