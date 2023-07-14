import { Transformation } from "../../../src";
import { Effect } from "../../../src/actions/effect";
import { GenerativeRemove } from "../../../src/actions/effect/GenerativeRemove";

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
      [Effect.generativeRemove().prompts(["dog", "cat"]), { actionType: "generativeRemove", prompts: ["dog", "cat"] }],
      [
        Effect.generativeRemove().region({
          x: 100,
          y: 200,
          width: 600,
          height: 400,
        }),
        {
          actionType: "generativeRemove",
          regions: [{ x: 100, y: 200, width: 600, height: 400 }],
        },
      ],
      [
        Effect.generativeRemove().regions([
          { x: 100, y: 200, width: 600, height: 400 },
          { x: 300, y: 400, width: 50, height: 60 },
        ]),
        {
          actionType: "generativeRemove",
          regions: [
            { x: 100, y: 200, width: 600, height: 400 },
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
