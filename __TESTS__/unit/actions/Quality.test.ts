import {ChromaSubSampling} from "../../../src/qualifiers/chromaSubSampling";
import {Quality} from "../../../src/qualifiers/quality";
import {Delivery} from "../../../src/actions/delivery";
import {Transformation} from "../../../src";


describe('Tests for Transformation Action -- Delivery.quality', () => {
  it('Creates a Transformation with quality', () => {
    const tx = new Transformation()
      .delivery(Delivery.quality(Quality.auto()))
      .toString();

    expect(tx).toBe('q_auto');
  });

  it('Creates a Transformation with quality:best', () => {
    const tx = new Transformation()
      .delivery(Delivery.quality(Quality.autoBest()))
      .toString();

    expect(tx).toBe('q_auto:best');
  });

  it('Creates a Transformation with quality:eco', () => {
    const tx = new Transformation()
      .delivery(Delivery.quality(Quality.autoEco()))
      .toString();

    expect(tx).toBe('q_auto:eco');
  });

  it('Creates a Transformation with quality:good', () => {
    const tx = new Transformation()
      .delivery(Delivery.quality(Quality.autoGood()))
      .toString();

    expect(tx).toBe('q_auto:good');
  });

  it('Creates a Transformation with quality:low', () => {
    const tx = new Transformation()
      .delivery(Delivery.quality(Quality.autoLow()))
      .toString();

    expect(tx).toBe('q_auto:low');
  });

  it('Creates a Transformation with jpegmini', () => {
    const tx = new Transformation()
      .delivery(Delivery.quality(Quality.jpegmini()))
      .toString();

    expect(tx).toBe('q_jpegmini');
  });

  it('Creates a Transformation with jpegmini HIGH', () => {
    const tx = new Transformation()
      .delivery(Delivery.quality(Quality.jpegminiHigh()))
      .toString();

    expect(tx).toBe('q_jpegmini:1');
  });

  it('Creates a Transformation with jpegmini MEDIUM', () => {
    const tx = new Transformation()
      .delivery(Delivery.quality(Quality.jpegminiMedium()))
      .toString();

    expect(tx).toBe('q_jpegmini:2');
  });

  it('Creates a Transformation with jpegmini BEST', () => {
    const tx = new Transformation()
      .delivery(Delivery.quality(Quality.jpegminiBest()))
      .toString();

    expect(tx).toBe('q_jpegmini:0');
  });

  it('Creates a Transformation with level', () => {
    const tx = new Transformation()
      .delivery(Delivery.quality('75').chromaSubSampling(ChromaSubSampling.chroma420()))
      .toString();

    expect(tx).toBe('q_75:420');
  });

  it('Sets Quanitzation level', () => {
    const tx = new Transformation()
      .delivery(Delivery.quality('75').quantization(123))
      .toString();

    expect(tx).toBe('q_75:qmax_123');
  });
});
