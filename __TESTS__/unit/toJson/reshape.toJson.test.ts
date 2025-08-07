import {Transformation} from "../../../src";
import {Reshape} from "../../../src/actions/reshape";
import {image} from "../../../src/qualifiers/source";

describe('Reshape toJson()', () => {
  it('should generate correct JSON for distort actions', () => {
    const transformation = new Transformation()
      .addAction(Reshape.distort([100, 100, 100, 200, 200, 200, 200, 100]))
      .addAction(Reshape.distort([1, 2, 3, 4, 5, 6, 7, 8]));

    expect(transformation.toJson()).toStrictEqual({
      actions: [
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
      ]
    });
  });

  it('should generate correct JSON for shear actions', () => {
    const transformation = new Transformation()
      .addAction(Reshape.shear(100, 200))
      .addAction(Reshape.shear(50, 75));

    expect(transformation.toJson()).toStrictEqual({
      actions: [
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
      ]
    });
  });

  it('should generate correct JSON for distortArc actions', () => {
    const transformation = new Transformation()
      .addAction(Reshape.distortArc(200))
      .addAction(Reshape.distortArc('150'));

    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'distortArc',
          degrees: 200
        },
        {
          actionType: 'distortArc',
          degrees: '150'
        }
      ]
    });
  });

  it('should generate correct JSON for displace actions', () => {
    const transformation = new Transformation()
      .addAction(Reshape.displace(image('radialize')).x(100).y(50))
      .addAction(Reshape.displace(image('gradient')).x(200))
      .addAction(Reshape.displace(image('pattern')).y(75));

    expect(transformation.toJson()).toStrictEqual({
      actions: [
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
      ]
    });
  });

  it('should generate correct JSON for multiple reshape actions', () => {
    const transformation = new Transformation()
      .addAction(Reshape.distort([100, 100, 100, 200, 200, 200, 200, 100]))
      .addAction(Reshape.shear(100, 200))
      .addAction(Reshape.distortArc(180))
      .addAction(Reshape.displace(image('radialize')).x(50).y(25));

    expect(transformation.toJson()).toStrictEqual({
      actions: [
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
      ]
    });
  });
}); 