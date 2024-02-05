import {fromJson} from "../../../src/internal/fromJson";

describe('backgroundColor.fromJson', () => {
  it('should generate a url with border from array of models', function () {
    const transformation = fromJson({actions:
        [
          { actionType: 'backgroundColor', color: 'red' },
          { actionType: 'backgroundColor', color: '#000000' },
        ]}
    );
    expect(transformation.toString()).toStrictEqual(
      'b_red/b_rgb:000000'
    );
  });
});

