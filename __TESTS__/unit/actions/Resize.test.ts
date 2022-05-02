import * as Resize from "../../../src/actions/resize.js";
import {Expression} from "../../../src/qualifiers/expression.js";
import {Transformation} from "../../../src";

describe('Tests for Transformation Action -- Resize', () => {
  it('Resize with a resize mode - relative', () => {
    const tx = new Transformation()
      .resize(Resize.scale(100).relative()).toString();
    expect(tx).toContain('c_scale,fl_relative,w_100');
  });

  it('Resize with a resize mode - region_relative', () => {
    const tx = new Transformation()
      .resize(Resize.scale(100).regionRelative()).toString();
    expect(tx).toContain('c_scale,fl_region_relative,w_100');
  });

  it('Resize with an expression', () => {
    const tx = new Transformation()
      .resize(Resize.scale().width(Expression.expression('100 + 5'))).toString();
    expect(tx).toContain('c_scale,w_100_add_5');
  });

  it('Resize with gravity', () => {
    const tx = new Transformation()
      .resize(Resize.pad().width(100).gravity('west')).toString();
    expect(tx).toContain('c_pad,g_west,w_100');
  });
});
