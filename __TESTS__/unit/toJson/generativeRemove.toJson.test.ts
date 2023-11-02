import { Transformation } from "../../../src";
import { Effect } from "../../../src/actions/effect";
import { GenerativeRemove } from "../../../src/actions/effect/GenerativeRemove";
import { Region } from "../../../src/qualifiers/region";

describe("GenerativeRemove.toJson()", () => {
  it("produces correct action JSON", () => {
    const testCases: Array<[GenerativeRemove, unknown]> = [
      [Effect.generativeRemove().prompt("dog"), { actionType: "generativeRemove", prompts: ["dog"] }],
      [
        Effect.generativeRemove().prompt("dog").detectMultiple(),
        {
          actionType: "generativeRemove",
          prompts: ["dog"],
          detectMultiple: true,
        },
      ],
      [
        Effect.generativeRemove().prompt("dog").removeShadow(),
        {
          actionType: "generativeRemove",
          prompts: ["dog"],
          removeShadow: true,
        },
      ],
      [
        Effect.generativeRemove().prompt("dog").detectMultiple().removeShadow(),
        {
          actionType: "generativeRemove",
          prompts: ["dog"],
          detectMultiple: true,
          removeShadow: true,
        },
      ],
      [Effect.generativeRemove().prompt("dog", "cat"), { actionType: "generativeRemove", prompts: ["dog", "cat"] }],
      [
        Effect.generativeRemove().region(Region.rectangle(50, 60, 600, 400)),
        {
          actionType: "generativeRemove",
          regions: [{ x: 50, y: 60, width: 600, height: 400 }],
        },
      ],
      [
        Effect.generativeRemove().region(Region.rectangle(10, 20, 600, 400), Region.rectangle(300, 400, 50, 60)),
        {
          actionType: "generativeRemove",
          regions: [
            { x: 10, y: 20, width: 600, height: 400 },
            { x: 300, y: 400, width: 50, height: 60 },
          ],
        },
      ],
    ];

    for (const [action, expectedProps] of testCases) {
      const transformation = new Transformation().addAction(action);

      expect(transformation.toJson()).toStrictEqual({
        actions: [expectedProps],
      });
    }
  });
});
