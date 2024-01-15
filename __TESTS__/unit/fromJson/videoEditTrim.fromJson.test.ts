import {fromJson} from "../../../src/internal/fromJson";
import {ITrimActionModel} from "../../../src/internal/models/ITrimActionModel";

describe('videoEdit.trim fromJson', () => {
  it('should generate TrimAction from model', () => {
    const trimModel: ITrimActionModel = {
      actionType: 'trimVideo',
      duration: '30%',
    };

    const transformation = fromJson({actions: [trimModel]});

    expect(transformation.toString()).toStrictEqual('du_30p');
  });

  it('should generate ConcatenateAction with transition from model', () => {
    const trimModel: ITrimActionModel = {
      actionType: 'trimVideo',
      startOffset: 3,
      endOffset: 5,
    };

    const transformation = fromJson({actions: [trimModel]});
    expect(transformation.toString()).toStrictEqual('eo_5,so_3');
  });

  it('should generate ConcatenateAction with ImageSource and transition from model', () => {
    const trimModel: ITrimActionModel = {
      actionType: 'trimVideo',
      startOffset: 3,
      duration: 5,
    };

    const transformation = fromJson({actions: [trimModel]});

    expect(transformation.toString()).toStrictEqual('du_5,so_3');
  });

  it('should generate auto offsets', () => {
    const trimModel: ITrimActionModel = {
      actionType: 'trimVideo',
      startOffset: "auto",
      endOffset: "auto",
      duration: 5,
    };

    const transformation = fromJson({actions: [trimModel]});

    expect(transformation.toString()).toStrictEqual('du_5,eo_auto,so_auto');
  });
});
