import {Format} from "../../../src/qualifiers/format";
import {Quality} from "../../../src/qualifiers/quality";
import {ColorSpace} from "../../../src/qualifiers/colorSpace";
import {Dpr} from "../../../src/qualifiers/dpr";
import {Delivery} from "../../../src/actions/delivery";
import {Transformation} from "../../../src";
import {Progressive} from "../../../src/qualifiers/progressive";


const {format} = Delivery;

describe('Tests for Transformation Action -- Delivery', () => {
  it('Ensure namespace is correctly populated', () => {
    expect(Delivery.format).toEqual(format);
  });

  it('Creates a Transformation with format using string', () => {
    const tx = new Transformation()
      .delivery(Delivery.format(Format.auto()))
      .toString();

    expect(tx).toBe('f_auto');
  });

  it('Creates a Transformation with quality alias', () => {
    const tx = new Transformation()
      .quality('auto')
      .toString();
    expect(tx).toBe('q_auto');
  });

  it('Creates a Transformation with format alias', () => {
    const tx = new Transformation()
      .format('gif')
      .toString();
    expect(tx).toBe('f_gif');
  });

  it('Creates a Transformation with Format', () => {
    const tx = new Transformation()
      .delivery(format(Format.gif()))
      .toString();

    expect(tx).toBe('f_gif');
  });

  it('Creates a Transformation with gif.lossy()', () => {
    const tx = new Transformation()
      .delivery(format(Format.gif()).lossy())
      .toString();

    expect(tx).toBe('f_gif,fl_lossy');
  });

  it('Creates a Transformation with auto.lossy()', () => {
    const tx = new Transformation()
      .delivery(format(Format.auto()).lossy())
      .toString();

    expect(tx).toBe('f_auto,fl_lossy');
  });

  it('Creates a Transformation with jpg.progressive()', () => {
    const tx = new Transformation()
      .delivery(format(Format.jpg()).progressive())
      .toString();

    expect(tx).toBe('f_jpg,fl_progressive');
  });

  it('Creates a Transformation with png', () => {
    const tx = new Transformation()
      .delivery(format(Format.png()))
      .toString();

    expect(tx).toBe('f_png');
  });

  it('Creates a Transformation with bmp', () => {
    const tx = new Transformation()
      .delivery(format(Format.bmp()))
      .toString();

    expect(tx).toBe('f_bmp');
  });

  it('Creates a Transformation with ico', () => {
    const tx = new Transformation()
      .delivery(format(Format.ico()))
      .toString();

    expect(tx).toBe('f_ico');
  });

  it('Creates a Transformation with pdf', () => {
    const tx = new Transformation()
      .delivery(format(Format.pdf()))
      .toString();

    expect(tx).toBe('f_pdf');
  });

  it('Creates a Transformation with eps', () => {
    const tx = new Transformation()
      .delivery(format(Format.eps()))
      .toString();

    expect(tx).toBe('f_eps');
  });

  it('Creates a Transformation with tiff', () => {
    const tx = new Transformation()
      .delivery(format(Format.tiff()))
      .toString();

    expect(tx).toBe('f_tiff');
  });

  it('Creates a Transformation with webp', () => {
    const tx = new Transformation()
      .delivery(format(Format.webp()))
      .toString();

    expect(tx).toBe('f_webp');
  });

  it('Creates a Transformation with psd', () => {
    const tx = new Transformation()
      .delivery(format(Format.psd()))
      .toString();

    expect(tx).toBe('f_psd');
  });

  it('Creates a Transformation with jpc', () => {
    const tx = new Transformation()
      .delivery(format(Format.jpc()))
      .toString();

    expect(tx).toBe('f_jpc');
  });

  it('Creates a Transformation with wdp', () => {
    const tx = new Transformation()
      .delivery(format(Format.wdp()))
      .toString();

    expect(tx).toBe('f_wdp');
  });

  it('Creates a Transformation with webp', () => {
    const tx = new Transformation()
      .delivery(format(Format.webp()))
      .toString();

    expect(tx).toBe('f_webp');
  });


  it('Creates a Transformation with svg', () => {
    const tx = new Transformation()
      .delivery(format(Format.svg()))
      .toString();

    expect(tx).toBe('f_svg');
  });

  it('Creates a Transformation with heic', () => {
    const tx = new Transformation()
      .delivery(format(Format.heic()))
      .toString();

    expect(tx).toBe('f_heic');
  });

  it('Creates a Transformation with flif', () => {
    const tx = new Transformation()
      .delivery(format(Format.flif()))
      .toString();

    expect(tx).toBe('f_flif');
  });

  it('Creates a Transformation with ai', () => {
    const tx = new Transformation()
      .delivery(format(Format.ai()))
      .toString();

    expect(tx).toBe('f_ai');
  });

  it('Creates a Transformation with jp2', () => {
    const tx = new Transformation()
      .delivery(format(Format.jp2()))
      .toString();

    expect(tx).toBe('f_jp2');
  });

  it('Creates a Transformation with Delivery.dpr', () => {
    const tx = new Transformation()
      .delivery(Delivery.dpr('2.0'))
      .toString();

    expect(tx).toBe('dpr_2.0');
  });

  it('Creates a Transformation with Delivery.dpr', () => {
    const tx = new Transformation()
      .delivery(Delivery.dpr(Dpr.auto()))
      .toString();

    expect(tx).toBe('dpr_auto');
  });

  it('Creates a Transformation with Delivery.quality', () => {
    const tx = new Transformation()
      .delivery(Delivery.quality('80'))
      .toString();

    expect(tx).toBe('q_80');
  });

  it('Creates a Transformation with Delivery.quality.auto()', () => {
    const tx = new Transformation()
      .delivery(Delivery.quality(Quality.auto()))
      .toString();

    expect(tx).toBe('q_auto');
  });

  it('Can use shortened quality notation', () => {
    const tx = new Transformation()
      .delivery(Delivery.quality('auto:best'))
      .toString();

    expect(tx).toBe('q_auto:best');
  });

  it('Creates a Transformation with Delivery.density', () => {
    const tx = new Transformation()
      .delivery(Delivery.density(150))
      .toString();

    expect(tx).toBe('dn_150');
  });

  it('Creates a Transformation with Delivery.defaultImage', () => {
    const tx = new Transformation()
      .delivery(Delivery.defaultImage('default'))
      .toString();

    expect(tx).toBe('d_default');
  });

  it('Creates a Transformation with Delivery.colorspace', () => {
    const tx = new Transformation()
      .delivery(Delivery.colorSpace(ColorSpace.noCmyk()))
      .toString();

    expect(tx).toBe('cs_no_cmyk');
  });

  it('Creates a Transformation with shortened ColorSpaceType', () => {
    const tx = new Transformation()
      .delivery(Delivery.colorSpace("no_cmyk"))
      .toString();

    expect(tx).toBe('cs_no_cmyk');
  });

  it('Creates a Transformation with Delivery.ColorSpaceFromICC', () => {
    const tx = new Transformation()
      .delivery(Delivery.colorSpaceFromICC('sample'))
      .toString();

    expect(tx).toBe('cs_icc:sample');
  });

  it('Created delivery formats with progressive', () => {
    // f_jpg,fl_progressive
    const tx = new Transformation().delivery(
      Delivery.format(Format.jpg()).progressive(Progressive.progressive())
    ).toString();

    expect(tx).toContain('f_jpg,fl_progressive');
  });



  it('Created delivery formats with progressive', () => {
    // f_jpg,fl_progressive
    const tx = new Transformation().delivery(
      Delivery.format(Format.jpg()).progressive()
    ).toString();

    expect(tx).toContain('f_jpg,fl_progressive');
  });

  it('Created delivery formats with progressive:semi', () => {
    // f_jpg,fl_progressive
    const tx = new Transformation().delivery(
      Delivery.format(Format.jpg()).progressive(Progressive.semi())
    ).toString();

    expect(tx).toContain('f_jpg,fl_progressive:semi');
  });

  it('Can use shortened progressive:semi notation', () => {
    // f_jpg,fl_progressive
    const tx = new Transformation().delivery(
      Delivery.format(Format.jpg()).progressive("semi")
    ).toString();

    expect(tx).toContain('f_jpg,fl_progressive:semi');
  });

  it('Created delivery formats with progressive:steep', () => {
    // f_jpg,fl_progressive
    const tx = new Transformation().delivery(
      Delivery.format(Format.jpg()).progressive(Progressive.steep())
    ).toString();

    expect(tx).toContain('f_jpg,fl_progressive:steep');
  });

  it('Created delivery formats with progressive:none', () => {
    // f_jpg,fl_progressive
    const tx = new Transformation().delivery(
      Delivery.format(Format.jpg()).progressive(Progressive.none())
    ).toString();

    expect(tx).toContain('f_jpg,fl_progressive:none');
  });

  it('Created delivery formats with progressive:none as a string', () => {
    // f_jpg,fl_progressive
    const tx = new Transformation().delivery(
      Delivery.format(Format.jpg()).progressive('none')
    ).toString();

    expect(tx).toContain('f_jpg,fl_progressive:none');
  });

  it('Can use shortened format notation', () => {
    // f_jpg,fl_progressive
    const tx = new Transformation().delivery(format('jpg')).toString();

    expect(tx).toContain('f_jpg');
  });
});
