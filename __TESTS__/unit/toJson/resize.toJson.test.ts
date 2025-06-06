import {Transformation} from '../../../src';
import {Resize} from "../../../src/actions";
import {AspectRatio, Background, GradientDirection} from "../../../src/qualifiers";
import {Gravity} from "../../../src/qualifiers";
import {face, FocusOn} from "../../../src/qualifiers/focusOn";
import {AutoFocus} from "../../../src/qualifiers/autoFocus";
import {autoGravity} from "../../../src/qualifiers/gravity";

describe('resize.toJson()', () => {
  it('scale', () => {
    const transformation = new Transformation()
      .addAction(Resize.scale(200));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          "actionType": "scale",
          "dimensions": {
            "width": 200
          }
        }
      ]
    });
  });

  it('scale.fit.limitFit.minimumFit.crop.fill.limitFill.thumbnail.pad.limitPad.minimumPad', () => {
    const transformation = new Transformation()
      .addAction(Resize.scale(200).aspectRatio(7))
      .addAction(Resize.fit(100, 200).aspectRatio('16:9'))
      .addAction(Resize.limitFit(100).aspectRatio(AspectRatio.ar16X9()))
      .addAction(Resize.minimumFit(100).aspectRatio(AspectRatio.ignoreInitialAspectRatio()))
      .addAction(Resize.crop(100).x(3).y(4).gravity('north_east').zoom(10))
      .addAction(Resize.fill(200).x(3).y(4).gravity('south'))
      .addAction(Resize.limitFill(200).x(3).y(4).gravity('south'))
      .addAction(Resize.thumbnail(100).gravity('south').zoom(4))
      .addAction(Resize.pad(100).gravity('south').offsetX(3).offsetY(4))
      .addAction(Resize.limitPad(100).gravity('south').offsetX(3).offsetY(4))
      .addAction(Resize.minimumPad(100).gravity('south').offsetX(3).offsetY(4))
      .addAction(Resize.fill(100, 200).gravity(Gravity.focusOn(FocusOn.ocr())));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          "actionType": "scale",
          "dimensions": {
            "aspectRatio": "7.0",
            "width": 200
          }
        },
        {
          "actionType": "fit",
          "dimensions": {
            "aspectRatio": "16:9",
            "height": 200,
            "width": 100
          }
        },
        {
          "actionType": "limitFit",
          "dimensions": {
            "aspectRatio": "16:9",
            "width": 100
          }
        },
        {
          "actionType": "minimumFit",
          "dimensions": {
            "aspectRatio": "ignore_aspect_ratio",
            "width": 100
          }
        },
        {
          "actionType": "crop",
          "dimensions": {
            "width": 100
          },
          x: 3,
          y: 4,
          gravity: {
            compass: "north_east",
            gravityType: "direction"
          },
          zoom: 10
        },
        {
          "actionType": "fill",
          "dimensions": {
            "width": 200
          },
          x: 3,
          y: 4,
          gravity: {
            compass: "south",
            gravityType: "direction"
          }
        },
        {
          "actionType": "limitFill",
          "dimensions": {
            "width": 200
          },
          x: 3,
          y: 4,
          gravity: {
            compass: "south",
            gravityType: "direction"
          }
        },
        {
          "actionType": "thumbnail",
          "dimensions": {
            "width": 100
          },
          gravity: {
            compass: "south",
            gravityType: "direction"
          },
          zoom: 4
        },
        {
          "actionType": "pad",
          "dimensions": {
            "width": 100
          },
          gravity: {
            compass: "south",
            gravityType: "direction"
          },
          x: 3,
          y: 4
        },
        {
          "actionType": "limitPad",
          "dimensions": {
            "width": 100
          },
          gravity: {
            compass: "south",
            gravityType: "direction"
          },
          x: 3,
          y: 4
        },
        {
          "actionType": "minimumPad",
          "dimensions": {
            "width": 100
          },
          gravity: {
            compass: "south",
            gravityType: "direction"
          },
          x: 3,
          y: 4
        },
        {
          actionType: "fill",
          dimensions: {
            height: 200,
            width: 100,
          },
          gravity: {
            gravityType: "ocr",
          },
        }
      ]
    });
  });

  it('should generate auto gravity model', () => {
    const transformation = new Transformation()
      .addAction(Resize.fill().width(100).height(100).gravity(autoGravity().autoFocus(AutoFocus.focusOn(face())))
      );

    const model = transformation.toJson();

    expect(model).toStrictEqual({
      actions: [
        {
          actionType: "fill",
          dimensions: {width: 100, height: 100},
          gravity: {
            gravityType: 'auto',
            autoFocus: [
              {object: "face"}
            ]
          }
        }
      ]
    });
  });

  it('should generate auto gravity model', () => {
    const transformation = new Transformation()
      .addAction(Resize.crop(200).gravity(Gravity.autoGravity().autoFocus(
        AutoFocus.focusOn(FocusOn.person()).weight(100),
        AutoFocus.focusOn(FocusOn.cat()).weight(50).avoid(),
        AutoFocus.focusOn(FocusOn.face()).weight(50).avoid()
      )));

    const model = transformation.toJson();

    expect(model).toStrictEqual({
      actions: [
        {
          actionType: "crop",
          dimensions: {width: 200},
          gravity: {
            gravityType: 'auto',
            autoFocus: [
              {object: "person", weight: 100},
              {object: "cat", avoid: true},
              {object: "face", avoid: true}
            ]
          }
        }
      ]
    });
  });

  it('should generate focusOnGravity model', () => {
    const transformation = new Transformation()
      .addAction(Resize.crop(200).gravity(
        Gravity.focusOn(FocusOn.cat(), FocusOn.dog()).fallbackGravity(
          Gravity.autoGravity().autoFocus(
            AutoFocus.focusOn(FocusOn.microwave()).weight(30),
            AutoFocus.focusOn(FocusOn.bicycle()).avoid()
          )
        )));

    const model = transformation.toJson();

    expect(model).toStrictEqual({
      actions: [
        {
          actionType: 'crop',
          dimensions: {width: 200},
          gravity: {
            gravityType: 'object',
            focusOnObjects: ['cat', 'dog'],
            fallbackGravity: {
              gravityType: 'auto',
              autoFocus: [
                {object: 'microwave', weight: 30},
                {object: 'bicycle', avoid: true}
              ]
            }
          }
        }
      ]
    });
  });

  it('should generate an AutoBackgroundModel', () => {
    const transformation = new Transformation()
      .addAction(Resize.pad(200).background(Background.auto()));

    const model = transformation.toJson();

    expect(model).toStrictEqual({
      actions: [
        {
          actionType: 'pad',
          dimensions: {
            width: 200
          },
          background: {
            backgroundType: 'auto'
          }
        }
      ]
    });
  });

  it('should generate a BlurredBackgroundModel', () => {
    const transformation = new Transformation()
      .addAction(Resize.pad(200).background(Background.blurred().intensity(10).brightness(20)));

    const model = transformation.toJson();

    expect(model).toStrictEqual({
      actions: [
        {
          actionType: 'pad',
          dimensions: {
            width: 200
          },
          background: {
            backgroundType: 'blurred',
            brightness: 20,
            intensity: 10
          }
        }
      ]
    });
  });

  it('should generate a BorderBackgroundModel', () => {
    const transformation = new Transformation()
      .addAction(Resize.pad(200).background(Background.border().contrast().palette('RED', 'GREEN', 'BLUE')));

    const model = transformation.toJson();

    expect(model).toStrictEqual({
      actions: [
        {
          actionType: 'pad',
          dimensions: {
            width: 200
          },
          background: {
            backgroundType: 'border',
            palette: ['RED', 'GREEN', 'BLUE'],
            contrast: true
          }
        }
      ]
    });
  });

  it('should generate a BorderGradientBackgroundModel', () => {
    const transformation = new Transformation()
      .addAction(Resize.pad(200).background(Background.borderGradient().contrast().palette('RED', 'GREEN', 'BLUE').gradientColors(2).gradientDirection(GradientDirection.diagonalAsc())));

    const model = transformation.toJson();

    expect(model).toStrictEqual({
      actions: [
        {
          actionType: 'pad',
          dimensions: {
            width: 200
          },
          background: {
            backgroundType: 'borderGradient',
            palette: ['RED', 'GREEN', 'BLUE'],
            contrast: true,
            gradientColors: 2,
            gradientDirection: 'diagonal_asc'
          }
        }
      ]
    });
  });

  it('should generate a PredominantBackgroundModel', () => {
    const transformation = new Transformation()
      .addAction(Resize.pad(200).background(Background.predominant().contrast().palette('RED', 'GREEN', 'BLUE')));

    const model = transformation.toJson();

    expect(model).toStrictEqual({
      actions: [
        {
          actionType: 'pad',
          dimensions: {
            width: 200
          },
          background: {
            backgroundType: 'predominant',
            palette: ['RED', 'GREEN', 'BLUE'],
            contrast: true
          }
        }
      ]
    });
  });

  it('should generate a PredominantGradientBackgroundModel', () => {
    const transformation = new Transformation()
      .addAction(Resize.pad(200).background(Background.predominantGradient().contrast().palette('RED', 'GREEN', 'BLUE').gradientColors(2).gradientDirection(GradientDirection.diagonalAsc())));

    const model = transformation.toJson();

    expect(model).toStrictEqual({
      actions: [
        {
          actionType: 'pad',
          dimensions: {
            width: 200
          },
          background: {
            backgroundType: 'predominantGradient',
            palette: ['RED', 'GREEN', 'BLUE'],
            contrast: true,
            gradientColors: 2,
            gradientDirection: 'diagonal_asc'
          }
        }
      ]
    });
  });

  it('should generate a ColorBackgroundModel', () => {
    const transformation = new Transformation()
      .addAction(Resize.pad(200).background(Background.color('red')));

    const model = transformation.toJson();

    expect(model).toStrictEqual({
      actions: [
        {
          actionType: 'pad',
          dimensions: {
            width: 200
          },
          background: {
            backgroundType: 'color',
            color: 'red'
          }
        }
      ]
    });
  });

  it('should generate gravity model for string', () => {
    const transformation = new Transformation()
      .addAction(Resize.fill(200).gravity('face'))
      .addAction(Resize.fill(200).gravity('auto:face'));

    const model = transformation.toJson();

    expect(model).toStrictEqual({
      actions: [
        {
          actionType: "fill",
          dimensions: {
            width: 200
          },
          gravity: {
            focusOnObjects: ["face"],
            gravityType: "object"
          }
        },
        {
          actionType: "fill",
          dimensions: {
            width: 200,
          },
          gravity: {
            gravityType: 'auto',
            autoFocus: [
              {object: "face"}
            ]
          }
        }
      ]
    });
  });

  it('should generate a Generative Fill background', () => {
    const transformation = new Transformation()
      .addAction(Resize.pad(400).background(Background.generativeFill()))
      .addAction(Resize.pad(200).background(Background.generativeFill().prompt('strawberry donuts')))
      .addAction(Resize.pad(500).background(Background.generativeFill().prompt('%21%40%23%24%25%5E%26%2A%28%29%5F%2B%7D%7B%3A%22%7C%3F%3E%3C%7E')))
      .addAction(Resize.pad(300).background(Background.generativeFill().prompt('donuts %28strawberry%29%2C with jam')));


    const model = transformation.toJson();

    expect(model).toStrictEqual({
      actions: [
        {
          actionType: 'pad',
          dimensions: {
            width: 400
          },
          background: {
            backgroundType: 'generativeFill'
          }
        },
        {
          actionType: 'pad',
          dimensions: {
            width: 200
          },
          background: {
            backgroundType: 'generativeFill',
            prompt: 'strawberry donuts'
          }
        },
        {
          actionType: 'pad',
          dimensions: {
            width: 500
          },
          background: {
            backgroundType: 'generativeFill',
            prompt: '!@#$%^&*()_+}{:"|?><~'
          }
        },
        {
          actionType: 'pad',
          dimensions: {
            width: 300
          },
          background: {
            backgroundType: 'generativeFill',
            prompt: 'donuts (strawberry), with jam'
          }
        },
      ]
    });
  });

  it('auto', () => {
    const transformation = new Transformation()
      .addAction(Resize.auto().width(200).height(100).gravity('south'));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          "actionType": "auto",
          "dimensions": {
            "width": 200,
            "height": 100,
          },
          gravity: {
            compass: "south",
            gravityType: "direction"
          },
        },
      ]
    });
  });

  it('autoPad', () => {
    const transformation = new Transformation()
      .addAction(Resize.autoPad().width(200).height(100).background('red'));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          "actionType": "autoPad",
          "dimensions": {
            "width": 200,
            "height": 100,
          },
          background: {
            backgroundType: "color",
            color: "red"
          },
        },
      ]
    });
  });
});
