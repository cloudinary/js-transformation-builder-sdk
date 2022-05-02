import {Animated} from "../../../src/actions/animated";
import {Transformation} from "../../../src";

describe('Tests for Transformation Action -- Animated', () => {
  it('Creates a Transformation with animated', () => {
    const tx = new Transformation()
      .animated(Animated.edit().delay(200).loop(3))
      .toString();

    expect(tx).toBe('dl_200,e_loop:3');
  });
});
