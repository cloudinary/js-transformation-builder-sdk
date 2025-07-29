import {Transformation} from "../../../src";
import {Adjust} from "../../../src/actions/adjust";

describe('Adjust toJson()', () => {
  it('adjust.improve', () => {
    const transformation = new Transformation()
      .addAction(Adjust.improve().mode('outdoor').blend(50));
    expect(transformation.toJson()).toStrictEqual({actions:[
      {
        actionType: 'improve',
        mode: 'outdoor',
        blend: 50
      }
    ]});
  });

  it('adjust.unsharpMask', () => {
    const transformation = new Transformation()
      .addAction(Adjust.unsharpMask().strength(10));
    expect(transformation.toJson()).toStrictEqual({actions:[
      {
        actionType: 'unsharpMask',
        strength: 10
      }
    ]});
  });

  it('adjust.saturation', () => {
    const transformation = new Transformation()
      .addAction(Adjust.saturation().level(50));
    expect(transformation.toJson()).toStrictEqual({actions:[
      {
        actionType: 'saturation',
        level: 50
      }
    ]});
  });

  it('adjust.contrast', () => {
    const transformation = new Transformation()
      .addAction(Adjust.contrast().level(50));
    expect(transformation.toJson()).toStrictEqual({actions:[
      {
        actionType: 'contrast',
        level: 50
      }
    ]});
  });

  it('adjust.contrast with functionType', () => {
    const transformation = new Transformation()
      .addAction(Adjust.contrast().level(150).functionType('linear'));
    expect(transformation.toJson()).toStrictEqual({actions:[
      {
        actionType: 'contrast',
        level: 150,
        functionType: 'linear'
      }
    ]});
  });

  it('adjust.brightness', () => {
    const transformation = new Transformation()
      .addAction(Adjust.brightness().level(40));
    expect(transformation.toJson()).toStrictEqual({actions:[
      {
        actionType: 'brightness',
        level: 40
      }
    ]});
  });

  it('adjust.vibrance', () => {
    const transformation = new Transformation()
      .addAction(Adjust.vibrance().strength(50));
    expect(transformation.toJson()).toStrictEqual({actions:[
      {
        actionType: 'vibrance',
        strength: 50
      }
    ]});
  });

  it('adjust.gamma', () => {
    const transformation = new Transformation()
      .addAction(Adjust.gamma().level(40));
    expect(transformation.toJson()).toStrictEqual({actions:[
      {
        actionType: 'gamma',
        level: 40
      }
    ]});
  });

  it('adjust.opacity', () => {
    const transformation = new Transformation()
      .addAction(Adjust.opacity(45));
    expect(transformation.toJson()).toStrictEqual({actions:[
      {
        actionType: 'opacity',
        level: 45
      }
    ]});
  });

  it('adjust.sharpen', () => {
    const transformation = new Transformation()
      .addAction(Adjust.sharpen(45));
    expect(transformation.toJson()).toStrictEqual({actions:[
      {
        actionType: 'sharpen',
        level: 45
      }
    ]});
  });
});
