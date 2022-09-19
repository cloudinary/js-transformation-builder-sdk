import {fromJson} from "../../../src/internal/fromJson";

describe('rotate.fromJson', () => {
  it('should generate a url with rotate actions from array of models', function () {
    const transformation = fromJson({actions:[
      { 
        actionType: 'rotateByAngle',
        angle: 4
      }   
    ]}
    );
    expect(transformation.toString()).toStrictEqual(
      'a_4'
    );
  });
});

