import {Transformation} from "../../../../src";
import {fit} from "../../../../src/actions/resize";

describe('Tests for Transformation Action -- Resize.fill', () => {
  it('Ensures it generates the right transformation', () => {
    const tx = new Transformation().resize(fit(250, 250)).toString();
    expect(tx).toContain('c_fit,h_250,w_250');
  });

  it('Ensures it generates the right transformation using qualifiers', () => {
    const tx = new Transformation().resize(
      fit()
        .width(250)
        .height(250)
        .aspectRatio(1.2)
        .relative()).toString();
    expect(tx).toContain('ar_1.2,c_fit,fl_relative,h_250,w_250');
  });
});
