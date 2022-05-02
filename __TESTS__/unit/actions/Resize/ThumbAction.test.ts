import {Transformation} from "../../../../src";
import {thumbnail} from "../../../../src/actions/resize";
import {Compass} from "../../../../src/qualifiers/compass";
import {Gravity} from "../../../../src/qualifiers/gravity";

describe('Tests for Transformation Action -- Resize.thumb()', () => {
  it('Ensures it generates the right transformation', () => {
    const tx = new Transformation().resize(thumbnail(250, 250)).toString();
    expect(tx).toContain('c_thumb,h_250,w_250');
  });

  it('Ensures it generates the right transformation using qualifiers', () => {
    const tx = new Transformation().resize(
      thumbnail()
        .width(250)
        .height(250)
        .aspectRatio(2)
        .gravity(Gravity.compass(Compass.west()))
        .zoom(2.5)).toString();
    expect(tx).toContain('ar_2.0,c_thumb,g_west,h_250,w_250,z_2.5');
  });
});
