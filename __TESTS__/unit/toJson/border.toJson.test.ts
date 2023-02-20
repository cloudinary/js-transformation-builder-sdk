import {Transformation} from "../../../src";
import {RoundCorners} from "../../../src/actions";
import {Border} from "../../../src/actions";

describe('RoundCorners toJson()', () => {
  it('roundCorners', () => {
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
          borderWidth: 5,
          borderColor: 'black',
          borderType: 'solid'
        },
        {
          actionType: 'border',
          borderWidth: 0,
          borderColor: 'transparent',
          borderType: 'solid',
          roundCorners: {
            actionType: 'roundCorners',
            radius: 'max'
          }
        },
        {
          actionType: 'border',
          borderWidth: 0,
          borderColor: 'transparent',
          borderType: 'solid',
          roundCorners: {
            actionType: 'roundCorners',
            radius: [10, 20, 30]
          }
        },
        {
          actionType: 'border',
          borderWidth: 5,
          borderColor: 'black',
          borderType: 'solid',
          roundCorners: {
            actionType: 'roundCorners',
            radius: 'max'
          }
        },
        {
          actionType: 'border',
          borderWidth: 5,
          borderColor: 'black',
          borderType: 'solid',
          roundCorners: {
            actionType: 'roundCorners',
            radius: 'max'
          }
        },
      ]
    });
  });
});
