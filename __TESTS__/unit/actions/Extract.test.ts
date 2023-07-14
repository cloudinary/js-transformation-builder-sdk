import { Extract } from "../../../src/actions/extract";
import { Transformation } from "../../../src";

describe("Tests for Transformation Action -- Extract", () => {
  it("Creates a Transformation with getFrame.byNumber", () => {
    const tx = new Transformation().extract(Extract.getFrame().byNumber(4)).toString();

    expect(tx).toBe("pg_4");
  });

  it("Creates a Transformation with getFrame.byRange", () => {
    const tx = new Transformation().extract(Extract.getFrame().byRange(4, 10)).toString();

    expect(tx).toBe("pg_4-10");
  });

  it("Uses multiple qualifiers", () => {
    expect(Extract.getFrame().byNumber(1).byRange(5, 7).toString()).toBe("pg_1;5-7"); // pg_1;5-7

    expect(Extract.getFrame().byRange(4, 7).byNumber(9).toString()).toBe("pg_4-7;9");
  });

  it("Uses multiple qualifeirs in getPage", () => {
    expect(Extract.getPage().byNumber(1).byRange(5, 7).toString()).toBe("pg_1;5-7"); // pg_1;5-7

    expect(Extract.getPage().byRange(4, 7).byNumber(9).toString()).toBe("pg_4-7;9");
  });
});
