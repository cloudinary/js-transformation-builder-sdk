import {Transformation} from "../../../../src";
import {minimumFit} from "../../../../src/actions/resize";

describe('Tests for Transformation Action -- Resize.minimumFit', () => {
  it('Ensures it generates the right transformation', () => {
    const tx = new Transformation().resize(minimumFit(250, 250)).toString();
    expect(tx).toContain('c_mfit,h_250,w_250');
  });

  it('Ensures it generates the right transformation using qualifiers', () => {
    const tx = new Transformation().resize(
      minimumFit()
        .width(250)
        .height(250)).toString();
    expect(tx).toContain('c_mfit,h_250,w_250');
  });
});
