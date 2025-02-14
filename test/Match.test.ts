import Match from "../src/Match";

describe("Match score suite", () => {
  test("Initial test", () => {
    expect(new Match().score()).toEqual("0-0");
  });
});
