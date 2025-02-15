import Game from "../src/Game";

describe("Straight game win", () => {
  let game: Game;
  beforeAll(() => {
      game = new Game();
    }
  );

  test("score should be 0-0 just before start of the game", () => {
    expect(game.score()).toEqual("0-0");
    expect(game.isCompleted()).toEqual(false);
  });

  test("score should be 15-0 after player 1 won the first game", () => {
    game.pointWonBy("1");
    expect(game.score()).toEqual("15-0");
    expect(game.isCompleted()).toEqual(false);
  });

  test("score should be 30-0 after player 1 won 2 consecutive games", () => {
    game.pointWonBy("1");
    expect(game.score()).toEqual("30-0");
    expect(game.isCompleted()).toEqual(false);
  });

  test("score should be 40-0 after player 1 won 3 consecutive games", () => {
    game.pointWonBy("1");
    expect(game.score()).toEqual("40-0");
    expect(game.isCompleted()).toEqual(false);
  });

  test("game is won by player 1 after winning 4 consecutive games", () => {
    game.pointWonBy("1");
    expect(game.isCompleted()).toEqual(true);
    expect(game.playerWinning()).toEqual("1");
  });
});

describe("After Three Equal wins", () => {
  let game: Game;
  beforeAll(() => {
      game = new Game();
    }
  );

  test("score 40-40 and status should be Deuce", () => {
    game.pointWonBy("1");
    game.pointWonBy("1");
    game.pointWonBy("1");
    game.pointWonBy("2");
    game.pointWonBy("2");
    game.pointWonBy("2");

    expect(game.isDeuce()).toEqual(true);
    expect(game.isAdvantage()).toEqual(false);
    expect(game.isCompleted()).toEqual(false);
    expect(game.playerWinning()).toEqual("");
  });

  test("after 40-40 winning one more", () => {

    game.pointWonBy("2");

    expect(game.isDeuce()).toEqual(false);
    expect(game.isAdvantage()).toEqual(true);
    expect(game.isCompleted()).toEqual(false);
    expect(game.playerWinning()).toEqual("2");
  });

  test("back to deuce when other player win after advantage", () => {

    game.pointWonBy("1");

    expect(game.isDeuce()).toEqual(true);
    expect(game.isAdvantage()).toEqual(false);
    expect(game.isCompleted()).toEqual(false);
    expect(game.playerWinning()).toEqual("");
  });

  test("after deuce, need 2 consecutive wins to win the game", () => {

    game.pointWonBy("1");
    game.pointWonBy("1");

    expect(game.isDeuce()).toEqual(false);
    expect(game.isAdvantage()).toEqual(false);
    expect(game.isCompleted()).toEqual(true);
    expect(game.playerWinning()).toEqual("1");
  });

});