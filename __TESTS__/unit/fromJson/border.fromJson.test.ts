import {fromJson} from "../../../src/internal/fromJson";

describe('border.fromJson', () => {
  it('should generate a url with border from array of models', function () {
    const transformation = fromJson({actions:
        [ {
          actionType: 'border',
          borderType: 'solid',
          borderWidth: 5,
          borderColor: 'red',
        },
        {
          actionType: 'border',
          borderType: 'solid',
          borderWidth: 5,
          borderColor: 'red',
          roundCorners: {
            actionType: 'roundCorners',
            radius: [10, 20, 30, 40]
          }
        },
        {
          actionType: 'border',
          borderType: 'solid',
          borderWidth: 10,
          borderColor: 'blue',
          roundCorners: {
            actionType: 'roundCorners',
            radius: 'max'
          }
        },
        ]}
    );
    expect(transformation.toString()).toStrictEqual(
      'bo_5px_solid_red/bo_5px_solid_red,r_10:20:30:40/bo_10px_solid_blue,r_max'
    );
  });
});

