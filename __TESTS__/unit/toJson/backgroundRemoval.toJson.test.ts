import { Transformation } from "../../../src";
import { ForegroundObject, cat, bus, diningTable } from "../../../src/qualifiers/foregroundObject";
import { Effect } from "../../../src/actions/effect";

describe("BackgroundRemoval toJson()", () => {
  it("with fineEdges and hints", () => {
    const transformation = new Transformation().addAction(
      Effect.backgroundRemoval().fineEdges(true).hints([ForegroundObject.CAT, ForegroundObject.DOG])
    );
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: "backgroundRemoval",
          fineEdges: true,
          hints: [ForegroundObject.CAT, ForegroundObject.DOG],
        },
      ],
    });
  });
  it("with functional hints as spread arg", () => {
    const transformation = new Transformation().addAction(
      Effect.backgroundRemoval().fineEdges(true).hints(cat(), bus(), diningTable())
    );
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: "backgroundRemoval",
          fineEdges: true,
          hints: [ForegroundObject.CAT, ForegroundObject.BUS, ForegroundObject.DINING_TABLE],
        },
      ],
    });
  });
  it("with default fineEdges", () => {
    const transformation = new Transformation().addAction(Effect.backgroundRemoval().fineEdges());
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: "backgroundRemoval",
          fineEdges: true,
        },
      ],
    });
  });
  it("with false fineEdges", () => {
    const transformation = new Transformation().addAction(Effect.backgroundRemoval().fineEdges(false));
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: "backgroundRemoval",
          fineEdges: false,
        },
      ],
    });
  });
  it("without fineEdges", () => {
    const transformation = new Transformation().addAction(Effect.backgroundRemoval());
    expect(transformation.toJson()).toStrictEqual({
      actions: [
        {
          actionType: "backgroundRemoval",
        },
      ],
    });
  });
});
