import {Transformation} from "../../../src/transformation/Transformation";
import {Concatenate} from "../../../src/qualifiers/concatenate";
import {Volume} from "../../../src/qualifiers/volume";
import {Transition} from "../../../src/qualifiers/transition";
import {Effect} from "../../../src/actions/effect";
import {VideoEdit} from "../../../src/actions/videoEdit";


describe('Tests for Transformation Action -- VideoEdit', () => {
  it('Creates a Transformation with concatenate', () => {
    const tx = new Transformation()
      .videoEdit(
        VideoEdit.concatenate(
          Concatenate.videoSource("dog")
        )
      )
      .toString();

    // fl_splice,l_video:dog/{videoTransformation}/fl_layer_apply
    expect(tx).toContain('fl_splice,l_video:dog/fl_layer_apply');
  });

  it('Creates a Transformation with concatenate prepend', () => {
    const tx = new Transformation()
      .videoEdit(
        VideoEdit.concatenate(
          Concatenate.videoSource("dog")
        )
          .prepend() // implicitly true
      )
      .toString();

    expect(tx).toBe('fl_splice,l_video:dog/fl_layer_apply,so_0');
  });

  it('Creates a Transformation with concatenate with transition', () => {
    const src = Concatenate.imageSource("sample");
    src.transformation(new Transformation());
    src.getTransformation().effect(Effect.sepia());

    const tx = new Transformation()
      .videoEdit(
        VideoEdit.concatenate(src)
          .transition(Transition.videoSource("transition1"))
          .duration(5)
      ).toString();

    expect(tx).toBe('du_5,l_sample/e_sepia/e_transition,l_video:transition1/fl_layer_apply/fl_layer_apply');
  });

  it('Creates a Transformation with trim', () => {
    const tx = new Transformation()
      .videoEdit(VideoEdit.trim()
        .startOffset(3)
        .endOffset(4)
        .duration(10))
      .toString();

    expect(tx).toBe('du_10,eo_4,so_3');
  });

  it('Creates a Transformation with trim and percent duration', () => {
    const tx = new Transformation()
      .videoEdit(VideoEdit.trim()
        .startOffset(3)
        .endOffset(4)
        .duration('10%'))
      .toString();

    expect(tx).toBe('du_10p,eo_4,so_3');
  });

  it('Creates a Transformation with trim %', () => {
    const tx = new Transformation()
      .videoEdit(VideoEdit.trim()
        .startOffset('3%')
        .endOffset('4%')
        .duration('10%'))
      .toString();

    expect(tx).toBe('du_10p,eo_4p,so_3p');
  });

  it('Creates a Transformation with volume string', () => {
    const tx = new Transformation()
      .videoEdit(VideoEdit.volume('5db'))
      .toString();

    expect(tx).toBe('e_volume:5db');
  });

  it('Creates a Transformation with volume number', () => {
    const tx = new Transformation()
      .videoEdit(VideoEdit.volume(10))
      .toString();

    expect(tx).toBe('e_volume:10');
  });

  it('Creates a Transformation with volume Volume.mute()', () => {
    const tx = new Transformation()
      .videoEdit(VideoEdit.volume(Volume.mute()))
      .toString();

    expect(tx).toBe('e_volume:mute');
  });

  it('Creates a Transformation with volume Volume.byDecibels()', () => {
    const tx = new Transformation()
      .videoEdit(VideoEdit.volume(Volume.byDecibels(5)))
      .toString();

    expect(tx).toBe('e_volume:5db');
  });

  it('Creates a Transformation with volume Volume.byPercent()', () => {
    const tx = new Transformation()
      .videoEdit(VideoEdit.volume(Volume.byPercent('10')))
      .toString();

    expect(tx).toBe('e_volume:10');
  });

  it('Tests a preview transformation for a video', () => {
    const tx = new Transformation()
      .videoEdit(
        VideoEdit.preview()
          .duration(5)
          .minimumSegmentDuration(1)
          .maximumSegments(10)
      ).toString();

    expect(tx).toContain('e_preview:duration_5.0:max_seg_10:min_seg_dur_1.0');
  });
});
