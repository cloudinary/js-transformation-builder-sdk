import {PSDTools} from "../../../src/actions/psdTools";
import {Transformation} from "../../../src";

describe('Tests for Transformation Action -- PSDTools', () => {
  it('Creates a Transformation with clip number', () => {
    const tx = new Transformation()
      .psdTools(PSDTools.clip().byIndex(9))
      .toString();

    expect(tx).toBe('fl_clip,pg_9');
  });

  it('Creates a Transformation with clip string', () => {
    const tx = new Transformation()
      .psdTools(PSDTools.clip().byName('path'))
      .toString();

    expect(tx).toBe('fl_clip,pg_name:path');
  });

  it('Creates a Transformation with clip evenOdd', () => {
    const tx = new Transformation()
      .psdTools(PSDTools.clip().byIndex(9).evenOdd())
      .toString();

    expect(tx).toBe('fl_clip_evenodd,pg_9');
  });

  it('Creates a Transformation with getLayer.byNumber', () => {
    const tx = new Transformation()
      .psdTools(PSDTools.getLayer().byIndex(4))
      .toString();

    expect(tx).toBe('pg_4');
  });

  it('Creates a Transformation with getLayer.byRange', () => {
    const tx = new Transformation()
      .psdTools(PSDTools.getLayer().byRange(4, 10))
      .toString();

    expect(tx).toBe('pg_4-10');
  });

  it('Creates a Transformation with getLayer.byName', () => {
    const tx = new Transformation()
      .psdTools(PSDTools.getLayer().byName('sample'))
      .toString();

    expect(tx).toBe('pg_name:sample');
  });

  it('Creates a Transformation with smartObject.byIndex', () => {
    const tx = new Transformation()
      .psdTools(PSDTools.smartObject().byIndex(8).byIndex(5))
      .toString();

    expect(tx).toBe('pg_embedded:8;5');
  });

  it('Creates a Transformation with smartObject.byLayerName', () => {
    const tx = new Transformation()
      .psdTools(PSDTools.smartObject().byLayerName('myLayer').byLayerName('myLayer2'))
      .toString();

    expect(tx).toBe('pg_embedded:name:myLayer;myLayer2');
  });

  it('Uses multiple qualifiers', () => {
    expect(PSDTools
      .getLayer()
      .byIndex(1)
      .byRange(5, 7)
      .toString()
    ).toBe('pg_1;5-7'); // pg_1;5-7
    expect(PSDTools
      .getLayer()
      .byRange(4, 7)
      .byIndex(9)
      .toString()
    ).toBe('pg_4-7;9');
    expect(PSDTools
      .getLayer()
      .byName("lala")
      .byName('fofo')
      .toString()
    ).toBe('pg_name:lala;fofo');
  });
});
