import {Transformation} from "../../../src";
import {ForegroundObject} from "../../../src/qualifiers/foregroundObject";
import {Effect} from "../../../src/actions/effect";

describe('BackgroundRemoval toJson()', () => {
  it('with fineEdges and hints', () => {
    const transformation = new Transformation()
      .addAction(Effect.backgroundRemoval().fineEdges(true).hints([ForegroundObject.CAT, ForegroundObject.DOG]));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'backgroundRemoval',
          fineEdges: true,
          hints: [ForegroundObject.CAT, ForegroundObject.DOG]
        }
      ]
    });
  });
});
