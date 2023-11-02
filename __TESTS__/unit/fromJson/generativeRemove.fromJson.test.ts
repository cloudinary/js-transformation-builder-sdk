import { fromJson } from "../../../src/internal/fromJson";

describe("generativeRemove.fromJson", () => {
  it("should generate a url with e_gen_remove", function () {
    const transformation = fromJson({
      actions: [
        { actionType: "generativeRemove", prompts: ["dog"] },
        { actionType: "generativeRemove", prompts: ["dog", "cat"] },
        {
          actionType: "generativeRemove",
          prompts: ["dog"],
          detectMultiple: true,
        },
        {
          actionType: "generativeRemove",
          prompts: ["dog"],
          removeShadow: true,
        },
        {
          actionType: "generativeRemove",
          prompts: ["dog"],
          detectMultiple: true,
          removeShadow: true,
        },
        {
          actionType: "generativeRemove",
          regions: [{ x: 10, y: 10, width: 100, height: 100 }],
        },
        {
          actionType: "generativeRemove",
          regions: [
            { x: 10, y: 10, width: 100, height: 100 },
            { x: 500, y: 500, width: 200, height: 200 },
          ],
        },
      ],
    });

    expect(transformation.toString().split("/")).toStrictEqual([
      "e_gen_remove:prompt_dog",
      "e_gen_remove:prompt_(dog;cat)",
      "e_gen_remove:prompt_dog;multiple_true",
      "e_gen_remove:prompt_dog;remove-shadow_true",
      "e_gen_remove:prompt_dog;multiple_true;remove-shadow_true",
      "e_gen_remove:region_(x_10;y_10;w_100;h_100)",
      "e_gen_remove:region_((x_10;y_10;w_100;h_100);(x_500;y_500;w_200;h_200))",
    ]);
  });
});
