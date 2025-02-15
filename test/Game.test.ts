import Game from "../src/Game"
import { PLAYER_1, PLAYER_2 } from "../src/TennisCommons"

describe("Straight game win", () => {
  let game: Game
  beforeAll(() => {
    game = new Game()
  })

  test("score should be 0-0 just before start of the game", () => {
    expect(game.score()).toEqual("0-0")
    expect(game.isCompleted()).toEqual(false)
  })

  test("score should be 15-0 after player 1 won the first game", () => {
    game.pointWonBy(PLAYER_1)
    expect(game.score()).toEqual("15-0")
    expect(game.isCompleted()).toEqual(false)
  })

  test("score should be 30-0 after player 1 won 2 consecutive games", () => {
    game.pointWonBy(PLAYER_1)
    expect(game.score()).toEqual("30-0")
    expect(game.isCompleted()).toEqual(false)
  })

  test("score should be 40-0 after player 1 won 3 consecutive games", () => {
    game.pointWonBy(PLAYER_1)
    expect(game.score()).toEqual("40-0")
    expect(game.isCompleted()).toEqual(false)
  })

  test("game is won by player 1 after winning 4 consecutive games", () => {
    game.pointWonBy(PLAYER_1)
    expect(game.isCompleted()).toEqual(true)
    expect(game.playerWinning()).toEqual(PLAYER_1)
  })
})

describe("After Three Equal wins", () => {
  let game: Game
  beforeAll(() => {
    game = new Game()
  })

  test("score 40-40 and status should be Deuce", () => {
    game.pointWonBy(PLAYER_1)
    game.pointWonBy(PLAYER_1)
    game.pointWonBy(PLAYER_1)
    game.pointWonBy(PLAYER_2)
    game.pointWonBy(PLAYER_2)
    game.pointWonBy(PLAYER_2)

    expect(game.score()).toEqual("Deuce")
    expect(game.isDeuce()).toEqual(true)
    expect(game.isAdvantage()).toEqual(false)
    expect(game.isCompleted()).toEqual(false)
    expect(game.playerWinning()).toEqual("")
  })

  test("after 40-40 winning one more", () => {
    game.pointWonBy(PLAYER_2)

    expect(game.score()).toEqual("Advantage")
    expect(game.isAdvantage()).toEqual(true)
    expect(game.playerWinning()).toEqual(PLAYER_2)
  })

  test("back to deuce when other player win after advantage", () => {
    game.pointWonBy(PLAYER_1)

    expect(game.isDeuce()).toEqual(true)
  })

  test("after deuce, need 2 consecutive wins to win the game", () => {
    game.pointWonBy(PLAYER_1)
    game.pointWonBy(PLAYER_1)

    expect(game.isCompleted()).toEqual(true)
    expect(game.playerWinning()).toEqual(PLAYER_1)
  })
})
