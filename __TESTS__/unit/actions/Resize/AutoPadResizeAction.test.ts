import {Transformation} from "../../../../src";
import {Resize, autoPad} from "../../../../src/actions/resize";
import {Background} from "../../../../src/qualifiers";

describe('Tests for Transformation Action -- Resize.autoPad', () => {
  it('Ensures it generates the right transformation', () => {
    const tx = new Transformation().resize(autoPad(250, 250)).toString();
    expect(tx).toContain('c_auto_pad,g_auto,h_250,w_250');
  });

  it('Ignores gravity and always returns g_auto', () => {
    const tx = new Transformation().resize(autoPad(250, 250).gravity("north")).toString();
    expect(tx).toContain('c_auto_pad,g_auto,h_250,w_250');
  });

  it('Ensures it generates the right transformation using qualifiers', () => {
    const tx = new Transformation().resize(
      Resize.autoPad()
        .width(250)
        .height(250)
        .background(Background.color('red'))).toString();
    expect(tx).toContain('b_red,c_auto_pad,g_auto,h_250,w_250');
  });
});
