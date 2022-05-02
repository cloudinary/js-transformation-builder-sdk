import {BlendMode} from "../../../src/qualifiers/blendMode";
import {Overlay} from "../../../src/actions/overlay";
import {Source} from "../../../src/qualifiers/source";
import {Transformation} from "../../../src";
import {sampleTxResizePad} from "../../TestUtils/transformations/sampleTxResizePad";
import {sampleTextStyle} from "../../TestUtils/transformations/sampleTextStyle";
import {sampleFacePosition} from "../../TestUtils/transformations/sampleFacePosition";
import {Format, png} from "../../../src/qualifiers/format";
import {Underlay} from "../../../src/actions/underlay";
import {Timeline} from "../../../src/qualifiers/timeline";
import {base64Encode} from "../../../src/internal/utils/base64Encode";
import {TextStyle} from "../../../src/qualifiers/textStyle";
import {TextFit} from "../../../src/qualifiers/textFit";

describe('Tests for overlay actions', () => {
  it('Tests Image on Image with publicID encoding', () => {
    const tx = new Transformation();
    tx.overlay(
      Overlay.source(Source.image("path/to/sample")
        .format(Format.png())
      )
    );

    expect(tx.toString()).toBe('l_path:to:sample.png/fl_layer_apply');
  });

  it('Tests Image on Image with format', () => {
    const tx = new Transformation();
    tx.overlay(
      Overlay.source(Source.image("sample")
        .format(Format.png())
      )
    );

    expect(tx.toString()).toBe('l_sample.png/fl_layer_apply');
  });

  it('Tests Image on Image with BlendMode and Position', () => {
    const tx = new Transformation();

    tx.overlay(Overlay.source(Source.image("sample"))
      .position(sampleFacePosition())
      .blendMode(BlendMode.screen())
    );

    expect(tx.toString()).toBe('l_sample/e_screen,fl_layer_apply,g_face');
  });

  it('Can use shortened BlendMode notation', () => {
    const tx = new Transformation();

    tx.overlay(Overlay.source(Source.image("sample"))
      .position(sampleFacePosition())
      .blendMode("mask")
    );

    expect(tx.toString()).toBe('l_sample/e_mask,fl_layer_apply,g_face');
  });

  it('Tests Image on Image with Transformation', () => {
    const tx = new Transformation();

    tx.overlay(
      Overlay.source(Source.image("sample")
        .transformation(sampleTxResizePad())
      )
    );

    expect(tx.toString()).toBe('l_sample/c_pad,w_100/fl_layer_apply');
  });

  it('Tests Video on Video with Transformation', () => {
    const tx = new Transformation();

    tx.overlay(
      Overlay.source(Source.video("sample")
        .transformation(sampleTxResizePad())
      )
    );

    expect(tx.toString()).toBe('l_video:sample/c_pad,w_100/fl_layer_apply');
  });

  it('Tests text on image', () => {
    const tx = new Transformation();
    const textStyle = sampleTextStyle();

    tx.overlay(Overlay.source(
      Source.text('Testing', textStyle)
        .backgroundColor('red')
        .textColor('blue')
    ));

    expect(tx.toString()).toBe(`b_red,co_blue,l_text:${textStyle.toString()}:Testing/fl_layer_apply`);
  });

  it('Tests text on image using a variable', () => {
    const tx = new Transformation();
    const textStyle = '$My_Variable';

    tx.overlay(Overlay.source(
      Source.text('Testing', textStyle)
        .backgroundColor('red')
        .textColor('blue')
    ));

    expect(tx.toString()).toBe(`b_red,co_blue,l_text:${textStyle.toString()}:Testing/fl_layer_apply`);
  });

  it('Tests text on image with RGB backgroundColor', () => {
    const tx = new Transformation();

    tx.overlay(Overlay.source(
      Source.text('Testing', new TextStyle('arial', 15))
        .backgroundColor('#FEB61FC2')
        .textColor('blue')
    ));

    expect(tx.toString()).toBe(`b_rgb:FEB61FC2,co_blue,l_text:arial_15:Testing/fl_layer_apply`);
  });

  it('Tests nested subtitles on image', () => {
    const tx = new Transformation();
    const textStyle = sampleTextStyle();

    tx.overlay(Overlay.source(
      Source.subtitles('path/to/subs.srt').textStyle(textStyle)
    ));

    expect(tx.toString()).toBe(`l_subtitles:${textStyle.toString()}:path:to:subs.srt/fl_layer_apply`);
  });

  it('Tests subtitle on without style', () => {
    const tx = new Transformation();

    tx.overlay(Overlay.source(
      Source.subtitles('subs.srt')
    ));

    expect(tx.toString()).toBe(`l_subtitles:subs.srt/fl_layer_apply`);
  });

  it('Tests subtitle on image', () => {
    const tx = new Transformation();
    const textStyle = sampleTextStyle();

    tx.overlay(Overlay.source(
      Source.subtitles('subs.srt')
        .textStyle(textStyle)
    ));

    expect(tx.toString()).toBe(`l_subtitles:${textStyle.toString()}:subs.srt/fl_layer_apply`);
  });

  it('Tests an overlay with a complete example', () => {
    const tx = new Transformation();

    tx.overlay(Overlay.source(Source.image("sample").transformation(sampleTxResizePad()))
      .position(sampleFacePosition())
      .blendMode(BlendMode.screen())
    );

    expect(tx.toString()).toBe('l_sample/c_pad,w_100/e_screen,fl_layer_apply,g_face');
  });

  it('Tests an image underlay with a complete example', () => {
    const tx = new Transformation();

    tx.underlay(Underlay.source(Source.image("sample").transformation(sampleTxResizePad()))
      .position(sampleFacePosition())
      .blendMode(BlendMode.screen())
    );

    expect(tx.toString()).toBe('u_sample/c_pad,w_100/e_screen,fl_layer_apply,g_face');
  });

  it('Tests a video(main asset) with an image underlay', () => {
    const tx = new Transformation();

    tx.underlay(Underlay.source(Source.image("sample").transformation(sampleTxResizePad()))
      .position(sampleFacePosition())
      .blendMode(BlendMode.screen())
    );

    // ensure toURL contains video/upload to confirm it's a video
    expect(tx.toString()).toContain('u_sample/c_pad,w_100/e_screen,fl_layer_apply,g_face');
  });

  it('Video on Video with timeline', () => {
    const tx = new Transformation();

    tx.overlay(Overlay.source(Source.video("sample").transformation(sampleTxResizePad()))
      .timeline(Timeline.position().startOffset(10).duration(20))
      .position(sampleFacePosition())
    );

    expect(tx.toString()).toBe('l_video:sample/c_pad,w_100/du_20,fl_layer_apply,g_face,so_10');
  });

  it('Tests a fetchSource without format', () => {
    const tx = new Transformation();
    const REMOTE_URL = "ci";
    const BASE64_URL = base64Encode(REMOTE_URL);

    tx.overlay(
      Overlay.source(
        Source.fetch(REMOTE_URL)
          .transformation(sampleTxResizePad())
      )
        .position(sampleFacePosition())
    );

    expect(tx.toString()).toContain(`l_fetch:${BASE64_URL}/${sampleTxResizePad().toString()}`);
  });

  it('Tests a fetchSource with format', () => {
    const tx = new Transformation();
    const REMOTE_URL = "https://res.cloudinary.com/demo/image/upload/ci";

    tx.overlay(
      Overlay.source(
        Source.fetch(REMOTE_URL)
          .transformation(sampleTxResizePad())
          .format(png())
      )
    );

    // This is a fully functional URL that should work in the browser.
    // Explicitly check the resulting base64 string
    expect(tx.toString()).toContain(`l_fetch:aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvY2k=.png/${sampleTxResizePad().toString()}`);
  });

  it("should not serialize a text source with exclamation mark", () => {
    const tx = new Transformation();
    const text = '!';
    const textSource = Source.text(text, 'arial_15');
    tx.overlay(Overlay.source(textSource));

    expect(tx.toString()).toContain("l_text:arial_15:!/fl_layer_apply");
  });

  it("textFit with alias", () => {
    const tx = new Transformation();
    const text = 'hello hello hello hello';
    const textSource = Source.text(text, 'arial_15').textFit(TextFit.size(400, 500));
    tx.overlay(Overlay.source(textSource));
    expect(tx.toString()).toContain("c_fit,w_400,h_500,l_text:arial_15:hello hello hello hello");
  });

  it("textFit with size", () => {
    const tx = new Transformation();
    const text = 'hello hello hello hello';
    const textSource = Source.text(text, 'arial_15').textFit(TextFit.size(400));
    tx.overlay(Overlay.source(textSource));
    expect(tx.toString()).toContain("c_fit,w_400,l_text:arial_15:hello hello hello hello");
  });

  it("textFit with size and height", () => {
    const tx = new Transformation();
    const text = 'hello hello hello hello';
    const textSource = Source.text(text, 'arial_15').textFit(TextFit.size(400).height(600));
    tx.overlay(Overlay.source(textSource));
    expect(tx.toString()).toContain("c_fit,w_400,h_600,l_text:arial_15:hello hello hello hello");
  });

  it("should serialize a fetch source", () => {
    const tx = new Transformation();
    const REMOTE_URL = 'http://res.cloudinary.com/demo/sample.jpg';
    const expected = 'l_fetch:aHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL3NhbXBsZS5qcGc=/fl_layer_apply';
    const actual = tx.overlay(Overlay.source(Source.fetch(REMOTE_URL))).toString();

    expect(actual).toBe(expected);
  });

  it("should serialize a unicode url of fetch source", () => {
    const tx = new Transformation();
    const REMOTE_URL = "https://upload.wikimedia.org/wikipedia/commons/2/2b/고창갯벌.jpg";
    const expected = "l_fetch:aHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8yLzJiLyVFQSVCMyVBMCVFQyVCMCVCRCVFQSVCMCVBRiVFQiVCMiU4Qy5qcGc=/fl_layer_apply";
    const actual = tx.overlay(Overlay.source(Source.fetch(REMOTE_URL))).toString();

    expect(actual).toBe(expected);
  });

  it("should support string interpolation", () => {
    const tx = new Transformation();
    const text = "$(start)hello";
    const textSource = Source.text(text, 'arial_15');
    tx.overlay(Overlay.source(textSource));

    expect(tx.toString()).toContain("l_text:arial_15:$(start)hello/fl_layer_apply");
  });

  it("should throw an exception if fontFamily or fontSize are not provided", () => {
    expect(() => new TextStyle(null, 17)).toThrow();
    expect(() => new TextStyle('arial', null)).toThrow();
  });
});
