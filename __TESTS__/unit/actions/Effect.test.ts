import {image} from "../../../src/qualifiers/source";
import {rodMonochromacy} from "../../../src/qualifiers/simulateColorBlind";
import {Color} from "../../../src/qualifiers/color";
import {scale} from "../../../src/actions/resize";
import {GradientFade} from "../../../src/qualifiers/GradientFade";
import {cartoonify, Effect} from "../../../src/actions/effect";
import {OutlineMode} from "../../../src/qualifiers/outlineMode";
import {halftone4x4Orthogonal} from "../../../src/qualifiers/dither";
import {ArtisticFilter} from "../../../src/qualifiers/artisticFilter";
import {Transformation} from "../../../src";
import {ShakeStrength} from "../../../src/qualifiers/shakeStrength";


describe('Tests for Transformation Action -- Effect', () => {
  it('Creates a Transformation with Simple and Leveled effects', () => {
    const tx = new Transformation()
      .effect(Effect.advancedRedEye())
      .effect(Effect.accelerate())
      .effect(Effect.accelerate(100))
      .effect(Effect.accelerate().rate(5))
      .effect(Effect.boomerang())
      .effect(Effect.blackwhite())
      .effect(Effect.blackwhite(10))
      .effect(Effect.blackwhite().threshold(20))
      .effect(Effect.fadeIn(100))
      .effect(Effect.fadeIn().duration(5))
      .effect(Effect.fadeOut(100))
      .effect(Effect.fadeOut().duration(5))
      .effect(Effect.grayscale())
      .effect(Effect.loop())
      .effect(Effect.loop(100))
      .effect(Effect.loop().additionalIterations(5))
      .effect(Effect.makeTransparent())
      .effect(Effect.makeTransparent(100))
      .effect(Effect.makeTransparent().tolerance(5))
      .effect(Effect.makeTransparent().tolerance(5).colorToReplace('red'))
      .effect(Effect.noise())
      .effect(Effect.noise(100))
      .effect(Effect.noise().level(5))
      .effect(Effect.negate())
      .effect(Effect.reverse())
      .effect(Effect.redEye())
      .effect(Effect.sepia())
      .effect(Effect.sepia(100))
      .effect(Effect.sepia().level(5))
      .effect(Effect.vignette())
      .effect(Effect.vignette(100))
      .effect(Effect.vignette().strength(5))
      .effect(Effect.deshake())
      .effect(Effect.deshake(10))
      .effect(Effect.deshake().shakeStrength(ShakeStrength.pixels16()))
      .effect(Effect.generativeRestore())
      .effect(Effect.upscale())
      .effect(Effect.enhance())
      .toString();

    const expectedToContain = [
      'e_adv_redeye',
      'e_accelerate',
      'e_accelerate:100',
      'e_accelerate:5',
      'e_boomerang',
      'e_blackwhite',
      'e_blackwhite:10',
      'e_blackwhite:20',
      'e_fade:100',
      'e_fade:5',
      'e_fade:-100',
      'e_fade:-5',
      'e_grayscale',
      'e_loop',
      'e_loop:100',
      'e_loop:5',
      'e_make_transparent',
      'e_make_transparent:100',
      'e_make_transparent:5',
      'co_red,e_make_transparent:5',
      'e_noise',
      'e_noise:100',
      'e_noise:5',
      'e_negate',
      'e_reverse',
      'e_redeye',
      'e_sepia',
      'e_sepia:100',
      'e_sepia:5',
      'e_vignette',
      'e_vignette:100',
      'e_vignette:5',
      'e_deshake',
      'e_deshake:10',
      'e_deshake:16',
      'e_gen_restore',
      'e_upscale',
      'e_enhance'
    ].join('/');

    expect(tx).toBe(`${expectedToContain}`);
  });

  it('Creates a Transformation with effect shadow:50', () => {
    const tx = new Transformation()
      .effect(Effect.shadow())
      .effect(Effect.shadow(50))
      .effect(Effect.shadow().strength(60).offsetX(1).offsetY(2).color('red'))
      .toString();

    expect(tx).toContain('e_shadow/e_shadow:50/co_red,e_shadow:60,x_1,y_2');
  });

  it('Creates a Transformation with effect colorize', () => {
    const tx = new Transformation()
      .effect(Effect.colorize(10).color('red'))
      .toString();

    expect(tx).toBe('co_red,e_colorize:10');
  });

  it('Creates a Transformation with effect colorize:level', () => {
    const tx = new Transformation()
      .effect(Effect.colorize(50))
      .toString();

    expect(tx).toBe('e_colorize:50');
  });

  it('Creates a Transformation with effect colorize:level', () => {
    const tx = new Transformation()
      .effect(Effect.colorize().level(10))
      .toString();

    expect(tx).toBe('e_colorize:10');
  });

  it('Creates a Transformation with effect oilPaint', () => {
    const tx = new Transformation()
      .effect(Effect.oilPaint().strength(10))
      .toString();

    expect(tx).toBe('e_oil_paint:10');
  });

  it('Creates a Transformation with effect oilPaint:level', () => {
    const tx = new Transformation()
      .effect(Effect.oilPaint(50))
      .toString();

    expect(tx).toBe('e_oil_paint:50');
  });

  it('Creates a Transformation with effect artisticFilter', () => {
    const tx = new Transformation()
      .effect(Effect.artisticFilter(ArtisticFilter.peacock()))
      .toString();

    expect(tx).toBe('e_art:peacock');
  });

  it('Can use shortened artisticFilter notation', () => {
    const tx = new Transformation()
      .effect(Effect.artisticFilter("al_dente"))
      .toString();

    expect(tx).toBe('e_art:al_dente');
  });

  it('Creates a Transformation with effect cartoonify:50', () => {
    const tx = new Transformation()
      .effect(cartoonify().lineStrength(50).blackwhite())
      .toString();

    const withConstructor = cartoonify(50).blackwhite().toString();
    const withBuilder = cartoonify().lineStrength(50).blackwhite().toString();

    expect(withBuilder).toBe(withConstructor);
    expect(tx).toBe('e_cartoonify:50:bw');
  });

  it('Creates a Transformation with effect style_transfer', () => {
    const tx = new Transformation()
      .effect(Effect.styleTransfer(image('woman')))
      .toString();

    expect(tx).toContain('l_woman/e_style_transfer,fl_layer_apply');
  });

  it('Creates a Transformation with effect style_transfer:strength', () => {
    const tx = new Transformation()
      .effect(Effect.styleTransfer(image('woman')).strength(15))
      .toString();

    expect(tx).toContain('l_woman/e_style_transfer:15,fl_layer_apply');
  });

  it('Creates a Transformation with effect style_transfer:preserve_color:strength', () => {
    const tx = new Transformation()
      .effect(Effect.styleTransfer(image('woman'))
        .strength(15)
        .preserveColor()
      )
      .toString();

    expect(tx).toContain('l_woman/e_style_transfer:preserve_color:15,fl_layer_apply');
  });

  it('Creates a Transformation with effect style_transfer:preserve_color:strength with a transformation', () => {
    const tx = new Transformation()
      .effect(Effect.styleTransfer(
        image('woman')
          .transformation(
            new Transformation().resize(scale(100, 100))
          ))
        .strength(15)
        .preserveColor()
      )
      .toString();

    expect(tx).toContain('l_woman/c_scale,h_100,w_100/e_style_transfer:preserve_color:15,fl_layer_apply');
  });

  it('Tests for Effect.dither', () => {
    const tx = new Transformation()
      .effect(Effect.dither())
      .effect(Effect.dither(halftone4x4Orthogonal()))
      .effect(Effect.dither().type(halftone4x4Orthogonal()))
      .toString();

    expect(tx).toContain('e_ordered_dither/e_ordered_dither:9/e_ordered_dither:9');
  });

  it('Test Vectorize', () => {

    expect(Effect.vectorize()
      .toString()
    ).toEqual('e_vectorize');

    expect(Effect.vectorize()

      .cornersLevel(1)
      .despeckleLevel(2)
      .detailsLevel(3)
      .paths(4)
      .numOfColors(5)
      .toString()
    ).toEqual('e_vectorize:colors:5:detail:3:despeckle:2:paths:4:corners:1');
  });

  it('Test gradientFade', () => {
    // e_gradient_fade:{type}:{strength},x_{x},y_{y}
    expect(Effect.gradientFade()
      .toString()
    ).toBe('e_gradient_fade');

    expect(Effect.gradientFade()
      .strength(5)
      .toString()
    ).toBe('e_gradient_fade:5');

    expect(Effect.gradientFade()
      .type(GradientFade.symmetricPad())
      .strength(5)
      .horizontalStartPoint(10)
      .verticalStartPoint(20)
      .toString()
    ).toBe('e_gradient_fade:symmetric_pad:5,x_10,y_20');
  });

  it('Test assistColorBlind', () => {
    expect(Effect.assistColorBlind()
      .toString()
    ).toBe('e_assist_colorblind');

    expect(Effect.assistColorBlind()
      .xray()
      .toString()
    ).toBe('e_assist_colorblind:xray');

    expect(Effect.assistColorBlind()
      .xray()
      .stripesStrength(10)
      .toString()
    ).toBe('e_assist_colorblind:10');

    expect(Effect.assistColorBlind()
      .stripesStrength(10)
      .xray()
      .toString()
    ).toBe('e_assist_colorblind:xray');
  });

  it('Test Effect.outline', () => {
    // co_{color},e_outline:{mode}:{width}:{blurLevel}
    expect(Effect.outline()
      .toString()
    ).toBe('e_outline');

    expect(Effect.outline()
      .mode(OutlineMode.fill())
      .width(10)
      .blurLevel(25)
      .color(Color.BLUE)
      .toString()
    ).toBe('co_blue,e_outline:fill:10:25');
  });

  it('Can use shortened Effect.outline notation', () => {
    expect(Effect.outline()
      .mode("fill")
      .width(10)
      .blurLevel(25)
      .color(Color.BLUE)
      .toString()
    ).toBe('co_blue,e_outline:fill:10:25');
  });

  it('Test simulateColorBlind', () => {
    expect(Effect.simulateColorBlind()
      .toString()
    ).toBe('e_simulate_colorblind');

    expect(Effect.simulateColorBlind()
      .condition(rodMonochromacy())
      .toString()
    ).toBe('e_simulate_colorblind:rod_monochromacy');
  });

  it('Can shorten simulateColorBlindType notation', () => {
    expect(Effect.simulateColorBlind()
      .condition("deuteranomaly")
      .toString()
    ).toBe('e_simulate_colorblind:deuteranomaly');
  });

  it('Test removeBackground', () => {
    expect(Effect.removeBackground().toString()).toBe('e_bgremoval');
    expect(Effect.removeBackground().screen().toString()).toBe('e_bgremoval:screen');
    expect(Effect.removeBackground().colorToRemove(Color.RED).toString()).toBe('e_bgremoval:red');
    expect(Effect.removeBackground().screen().colorToRemove(Color.RED).toString()).toBe('e_bgremoval:screen:red');
    expect(Effect.removeBackground().screen().colorToRemove('#fff').toString()).toBe('e_bgremoval:screen:fff');
  });

  it('Test generativeReplace', () => {
    expect(Effect.generativeReplace().toString()).toBe('e_gen_replace:from_undefined;to_undefined');
    expect(Effect.generativeReplace().from('prompt1').to('prompt2').toString()).toBe('e_gen_replace:from_prompt1;to_prompt2');
    expect(Effect.generativeReplace().from('prompt1').to('prompt2').preserveGeometry().toString()).toBe('e_gen_replace:from_prompt1;to_prompt2;preserve-geometry_true');
    expect(Effect.generativeReplace().from('prompt1').to('prompt2').preserveGeometry(true).toString()).toBe('e_gen_replace:from_prompt1;to_prompt2;preserve-geometry_true');
    expect(Effect.generativeReplace().from('prompt1').to('prompt2').preserveGeometry(false).toString()).toBe('e_gen_replace:from_prompt1;to_prompt2');
  });

  it('Test generativeRecolor', () => {
    expect(Effect.generativeRecolor('prompt1', 'red').toString()).toBe('e_gen_recolor:prompt_prompt1;to-color_red');
    expect(Effect.generativeRecolor('prompt1', '#fff').toString()).toBe('e_gen_recolor:prompt_prompt1;to-color_fff');
    expect(Effect.generativeRecolor('prompt1', 'red').multiple(true).toString()).toBe('e_gen_recolor:prompt_prompt1;to-color_red;multiple_true');
    expect(Effect.generativeRecolor('prompt1', 'red').multiple(false).toString()).toBe('e_gen_recolor:prompt_prompt1;to-color_red');
    expect(Effect.generativeRecolor('prompt1', 'red').detectMultiple(true).toString()).toBe('e_gen_recolor:prompt_prompt1;to-color_red;multiple_true');
    expect(Effect.generativeRecolor('prompt1', 'red').detectMultiple(false).toString()).toBe('e_gen_recolor:prompt_prompt1;to-color_red');
    expect(Effect.generativeRecolor(['prompt1', 'prompt2'], 'red').toString()).toBe('e_gen_recolor:prompt_(prompt1;prompt2);to-color_red');
    expect(Effect.generativeRecolor(['prompt1', 'prompt2'], 'red').detectMultiple(false).toString()).toBe('e_gen_recolor:prompt_(prompt1;prompt2);to-color_red');
  });

  it('Test theme effect', () => {
    expect(Effect.theme('red').toString()).toBe('e_theme:color_red');
    expect(Effect.theme('#fff').toString()).toBe('e_theme:color_fff');
    expect(Effect.theme('fff').toString()).toBe('e_theme:color_fff');
    expect(Effect.theme('red').photosensitivity(50).toString()).toBe('e_theme:color_red:photosensitivity_50');
  });
});
