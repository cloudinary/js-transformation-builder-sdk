import {Transformation} from "../../../../src";
import {limitFit} from "../../../../src/actions/resize";

describe('Tests for Transformation Action -- Resize.limitFit', () => {
  it('Ensures it generates the right transformation', () => {
    const tx = new Transformation().resize(limitFit(250, 250)).toString();
    expect(tx).toContain('c_limit,h_250,w_250');
  });

  it('Ensures it generates the right transformation using qualifiers', () => {
    const tx = new Transformation().resize(
      limitFit()
        .width(250)
        .height(250)).toString();
    expect(tx).toContain('c_limit,h_250,w_250');
  });
});
