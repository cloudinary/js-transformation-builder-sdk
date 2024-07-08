import {Transformation} from "../../../src";
import {Effect} from "../../../src/actions/effect";
import {halftone4x4Orthogonal} from "../../../src/qualifiers/dither";
import {rodMonochromacy} from "../../../src/qualifiers/simulateColorBlind";
import {Region} from "../../../src/qualifiers";


describe('Effect toJson()', () => {
  it('effect.sepia', () => {
    const transformation = new Transformation()
      .addAction(Effect.sepia());
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {actionType: 'sepia'}
      ]
    });
  });

  it('effect.boomerang', () => {
    const transformation = new Transformation()
      .addAction(Effect.boomerang());
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {actionType: 'boomerang'}
      ]
    });
  });

  it('effect.grayscale', () => {
    const transformation = new Transformation()
      .addAction(Effect.grayscale());
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {actionType: 'grayscale'}
      ]
    });
  });

  it('effect.advancedRedEye', () => {
    const transformation = new Transformation()
      .addAction(Effect.advancedRedEye());
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {actionType: 'advancedRedEye'}
      ]
    });
  });

  it('effect.negate', () => {
    const transformation = new Transformation()
      .addAction(Effect.negate());
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {actionType: 'negate'}
      ]
    });
  });

  it('effect.redEye', () => {
    const transformation = new Transformation()
      .addAction(Effect.redEye());
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {actionType: 'redEye'}
      ]
    });
  });

  it('effect.reverse', () => {
    const transformation = new Transformation()
      .addAction(Effect.reverse());
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {actionType: 'reverse'}
      ]
    });
  });

  it('effect.transition', () => {
    const transformation = new Transformation()
      .addAction(Effect.transition());
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {actionType: 'transition'}
      ]
    });
  });

  it('effect.shadow', () => {
    const transformation = new Transformation()
      .addAction(Effect.shadow(4).offsetX(5).offsetY(8).color('red'));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'shadow',
          offsetX: 5,
          offsetY: 8,
          color: 'red'
        }
      ]
    });
  });

  it('effect.colorize', () => {
    const transformation = new Transformation()
      .addAction(Effect.colorize(10).color('red'));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'colorize',
          level: 10,
          color: 'red'
        }
      ]
    });
  });

  it('effect.oilPaint', () => {
    const transformation = new Transformation()
      .addAction(Effect.oilPaint().strength(8));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'oilPaint',
          strength: 8,
        }
      ]
    });
  });

  it('effect.cartoonify', () => {
    const transformation = new Transformation()
      .addAction(Effect.cartoonify().lineStrength(70).colorReductionLevel(80));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'cartoonify',
          colorReductionLevel: 80,
          lineStrength: 70
        }
      ]
    });
  });

  it('effect.outline', () => {
    const transformation = new Transformation()
      .addAction(Effect.outline().width(100).color("lightblue"));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'outline',
          width: 100,
          color: 'lightblue'
        }
      ]
    });
  });

  it('effect.blackwhite', () => {
    const transformation = new Transformation()
      .addAction(Effect.blackwhite().threshold(40));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'blackwhite',
          level: 40,
        }
      ]
    });
  });

  it('effect.accelerate', () => {
    const transformation = new Transformation()
      .addAction(Effect.accelerate().rate(5));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'accelerate',
          rate: 5,
        }
      ]
    });
  });

  it('effect.loop', () => {
    const transformation = new Transformation()
      .addAction(Effect.loop().additionalIterations(5));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'loop',
          iterations: 5,
        }
      ]
    });
  });

  it('effect.make_transparent', () => {
    const transformation = new Transformation()
      .addAction(Effect.makeTransparent().tolerance(5).colorToReplace('red'));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'makeTransparent',
          tolerance: 5,
          color: 'red'
        }
      ]
    });
  });

  it('effect.noise', () => {
    const transformation = new Transformation()
      .addAction(Effect.noise().level(50));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'noise',
          level: 50,
        }
      ]
    });
  });

  it('effect.vignette', () => {
    const transformation = new Transformation()
      .addAction(Effect.vignette().strength(5));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'vignette',
          strength: 5,
        }
      ]
    });
  });

  it('effect.dither', () => {
    const transformation = new Transformation()
      .addAction(Effect.dither().type(halftone4x4Orthogonal()));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'dither',
          type: 9,
        }
      ]
    });
  });

  it('effect.vectorize', () => {
    const transformation = new Transformation()
      .addAction(Effect.vectorize().numOfColors(17).detailsLevel(100));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'vectorize',
          numOfColors: 17,
          detailLevel: 100
        }
      ]
    });
  });

  it('effect.gradientFade', () => {
    const transformation = new Transformation()
      .addAction(Effect.gradientFade()
        .strength(5)
        .horizontalStartPoint(10)
        .verticalStartPoint(20));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'gradientFade',
          strength: 5,
          horizontalStartPoint: 10,
          verticalStartPoint: 20
        }
      ]
    });
  });

  it('effect.assistColorBlind', () => {
    const transformation = new Transformation()
      .addAction(Effect.assistColorBlind().stripesStrength(20));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'assistColorblind',
          type: 'stripes',
          stripesStrength: 20
        }
      ]
    });
  });

  it('effect.simulateColorBlind', () => {
    const transformation = new Transformation()
      .addAction(Effect.simulateColorBlind().condition(rodMonochromacy()));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'simulateColorblind',
          condition: 'rod_monochromacy'
        }
      ]
    });
  });

  it('effect.deshake', () => {
    const transformation = new Transformation()
      .addAction(Effect.deshake().shakeStrength(16));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'deshake',
          pixels: 16
        }
      ]
    });
  });

  it('effect.pixelate', () => {
    const transformation = new Transformation()
      .addAction(Effect.pixelate().squareSize(15).region(Region.faces()));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'pixelate',
          squareSize: 15,
          region: {regionType: 'faces'}
        }
      ]
    });
  });

  it('effect.blur', () => {
    const transformation = new Transformation()
      .addAction(Effect.blur().strength(5));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'blur',
          strength: 5,
        }
      ]
    });
  });

  it('effect.blur – region faces', () => {
    const transformation = new Transformation()
      .addAction(Effect.blur().strength(2000)
        .region(Region.faces()));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'blur',
          strength: 2000,
          "region": {
            "regionType": "faces"
          },
        }
      ]
    });
  });

  it('effect.blur – region custom', () => {
    const transformation = new Transformation()
      .addAction(Effect.blur().strength(1000)
        .region(Region.custom().width(550).height(425).x(600).y(400)));

    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'blur',
          strength: 1000,
          region: {
            regionType: "custom",
            width: 550,
            height: 425,
            x: 600,
            y: 400
          },
        }
      ]
    });
  });

  it('effect.blur – region ocr_text', () => {
    const transformation = new Transformation()
      .addAction(Effect.blur().strength(1000)
        .region(Region.ocr()));

    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'blur',
          strength: 1000,
          "region": {
            "regionType": "ocr_text"
          },
        }
      ]
    });
  });

  it('effect.FadeIn', () => {
    const transformation = new Transformation()
      .addAction(Effect.fadeIn(50));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'fadeIn',
          length: 50,
        }
      ]
    });
  });

  it('effect.FadeOut', () => {
    const transformation = new Transformation()
      .addAction(Effect.fadeOut(50));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'fadeOut',
          length: 50,
        }
      ]
    });
  });

  it('effect.DropShadow', () => {
    const transformation = new Transformation()
      .addAction(Effect.dropShadow().spread(30).elevation(20).azimuth(60));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'dropshadow',
          spread: 30,
          elevation: 20,
          azimuth: 60,
        }
      ]
    });
  });

  it('effect.GenerativeReplace', () => {
    const transformation = new Transformation()
      .addAction(Effect.generativeReplace().from('sunny sky').to('dark sky'))
      .addAction(Effect.generativeReplace().from('ceiling').to('sunny sky').preserveGeometry())
      .addAction(Effect.generativeReplace().from('sunny sky').to('dark sky').preserveGeometry(false))
      .addAction(Effect.generativeReplace().from('ceiling').to('sunny sky').detectMultiple())
      .addAction(Effect.generativeReplace().from('ceiling').to('sunny sky').detectMultiple(false));

    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'generativeReplace',
          from: 'sunny sky',
          to: 'dark sky',
        },
        {
          actionType: 'generativeReplace',
          from: 'ceiling',
          to: 'sunny sky',
          preserveGeometry: true,
        },
        {
          actionType: 'generativeReplace',
          from: 'sunny sky',
          to: 'dark sky',
        },
        {
          actionType: 'generativeReplace',
          from: 'ceiling',
          to: 'sunny sky',
          detectMultiple: true
        },
        {
          actionType: 'generativeReplace',
          from: 'ceiling',
          to: 'sunny sky',
        }
      ]
    });
  });

  it('effect.GenerativeBackgroundReplace', () => {
    const transformation = new Transformation()
      .addAction(Effect.generativeBackgroundReplace().prompt('dog'))
      .addAction(Effect.generativeBackgroundReplace());

    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'generativeBackgroundReplace',
          prompt: 'dog',
        },
        {
          actionType: 'generativeBackgroundReplace',
        },
      ]
    });
  });

  it('effect.GenerativeRecolor', () => {
    const transformation = new Transformation()
      .addAction(Effect.generativeRecolor('something', 'red'))
      .addAction(Effect.generativeRecolor('something', 'red').multiple())
      .addAction(Effect.generativeRecolor('something', 'red').multiple(false))
      .addAction(Effect.generativeRecolor('something', 'red').detectMultiple())
      .addAction(Effect.generativeRecolor('something', 'red').detectMultiple(false))
      .addAction(Effect.generativeRecolor(['something', 'else'], 'red'));

    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'generativeRecolor',
          prompts: ['something'],
          toColor: 'red',
        },
        {
          actionType: 'generativeRecolor',
          prompts: ['something'],
          toColor: 'red',
          detectMultiple: true,
        },
        {
          actionType: 'generativeRecolor',
          prompts: ['something'],
          toColor: 'red',
        },
        {
          actionType: 'generativeRecolor',
          prompts: ['something'],
          toColor: 'red',
          detectMultiple: true,
        },
        {
          actionType: 'generativeRecolor',
          prompts: ['something'],
          toColor: 'red',
        },
        {
          actionType: 'generativeRecolor',
          prompts: ['something', 'else'],
          toColor: 'red',
        },
      ]
    });
  });

  it('effect.generativeRestore', () => {
    const transformation = new Transformation()
      .addAction(Effect.generativeRestore());
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {actionType: 'generativeRestore'}
      ]
    });
  });

  it('effect.upscale', () => {
    const transformation = new Transformation()
      .addAction(Effect.upscale());
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {actionType: 'upscale'}
      ]
    });
  });

  it('effect.enhance', () => {
    const transformation = new Transformation()
      .addAction(Effect.enhance());
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {actionType: 'enhance'}
      ]
    });
  });
});
