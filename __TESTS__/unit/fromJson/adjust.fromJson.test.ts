import {fromJson} from "../../../src/internal/fromJson";

describe('adjust.fromJson', () => {
  it('should generate a url with adjust actions from array of models', function () {
    const transformation = fromJson({actions:[
      { actionType: 'improve', mode: 'outdoor', blend: 30 },
      { actionType: 'unsharpMask', strength: 50 },
      { actionType: 'sharpen', strength: 50 },
      { actionType: 'saturation', level: 40 },
      { actionType: 'contrast', level: 40 },
      { actionType: 'contrast', level: 150, functionType: 'linear' },
      { actionType: 'brightness', level: 30 },
      { actionType: 'vibrance', strength: 35 },
      { actionType: 'gamma', level: 30 },
      { actionType: 'opacity', level: 30 }
    ]});

    expect(transformation.toString()).toStrictEqual([
      'e_improve:outdoor:30',
      'e_unsharp_mask:50',
      'e_sharpen:50',
      'e_saturation:40',
      'e_contrast:40',
      'e_contrast:level_150;type_linear',
      'e_brightness:30',
      'e_vibrance:35',
      'e_gamma:30',
      'o_30'
    ].join('/'));
  });
});
