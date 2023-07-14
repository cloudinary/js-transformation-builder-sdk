import { byRadius, max } from "actions/roundCorners";
import { Transformation } from "../../../src";

describe("Tests for Transformation Action -- RoundCorners", () => {
  it("Ensure roundCorners accepts 1 radius", () => {
    const tx = new Transformation().roundCorners(byRadius(25)).toString();
    expect(tx).toContain("r_25");
  });

  it("Ensure roundCorners accepts 2 radius", () => {
    const tx = new Transformation().roundCorners(byRadius(25, 20)).toString();
    expect(tx).toContain("r_25:20");
  });

  it("Ensure roundCorners accepts 3 radius", () => {
    const tx = new Transformation().roundCorners(byRadius(25, 20, 15)).toString();
    expect(tx).toContain("r_25:20:15");
  });

  it("Ensure roundCorners accepts 4 radius", () => {
    const tx = new Transformation().roundCorners(byRadius(25, 20, 15, 10)).toString();
    expect(tx).toContain("r_25:20:15:10");
  });

  it("Ensure roundCorners accepts 4 radius, including zeroes", () => {
    const tx = new Transformation().roundCorners(byRadius(25, 0, 0, 0)).toString();
    expect(tx).toContain("r_25:0:0:0");
  });

  it("Ensure roundCorners accepts max radius", () => {
    const tx = new Transformation().roundCorners(max()).toString();
    expect(tx).toContain("r_max");
  });
});
