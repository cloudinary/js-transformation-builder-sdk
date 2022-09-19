import {Transformation} from "../../../src";
import {Rotate} from "../../../src/actions/rotate";

describe('Rotate toJson()', () => {
  it('rotateByAngle', () => {
    const transformation = new Transformation()
      .addAction(Rotate.byAngle(7));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'rotateByAngle',
          angle: 7
        }
      ]
    });
  });
});
