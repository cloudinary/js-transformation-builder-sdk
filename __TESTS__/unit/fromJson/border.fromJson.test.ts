import {fromJson} from "../../../src/internal/fromJson";

describe('border.fromJson', () => {
  it('should generate a url with border from array of models', function () {
    const transformation = fromJson({actions:
        [ {
          actionType: 'border',
          width: 5,
          color: 'red',
        },
        {
          actionType: 'border',
          width: 5,
          color: 'red',
          radius: [10, 20, 30, 40]
        },
        {
          actionType: 'border',
          width: 10,
          color: 'blue',
          radius: 'max'
        },
        ]}
    );
    expect(transformation.toString()).toStrictEqual(
      'bo_5px_solid_red/bo_5px_solid_red,r_10:20:30:40/bo_10px_solid_blue,r_max'
    );
  });
});

