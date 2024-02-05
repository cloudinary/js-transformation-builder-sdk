import {Transformation} from "../../../src";
import {BackgroundColor} from "../../../src/actions/background/actions/BackgroundColor.js";

describe('BackgroundColor toJson()', () => {
  it('backgroundColor', () => {
    const transformation = new Transformation()
      .addAction(new BackgroundColor('white'))
      .addAction(new BackgroundColor('#ffffff'));
    expect(transformation.toJson()).toStrictEqual({actions: [
      { actionType: 'backgroundColor', color: 'white' },
      { actionType: 'backgroundColor', color: '#ffffff' }
    ]});
  });
});
