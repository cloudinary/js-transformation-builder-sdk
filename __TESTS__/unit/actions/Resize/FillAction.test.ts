import * as Gravity from "../../../../src/qualifiers/gravity";
import {fill} from "../../../../src/actions/resize";
import {Transformation} from "../../../../src";


describe('Tests for Transformation Action -- Resize.fill', () => {
  it('Ensures it generates the right transformation', () => {
    const tx = new Transformation().resize(fill(250, 250)).toString();
    expect(tx).toContain('c_fill,h_250,w_250');
  });

  it('Ensures it generates the right transformation using qualifiers', () => {
    const tx = new Transformation().resize(
      fill()
        .width(250)
        .height(250)
        .gravity(Gravity.autoGravity())
        .aspectRatio(1.2)).toString();
    expect(tx).toContain('ar_1.2,c_fill,g_auto,h_250,w_250');
  });

  it('Ensures it generates the right transformation xyCenter and x,y', () => {
    const tx = new Transformation().resize(
      fill()
        .width(250)
        .height(250)
        .gravity(Gravity.xyCenter())
        .x(100)
        .y(100)
        .aspectRatio(1.2)).toString();
    expect(tx).toContain('ar_1.2,c_fill,g_xy_center,h_250,w_250,x_100,y_100');
  });
});
