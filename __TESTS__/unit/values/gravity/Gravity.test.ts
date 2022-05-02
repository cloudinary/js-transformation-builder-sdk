import {Gravity} from "../../../../src/qualifiers/gravity";
import {crop} from "../../../../src/actions/resize";
import {Transformation} from "../../../../src";

describe('Gravity Qualifier', () => {
  it ('Expects Gravity to include the four Gravity types', () => {
    expect(Gravity.autoGravity).toBeInstanceOf(Function);
    expect(Gravity.focusOn).toBeInstanceOf(Function);
    expect(Gravity.compass).toBeInstanceOf(Function);
  });
  it('Can use shortened gravity notation', ()=>{
    const tx = new Transformation()
      .resize(crop()
        .width(250)
        .height(250)
        .gravity('auto')).toString();
    expect(tx).toContain('c_crop,g_auto,h_250,w_250');
  });
});
