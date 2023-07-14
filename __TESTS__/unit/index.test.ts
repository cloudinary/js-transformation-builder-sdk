import { Transformation, Qualifiers, Actions } from "../../src/index";

describe("Ensures index exports correctly", () => {
  it("Exports correctly", () => {
    expect(Transformation).toBeDefined();
    expect(Qualifiers).toBeDefined();
    expect(Actions).toBeDefined();
  });
});
