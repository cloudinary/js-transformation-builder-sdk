import {Conditional} from "../../../src/actions/conditional";
import {Transformation} from "../../../src/transformation/Transformation";
import {Resize} from "../../../src/actions/resize";


describe('Tests for Transformation Action -- Conditional', () => {
  it('Creates a conditional transformation', () => {
    const tx = new Transformation().conditional(
      Conditional.ifCondition('ar >= 1.0', new Transformation().addAction('w_100'))
    ).toString();
    // Ensures it compiles and doesn't throw
    expect(tx).toEqual('if_ar_gte_1.0/w_100/if_end');
  });

  it('Conditional with if/else combination', () => {
    const tx = new Transformation().conditional(
      Conditional.ifCondition('ar >= 1.0', new Transformation().resize(Resize.scale(50)))
        .otherwise(new Transformation().resize(Resize.scale(200)))
    ).toString();

    expect(tx).toEqual('if_ar_gte_1.0/c_scale,w_50/if_else/c_scale,w_200/if_end');
  });
});
