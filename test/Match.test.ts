import Match from "../src/Match";

describe("Match score suite", () => {
  test("Should show initial score at the start", () => {
    expect(new Match().score()).toEqual("0-0");
  });
});
