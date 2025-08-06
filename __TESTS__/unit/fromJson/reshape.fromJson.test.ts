import {fromJson} from "../../../src/internal/fromJson";

describe('reshape.fromJson', () => {
  it('should generate a url with distort from array of models', function () {
    const transformation = fromJson({actions:
      [
        {
          actionType: 'distort',
          coordinates: [100, 100, 100, 200, 200, 200, 200, 100]
        },
        {
          actionType: 'distort',
          coordinates: [1, 2, 3, 4, 5, 6, 7, 8]
        }
      ]}
    );
    expect(transformation.toString()).toStrictEqual(
      'e_distort:100:100:100:200:200:200:200:100/e_distort:1:2:3:4:5:6:7:8'
    );
  });

  it('should generate a url with shear from array of models', function () {
    const transformation = fromJson({actions:
      [
        {
          actionType: 'shear',
          x: 100,
          y: 200
        },
        {
          actionType: 'shear',
          x: 50,
          y: 75
        }
      ]}
    );
    expect(transformation.toString()).toStrictEqual(
      'e_shear:100:200/e_shear:50:75'
    );
  });

  it('should generate a url with shear using string values', function () {
    const transformation = fromJson({actions:
      [
        {
          actionType: 'shear',
          x: '100',
          y: '200'
        }
      ]}
    );
    expect(transformation.toString()).toStrictEqual(
      'e_shear:100:200'
    );
  });

  it('should generate a url with distortArc from array of models', function () {
    const transformation = fromJson({actions:
      [
        {
          actionType: 'distortArc',
          degrees: 200
        },
        {
          actionType: 'distortArc',
          degrees: '150'
        }
      ]}
    );
    expect(transformation.toString()).toStrictEqual(
      'e_distort:arc:200/e_distort:arc:150'
    );
  });

  it('should generate a url with displace from array of models', function () {
    const transformation = fromJson({actions:
      [
        {
          actionType: 'displace',
          x: 100,
          y: 50
        },
        {
          actionType: 'displace',
          x: 200
        },
        {
          actionType: 'displace',
          y: 75
        }
      ]}
    );
    expect(transformation.toString()).toStrictEqual(
      'e_displace,x_100,y_50/e_displace,x_200/e_displace,y_75'
    );
  });

  it('should generate a url with multiple reshape actions', function () {
    const transformation = fromJson({actions:
      [
        {
          actionType: 'distort',
          coordinates: [100, 100, 100, 200, 200, 200, 200, 100]
        },
        {
          actionType: 'shear',
          x: 100,
          y: 200
        },
        {
          actionType: 'distortArc',
          degrees: 180
        },
        {
          actionType: 'displace',
          x: 50,
          y: 25
        }
      ]}
    );
    expect(transformation.toString()).toStrictEqual(
      'e_distort:100:100:100:200:200:200:200:100/e_shear:100:200/e_distort:arc:180/e_displace,x_50,y_25'
    );
  });
}); 