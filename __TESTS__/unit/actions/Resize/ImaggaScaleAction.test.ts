import {Transformation} from "../../../../src";
import {imaggaScale} from "../../../../src/actions/resize";


describe('Tests for Transformation Action -- Resize.imaggaScale', () => {
  it('Ensures it generates the right transformation', () => {
    const tx = new Transformation().resize(imaggaScale(250, 250)).toString();
    expect(tx).toContain('c_imagga_scale,h_250,w_250');
  });

  it('Ensures it generates the right transformation using qualifiers', () => {
    const tx = new Transformation().resize(
      imaggaScale()
        .width(250)
        .height(250)
        .aspectRatio(2)).toString();
    expect(tx).toContain('ar_2.0,c_imagga_scale,h_250,w_250');
  });
});
