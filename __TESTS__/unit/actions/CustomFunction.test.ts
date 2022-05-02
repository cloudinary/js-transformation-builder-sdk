import {CustomFunction} from "../../../src/actions/customFunction";
import {Transformation} from "../../../src";


describe('Tests for Transformation Action -- NamedTransformation', () => {
  it ('Works with wasm', () => {
    const tx = new Transformation()
      .customFunction(CustomFunction.wasm('my/example.wasm')).toString();

    expect(tx).toContain('fn_wasm:my:example.wasm');
  });

  it ('Works with remote', () => {
    const tx = new Transformation()
      .customFunction(CustomFunction.remote('https://my.preprocess.custom/function')).toString();

    expect(tx).toContain('fn_remote:aHR0cHM6Ly9teS5wcmVwcm9jZXNzLmN1c3RvbS9mdW5jdGlvbg');
  });

  it ('Works with remote preprocessed', () => {
    const tx = new Transformation()
      .customFunction(CustomFunction.remote('https://my.preprocess.custom/function').preprocess()).toString();

    expect(tx).toContain('fn_pre:remote:aHR0cHM6Ly9teS5wcmVwcm9jZXNzLmN1c3RvbS9mdW5jdGlvbg');
  });
});
