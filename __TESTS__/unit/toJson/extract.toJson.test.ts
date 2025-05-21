import { Transformation } from "../../../src";
import { Effect } from "../../../src/actions/effect";

describe("Extract.toJson()", () => {
  it("produces correct action JSON for extract (including preserveAlpha, invert, detectMultiple, and mode)", () => {
    const transformation = new Transformation()
      .addAction(Effect.extract('palms'))
      .addAction(Effect.extract(['man']).mode('mask'))
      .addAction(Effect.extract('woman').invert())
      .addAction(Effect.extract('woman').invert(true))
      .addAction(Effect.extract(['cats', 'dogs']).detectMultiple(true))
      .addAction(Effect.extract(['dogs', 'cats']).mode('content').detectMultiple(true).invert(false))
      .addAction(Effect.extract('sky').preserveAlpha())
      .addAction(Effect.extract('sky').invert(true).preserveAlpha(true));

    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'extract',
          prompts: ['palms'],
        },
        {
          actionType: 'extract',
          prompts: ['man'],
          mode: 'mask',
        },
        {
          actionType: 'extract',
          prompts: ['woman'],
          invert: true,
        },
        {
          actionType: 'extract',
          prompts: ['woman'],
          invert: true,
        },
        {
          actionType: 'extract',
          prompts: ['cats', 'dogs'],
          detectMultiple: true,
        },
        {
          actionType: 'extract',
          prompts: ['dogs', 'cats'],
          mode: 'content',
          detectMultiple: true
        },
        {
          actionType: 'extract',
          prompts: ['sky'],
          preserveAlpha: true
        },
        {
          actionType: 'extract',
          prompts: ['sky'],
          invert: true,
          preserveAlpha: true
        }
      ]
    });
  });
}); 