import {fromJson} from "../../../src/internal/fromJson";

describe('extract.fromJson', () => {
  it('should generate the correct transforamtion string with e_extract', function () {
    const transformation = fromJson({actions:[
      { actionType: 'extract', 'prompts': 'blue sky' },
      { actionType: 'extract', 'prompts': ['blue sky', 'yellow sun'], detectMultiple: true },
      { actionType: 'extract', 'prompts': ['green grass'], mode: 'mask', invert: true },
      { actionType: 'extract', 'prompts': ['yellow sun', 'green grass'], mode: 'content' },
      { actionType: 'extract', 'prompts': ['blue sky'], preserveAlpha: true },
    ]});

    expect(transformation.toString().split('/')).toStrictEqual([
      'e_extract:prompt_blue sky',
      'e_extract:prompt_(blue sky;yellow sun);multiple_true',
      'e_extract:prompt_green grass;mode_mask;invert_true',
      'e_extract:prompt_(yellow sun;green grass);mode_content',
      'e_extract:prompt_blue sky;preserve-alpha_true',
    ]);
  });
}); 