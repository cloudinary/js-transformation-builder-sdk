import {Transformation} from "../../../../src";
import {auto} from "../../../../src/actions/resize";
import {Gravity} from "../../../../src/qualifiers/gravity";
import {Compass} from "../../../../src/qualifiers/compass";

describe('Tests for Transformation Action -- Resize.auto', () => {
  it('Ensures it generates the right transformation', () => {
    const tx = new Transformation().resize(auto(250, 250)).toString();
    expect(tx).toContain('c_auto,h_250,w_250');
  });

  it('Ensures it generates the right transformation using qualifiers', () => {
    const tx = new Transformation().resize(
      auto()
        .width(250)
        .height(250)
        .gravity(Gravity.compass(Compass.west()))).toString();
    expect(tx).toContain('c_auto,g_west,h_250,w_250');
  });
});
