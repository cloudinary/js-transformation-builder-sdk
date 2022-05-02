import {Border} from "../../../src/actions/border";
import {Transformation} from "../../../src";
import {RoundCorners} from "../../../src/actions/roundCorners";


describe('Tests for Transformation Action -- Border', () => {
  it('Creates a Transformation with border and color', () => {
    const tx = new Transformation()
      .border(Border.solid( 7, 'red'))
      .toString();

    expect(tx).toBe('bo_7px_solid_red');
  });

  it('Creates a Transformation with border and rgb #0000ff', () => {
    const tx = new Transformation()
      .border(Border.solid( 7, '#0000ff'))
      .toString();

    expect(tx).toBe('bo_7px_solid_rgb:0000ff');
  });

  it('Creates a Transformation with border and rgb #FFF', () => {
    const tx = new Transformation()
      .border(Border.solid( 7, '#FFF'))
      .toString();

    expect(tx).toBe('bo_7px_solid_rgb:FFF');
  });

  it('Creates a Transformation with border and rgb #FFFFFFFF', () => {
    const tx = new Transformation()
      .border(Border.solid(7, '#FFFFFFFF'))
      .toString();

    expect(tx).toBe('bo_7px_solid_rgb:FFFFFFFF');
  });

  it('Creates a Transformation with border and rgb #FFFFFFFF and round corners', () => {
    const tx = new Transformation()
      .border(
        Border.solid(7, '#FFFFFFFF')
          .roundCorners(RoundCorners.byRadius(50))
      )
      .toString();

    expect(tx).toBe('bo_7px_solid_rgb:FFFFFFFF,r_50');
  });
});
