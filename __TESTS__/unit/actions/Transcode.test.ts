import {AnimatedFormat} from "../../../src/qualifiers/animatedFormat";
import {AudioFrequency} from "../../../src/qualifiers/audioFrequency";
import {audioCodec, Transcode} from "../../../src/actions/transcode";
import {AudioCodec} from "../../../src/qualifiers/audioCodec";
import {StreamingProfile} from "../../../src/qualifiers/streamingProfile";
import {VideoCodec} from "../../../src/qualifiers/videoCodec";
import {VideoCodecLevel} from "../../../src/qualifiers/videoCodecLevel";
import {VideoCodecProfile} from "../../../src/qualifiers/videoCodecProfile";
import {scale} from "../../../src/actions/resize";
import {Transformation} from "../../../src";

describe('Tests for Transformation Action -- Transcode', () => {
  it('Creates a Transformation with audiocodec', () => {
    const tx = new Transformation()
      .transcode(Transcode.audioCodec(AudioCodec.aac()))
      .toString();

    expect(tx).toBe('ac_aac');
  });

  it('Can use shortened audioCodec notation', () => {
    const tx = new Transformation()
      .transcode(audioCodec('aac'))
      .toString();

    expect(tx).toBe('ac_aac');
  });

  it('Creates a Transformation with bitrate', () => {
    const tx = new Transformation()
      .transcode(Transcode.bitRate('500k'))
      .toString();

    expect(tx).toBe('br_500k');
  });

  it('Creates a Transformation with bitrate.constant', () => {
    const tx = new Transformation()
      .transcode(Transcode
        .bitRate(500).constant())
      .toString();

    expect(tx).toBe('br_500:constant');
  });

  it('Creates a Transformation with audioFrequency', () => {
    const tx = new Transformation()
      .transcode(Transcode
        .audioFrequency(AudioFrequency.FREQ11025()))
      .toString();

    expect(tx).toBe('af_11025');
  });

  it('Can use shortened audioFrequency notation', () => {
    const tx = new Transformation()
      .transcode(Transcode
        .audioFrequency(11025))
      .toString();

    expect(tx).toBe('af_11025');
  });

  it('Creates a Transformation with fps', () => {
    const tx = new Transformation()
      .transcode(Transcode
        .fps(20))
      .toString();

    expect(tx).toBe('fps_20');
  });

  it('Creates a Transformation with fpsRange from', () => {
    const tx = new Transformation()
      .transcode(Transcode
        .fpsRange(20))
      .toString();

    expect(tx).toBe('fps_20-');
  });

  it('Creates a Transformation with fpsRange from-to', () => {
    const tx = new Transformation()
      .transcode(Transcode
        .fpsRange(20, 20))
      .toString();

    expect(tx).toBe('fps_20-20');
  });

  it('Creates a Transformation with keyframeInterval', () => {
    const tx = new Transformation()
      .transcode(Transcode
        .keyframeInterval(0.4))
      .transcode(Transcode
        .keyframeInterval('0.8'))
      .toString();

    expect(tx).toBe('ki_0.4/ki_0.8');
  });

  it('Creates a Transformation with streamingProfile', () => {
    const tx = new Transformation()
      .transcode(Transcode
        .streamingProfile(StreamingProfile.fullHd()))
      .toString();

    expect(tx).toBe('sp_full_hd');
  });

  it('Can use shortened streamingProfile notation', () => {
    const tx = new Transformation()
      .transcode(Transcode
        .streamingProfile("full_hd"))
      .toString();

    expect(tx).toBe('sp_full_hd');
  });

  it('Creates a Transformation with toAnimated', () => {
    const tx = new Transformation()
      .transcode(Transcode
        .toAnimated(AnimatedFormat.gif()))
      .toString();

    expect(tx).toBe('f_gif,fl_animated');
  });

  it('Creates a Transformation with toAnimated webp', () => {
    const tx = new Transformation()
      .transcode(Transcode
        .toAnimated(AnimatedFormat.webp()))
      .toString();

    expect(tx).toBe('f_webp,fl_animated,fl_awebp');
  });

  it('Can use shortened toAnimated webp', () => {
    const tx = new Transformation()
      .transcode(Transcode
        .toAnimated('webp'))
      .toString();

    expect(tx).toBe('f_webp,fl_animated,fl_awebp');
  });

  it('Creates a Transformation with toAnimated and delay', () => {
    const tx = new Transformation()
      .transcode(Transcode
        .toAnimated('gif').delay(20))
      .toString();

    expect(tx).toBe('dl_20,f_gif,fl_animated');
  });

  it('Creates a Transformation with toAnimated, delay, sampling', () => {
    const tx = new Transformation()
      .transcode(Transcode
        .toAnimated(AnimatedFormat.gif()).delay(20).sampling('4s'))
      .toString();

    expect(tx).toBe('dl_20,f_gif,fl_animated,vs_4s');
  });

  it('Tests for simple videoCodec', () => {
    const tx = new Transformation().transcode(
      Transcode.videoCodec(VideoCodec.vp9())
    ).toString();
    expect(tx).toContain('vc_vp9');
  });

  it('Tests for all codec types', () => {
    expect(VideoCodec.vp8().toString()).toEqual('vc_vp8');
    expect(VideoCodec.proRes().toString()).toEqual('vc_prores');
    expect(VideoCodec.theora().toString()).toEqual('vc_theora');
    expect(VideoCodec.auto().toString()).toEqual('vc_auto');
  });

  it('Tests for all codecLevels', () => {
    // @TODO - do we need to change 3 to 3.0 in the transformation?
    expect(VideoCodecLevel.vcl30()).toEqual('3.0');
    expect(VideoCodecLevel.vcl31()).toEqual(3.1);
    expect(VideoCodecLevel.vcl40()).toEqual('4.0');
    expect(VideoCodecLevel.vcl41()).toEqual(4.1);
    expect(VideoCodecLevel.vcl42()).toEqual(4.2);
    expect(VideoCodecLevel.vcl50()).toEqual('5.0');
    expect(VideoCodecLevel.vcl51()).toEqual(5.1);
    expect(VideoCodecLevel.vcl52()).toEqual(5.2);
  });

  it('Tests for adv videoCodec', () => {
    const tx = new Transformation()
      .resize(scale().width(100))
      .transcode(
        Transcode.videoCodec(
          VideoCodec.h264()
            .profile(VideoCodecProfile.baseline())
            .level(VideoCodecLevel.vcl31())
        )
      ).toString();
    expect(tx).toContain('c_scale,w_100/vc_h264:baseline:3.1');
  });
});
