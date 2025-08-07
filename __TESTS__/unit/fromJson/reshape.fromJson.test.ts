import {fromJson} from "../../../src/internal/fromJson";
import {image} from "../../../src/qualifiers/source";

describe('reshape.fromJson', () => {
  it('should generate a url with distort from array of models', function () {
    const transformation = fromJson({actions:
      [
        {
          actionType: 'distort',
          topLeft: { x: 100, y: 100 },
          topRight: { x: 100, y: 200 },
          bottomRight: { x: 200, y: 200 },
          bottomLeft: { x: 200, y: 100 }
        },
        {
          actionType: 'distort',
          topLeft: { x: 1, y: 2 },
          topRight: { x: 3, y: 4 },
          bottomRight: { x: 5, y: 6 },
          bottomLeft: { x: 7, y: 8 }
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
          skewX: 100,
          skewY: 200
        },
        {
          actionType: 'shear',
          skewX: 50,
          skewY: 75
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
          skewX: '100',
          skewY: '200'
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
          source: {
            sourceType: 'image',
            publicId: 'radialize'
          },
          x: 100,
          y: 50
        },
        {
          actionType: 'displace',
          source: {
            sourceType: 'image',
            publicId: 'gradient'
          },
          x: 200
        },
        {
          actionType: 'displace',
          source: {
            sourceType: 'image',
            publicId: 'pattern'
          },
          y: 75
        }
      ]}
    );
    expect(transformation.toString()).toStrictEqual(
      'l_radialize/e_displace,fl_layer_apply,x_100,y_50/l_gradient/e_displace,fl_layer_apply,x_200/l_pattern/e_displace,fl_layer_apply,y_75'
    );
  });

  it('should generate a url with multiple reshape actions', function () {
    const transformation = fromJson({actions:
      [
        {
          actionType: 'distort',
          topLeft: { x: 100, y: 100 },
          topRight: { x: 100, y: 200 },
          bottomRight: { x: 200, y: 200 },
          bottomLeft: { x: 200, y: 100 }
        },
        {
          actionType: 'shear',
          skewX: 100,
          skewY: 200
        },
        {
          actionType: 'distortArc',
          degrees: 180
        },
        {
          actionType: 'displace',
          source: {
            sourceType: 'image',
            publicId: 'radialize'
          },
          x: 50,
          y: 25
        }
      ]}
    );
    expect(transformation.toString()).toStrictEqual(
      'e_distort:100:100:100:200:200:200:200:100/e_shear:100:200/e_distort:arc:180/l_radialize/e_displace,fl_layer_apply,x_50,y_25'
    );
  });
}); 