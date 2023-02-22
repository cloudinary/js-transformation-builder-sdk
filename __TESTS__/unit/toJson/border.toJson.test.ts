import {Transformation} from "../../../src";
import {RoundCorners} from "../../../src/actions";
import {Border} from "../../../src/actions";

describe('Border toJson()', () => {
  it('border', () => {
    const transformation = new Transformation()
      .addAction(Border.solid(5, 'black'))
      .addAction(Border.roundCorners(RoundCorners.max()))
      .addAction(Border.roundCorners(RoundCorners.byRadius(10, 20, 30)))
      .addAction(Border.solid(5, 'black').roundCorners(RoundCorners.max()))
      .addAction(Border.roundCorners(RoundCorners.max()).solid(5, 'black'));

    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'border',
          width: 5,
          color: 'black',
        },
        {
          actionType: 'border',
          width: 0,
          color: 'transparent',
          radius: 'max'
        },
        {
          actionType: 'border',
          width: 0,
          color: 'transparent',
          radius: [10, 20, 30]
        },
        {
          actionType: 'border',
          width: 5,
          color: 'black',
          radius: 'max'
        },
        {
          actionType: 'border',
          width: 5,
          color: 'black',
          radius: 'max'
        },
      ]
    });
  });
});
