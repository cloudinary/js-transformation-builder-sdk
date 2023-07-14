import { Transformation } from "../../../src";
import { setFloat, setInteger, setString, Variable } from "../../../src/actions/variable";
import { Expression } from "../../../src/qualifiers/expression";

const { set } = Variable;
const { expression } = Expression;

describe("Tests for Transformation Action -- Variable", () => {
  it("tests common variable values", () => {
    expect(set("a", 30).toString()).toBe("$a_30");
    expect(set("a", "30").toString()).toBe("$a_!30!");
  });

  it("tests setFloat with common variable values", () => {
    expect(setFloat("a", -1).toString()).toBe(`$a_-1.0`);
    expect(setFloat("a", 0).toString()).toBe(`$a_0.0`);
    expect(setFloat("a", 1).toString()).toBe(`$a_1.0`);
    expect(setFloat("a", 0.01).toString()).toBe(`$a_0.01`);
  });

  it("tests setInteger with common variable values", () => {
    expect(setInteger("a", -1).toString()).toBe(`$a_-1`);
    expect(setInteger("a", 0).toString()).toBe(`$a_0`);
    expect(setInteger("a", 0.9).toString()).toBe(`$a_1`);
    expect(setInteger("a", 1).toString()).toBe(`$a_1`);
    expect(setInteger("a", 0.01).toString()).toBe(`$a_0`); // Round down
  });

  it("tests setString with common variable values", () => {
    // Strings are trivially supported, so this test tests for numbers
    expect(setString("a", -1).toString()).toBe(`$a_!-1!`);
    expect(setString("a", 0).toString()).toBe(`$a_!0!`);
    expect(setString("a", 1).toString()).toBe(`$a_!1!`);
    expect(setString("a", 0.01).toString()).toBe(`$a_!0.01!`);
  });

  it("Creates a Transformation with number variable", () => {
    const tx = new Transformation().addVariable(set("a", 30)).toString();

    expect(tx).toBe("$a_30");
  });

  it("Creates a Transformation with number variable asFloat", () => {
    const tx = new Transformation().addVariable(set("a", 30).asFloat()).toString();

    expect(tx).toBe("$a_30_to_f");
  });

  it("Creates a Transformation with number variable asInteger", () => {
    const tx = new Transformation().addVariable(set("a", 30).asInteger()).toString();

    expect(tx).toBe("$a_30_to_i");
  });

  it("Creates a Transformation with a string variable", () => {
    const tx = new Transformation().addVariable(set("a", "bbb")).toString();

    expect(tx).toBe("$a_!bbb!");
  });

  it("Creates a Transformation with a string variable and asInteger", () => {
    const tx = new Transformation().addVariable(set("a", "bbb").asInteger()).toString();

    expect(tx).toBe("$a_!bbb!_to_i");
  });

  it("Creates a Transformation with a string variable and asFloat", () => {
    const tx = new Transformation().addVariable(set("a", "bbb").asFloat()).toString();

    expect(tx).toBe("$a_!bbb!_to_f");
  });

  it("Creates a Transformation with expression", () => {
    const tx = new Transformation()
      .addVariable(Variable.set("myexp", Expression.expression("initial_width + 100 / 3")))
      .toString();

    expect(tx).toBe("$myexp_iw_add_100_div_3");
  });

  it("Creates a Transformation with expression and asFloat", () => {
    const tx = new Transformation()
      .addVariable(Variable.set("myexp", expression("initial_width + 100 / 3")).asFloat())
      .toString();

    expect(tx).toBe("$myexp_iw_add_100_div_3_to_f");
  });

  it("Creates a Transformation with array", () => {
    const tx = new Transformation().addVariable(Variable.set("list", ["a", "b", "c"])).toString();

    expect(tx).toBe("$list_!a:b:c!");
  });

  it("Creates a Transformation with setReference", () => {
    const tx = new Transformation().addVariable(Variable.setAssetReference("myexp", "my_file")).toString();

    expect(tx).toBe("$myexp_ref:!my_file!");
  });

  it("Creates a Transformation with setReference and asInteger", () => {
    const tx = new Transformation().addVariable(Variable.setAssetReference("myexp", "my_file").asInteger()).toString();

    expect(tx).toBe("$myexp_ref:!my_file!_to_i");
  });

  it("Creates a Transformation with setReference and asFloat", () => {
    const tx = new Transformation().addVariable(Variable.setAssetReference("myexp", "my_file").asFloat()).toString();

    expect(tx).toBe("$myexp_ref:!my_file!_to_f");
  });

  it("Creates a Transformation with setFromContext", () => {
    const tx = new Transformation().addVariable(Variable.setFromContext("myexp", "my_file")).toString();

    expect(tx).toBe("$myexp_ctx:!my_file!");
  });

  it("Creates a Transformation with setFromContext and asInteger", () => {
    const tx = new Transformation().addVariable(Variable.setFromContext("myexp", "my_file").asInteger()).toString();

    expect(tx).toBe("$myexp_ctx:!my_file!_to_i");
  });

  it("Creates a Transformation with setFromContext and asFloat", () => {
    const tx = new Transformation().addVariable(Variable.setFromContext("myexp", "my_file").asFloat()).toString();

    expect(tx).toBe("$myexp_ctx:!my_file!_to_f");
  });

  it("Creates a Transformation with setFromMetadata", () => {
    const tx = new Transformation().addVariable(Variable.setFromMetadata("myexp", "my_file")).toString();

    expect(tx).toBe("$myexp_md:!my_file!");
  });

  it("Creates a Transformation with setFromMetadata and asInteger", () => {
    const tx = new Transformation().addVariable(Variable.setFromMetadata("myexp", "my_file").asInteger()).toString();

    expect(tx).toBe("$myexp_md:!my_file!_to_i");
  });

  it("Creates a Transformation with setFromMetadata and asFloat", () => {
    const tx = new Transformation().addVariable(Variable.setFromMetadata("myexp", "my_file").asFloat()).toString();

    expect(tx).toBe("$myexp_md:!my_file!_to_f");
  });

  it("Tests special cases are not modified in expressions", () => {
    ["$myheight", "$heightheight", "$theheight", "$__height"].forEach((exp: string) => {
      expect(Expression.expression(exp).toString()).toBe(exp);
    });
  });
});
