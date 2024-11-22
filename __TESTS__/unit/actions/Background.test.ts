import {Color} from "../../../src/qualifiers/color";
import * as Resize from "../../../src/actions/resize";
import {
  auto,
  border,
  color,
  borderGradient,
  predominant,
  predominantGradient,
  blurred
} from "../../../src/qualifiers/background";
import {GradientDirection} from "../../../src/qualifiers/gradientDirection";
import {Transformation} from "../../../src";
import {Background} from "../../../src/qualifiers";


describe('Tests for Transformation Action -- Background', () => {
  it('Creates a Transformation with Background.auto', () => {
    const tx = new Transformation()
      .backgroundColor(Color.RED)
      .toString();

    expect(tx).toBe('b_red');
  });


  it('Background.border().contrast()', () => {
    const tx = new Transformation()
      .resize(Resize.pad(250, 250)
        .background(border().contrast())
      )
      .resize(Resize.pad(250, 250)
        .background(border())
      )
      .toString();

    expect(tx).toContain('b_auto:border_contrast,c_pad,h_250,w_250/b_auto:border,c_pad,h_250,w_250');
  });

  it('Background.border().contrast().palette()', () => {
    const tx = new Transformation()
      .resize(Resize.pad(250, 250)
        .background(border().contrast().palette('red', 'green', 'blue'))
      )
      .toString();

    expect(tx).toContain('b_auto:border_contrast:palette_red_green_blue,c_pad,h_250,w_250');
  });


  it('Background.auto()', () => {
    const tx = new Transformation()
      .resize(Resize.pad(250, 250)
        .background(auto())
      )
      .toString();

    expect(tx).toContain('b_auto,c_pad,h_250,w_250');
  });

  it('Background.borderGradient().gradientDirection().gradientColors()', () => {
    const tx = new Transformation()
      .resize(Resize.pad(250, 250)
        .background(borderGradient()
          .gradientDirection(GradientDirection.horizontal())
          .gradientColors(2)
          .contrast()
          .palette('red', 'green', 'blue')
        )
      )
      .resize(Resize.pad(250, 250)
        .background(borderGradient()
        )
      )
      .toString();

    expect(tx).toContain('b_auto:border_gradient_contrast:2:horizontal:palette_red_green_blue,c_pad,h_250,w_250/b_auto:border_gradient,c_pad,h_250,w_250');
  });

  it('can use shortened GradientDirection notation', () => {
    const tx = new Transformation()
      .resize(Resize.pad(250, 250)
        .background(borderGradient()
          .gradientDirection("horizontal")
        )
      )
      .toString();

    expect(tx).toContain('b_auto:border_gradient:horizontal,c_pad,h_250,w_250');
  });

  it('Background.predominantGradient().gradientDirection().gradientColors()', () => {
    const tx = new Transformation()
      .resize(Resize.pad(250, 250)
        .background(predominantGradient()
          .gradientDirection(GradientDirection.horizontal())
          .gradientColors(2)
          .contrast()
          .palette('red', 'green', 'blue')
        )
      )
      .resize(Resize.pad(250, 250)
        .background(predominantGradient())
      )
      .toString();

    expect(tx).toContain('b_auto:predominant_gradient_contrast:2:horizontal:palette_red_green_blue,c_pad,h_250,w_250/b_auto:predominant_gradient,c_pad,h_250,w_250');
  });


  it('Background.Color()', () => {
    const tx = new Transformation()
      .resize(Resize.pad(250, 250)
        .background(color('red'))
      )
      .toString();

    expect(tx).toBe('b_red,c_pad,h_250,w_250');
  });

  it('Background.predominant().contrast().palette()', () => {
    const tx = new Transformation()
      .resize(Resize.pad(250, 250)
        .background(predominant().contrast().palette('red', 'green', 'blue'))
      )
      .resize(Resize.pad(250, 250)
        .background(predominant())
      )
      .toString();

    expect(tx).toContain('b_auto:predominant_contrast:palette_red_green_blue,c_pad,h_250,w_250/b_auto:predominant,c_pad,h_250,w_250');
  });


  it('Test blurred background', () => {
    const tx = new Transformation()
      .resize(Resize.pad(250, 250)
        .background(blurred())
      )
      .toString();

    expect(tx).toContain('b_blurred,');
  });

  it('Test blurred background with intensity qualifier only', () => {
    const tx = new Transformation()
      .resize(Resize.pad(250, 250)
        .background(blurred().intensity(500))
      )
      .toString();

    expect(tx).toContain('b_blurred:500,');
  });

  it('Test blurred background with brightness qualifier only', () => {
    const tx = new Transformation()
      .resize(Resize.pad(250, 250)
        .background(blurred().brightness(500))
      )
      .toString();

    // default intensity = 100
    expect(tx).toContain('b_blurred:100:500,');
  });

  it('Test blurred background with two qualifiers', () => {
    const tx = new Transformation()
      .resize(Resize.pad(250, 250)
        .background(blurred().intensity(200).brightness(100))
      )
      .toString();

    expect(tx).toContain('b_blurred:200:100,');
  });

  describe('Test generative fill background', () => {
    it('without prompt', () => {
      const tx = new Transformation()
        .resize(Resize.pad(250, 250)
          .background(Background.generativeFill())
        )
        .toString();

      expect(tx).toContain('b_gen_fill');
    });
    it('with prompt', () => {
      const tx = new Transformation()
        .resize(Resize.pad(250, 250)
          .background(Background.generativeFill().prompt("turtles in the sea"))
        )
        .toString();

      expect(tx).toContain('b_gen_fill:prompt_turtles in the sea');
    });
    it('with prompt with special characters', () => {
      const tx = new Transformation()
        .resize(Resize.pad(250, 250)
          .background(Background.generativeFill().prompt("turtles, in the (sea)"))
        )
        .toString();

      expect(tx).toContain('b_gen_fill:prompt_turtles%2C in the %28sea%29');
    });
  });
});
