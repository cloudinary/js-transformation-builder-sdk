import {Transformation} from "../../../src";
import {BackgroundColor} from "../../../src/actions/background/actions/BackgroundColor.js";

describe('BackgroundColor toJson()', () => {
  it('new BackgroundColor', () => {
    const transformation = new Transformation()
      .addAction(new BackgroundColor('white'))
      .addAction(new BackgroundColor('#ffffff'));
    expect(transformation.toJson()).toStrictEqual({actions: [
      { actionType: 'backgroundColor', color: 'white' },
      { actionType: 'backgroundColor', color: '#ffffff' }
    ]});
  });
  it('.backgroundColor()', () => {
    const transformation = new Transformation()
      .backgroundColor('white')
      .backgroundColor('#ffffff');
    expect(transformation.toJson()).toStrictEqual({actions: [
      { actionType: 'backgroundColor', color: 'white' },
      { actionType: 'backgroundColor', color: '#ffffff' }
    ]});
  })
});
