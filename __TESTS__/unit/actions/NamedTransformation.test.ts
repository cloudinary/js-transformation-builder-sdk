import {name} from "../../../src/actions/namedTransformation";
import {scale} from "../../../src/actions/resize";
import {Transformation} from "../../../src";

describe('Tests for Transformation Action -- NamedTransformation', () => {
  it('Ensures NamedTransformation is accepted as an action to ImageTransformation', () => {
    const tImage = new Transformation();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.namedTransformation(name('foobar'))
    ).toEqual(tImage);
  });

  it('Creates a Transformation with name that has an underscore', () => {
    const tx = new Transformation()
      .namedTransformation(name('_foobar'))
      .toString();

    expect(tx).toBe('t__foobar');
  });

  it('Creates a Transformation with name and resize', () => {
    const tx = new Transformation()
      .resize(scale(100, 100))
      .namedTransformation(name('foobar'))
      .toString();

    expect(tx).toBe('c_scale,h_100,w_100/t_foobar');
  });
});
