import {Transformation} from "../../../../src";
import {pad} from "../../../../src/actions/resize";
import {Background} from "../../../../src/qualifiers/background";
import {Gravity} from "../../../../src/qualifiers/gravity";
import {Compass} from "../../../../src/qualifiers/compass";

describe('Tests for Transformation Action -- Resize.pad', () => {
  it('Ensures it generates the right transformation', () => {
    const tx = new Transformation().resize(pad(250, 250)).toString();
    expect(tx).toContain('c_pad,h_250,w_250');
  });

  it('Ensures it generates the right transformation using qualifiers', () => {
    const tx = new Transformation().resize(
      pad()
        .width(250)
        .height(250)
        .gravity(Gravity.compass(Compass.west()))
        .offsetX(10)
        .offsetY(10)
        .background(Background.color('red'))
        .aspectRatio(1.2)).toString();
    expect(tx).toContain('ar_1.2,b_red,c_pad,g_west,h_250,w_250,x_10,y_10');
  });
});
