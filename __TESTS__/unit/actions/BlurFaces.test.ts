import {Effect} from "../../../src/actions/effect";

describe('Tests for Transformation Action -- BlurFaces', () => {
  it('Tests blurFaces', () => {
    expect(Effect.blurFaces()
      .toString()
    ).toEqual('e_blur_faces');

    expect(Effect.blurFaces()
      .strength(10)
      .toString()
    ).toEqual('e_blur_faces:10');

    expect(Effect.blurFaces()
      .strength("$myvar")
      .toString()
    ).toEqual('e_blur_faces:$myvar');
  });
});
