import {Transformation} from "../../../src";
import {Reshape} from "../../../src/actions/reshape";

describe('Reshape toJson()', () => {
  it('should generate correct JSON for distort actions', () => {
    const transformation = new Transformation()
      .addAction(Reshape.distort([100, 100, 100, 200, 200, 200, 200, 100]))
      .addAction(Reshape.distort([1, 2, 3, 4, 5, 6, 7, 8]));

    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: 'distort',
          coordinates: [100, 100, 100, 200, 200, 200, 200, 100]
        },
        {
          actionType: 'distort',
          coordinates: [1, 2, 3, 4, 5, 6, 7, 8]
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
          x: 100,
          y: 200
        },
        {
          actionType: 'shear',
          x: 50,
          y: 75
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
      .addAction(Reshape.displace().x(100).y(50))
      .addAction(Reshape.displace().x(200))
      .addAction(Reshape.displace().y(75));

    expect(transformation.toJson()).toStrictEqual({
      actions: [
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
      ]
    });
  });

  it('should generate correct JSON for multiple reshape actions', () => {
    const transformation = new Transformation()
      .addAction(Reshape.distort([100, 100, 100, 200, 200, 200, 200, 100]))
      .addAction(Reshape.shear(100, 200))
      .addAction(Reshape.distortArc(180))
      .addAction(Reshape.displace().x(50).y(25));

    expect(transformation.toJson()).toStrictEqual({
      actions: [
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
      ]
    });
  });
}); 