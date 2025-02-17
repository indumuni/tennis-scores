
import Players from "../src/Players"
import TennisSet from "../src/TennisSet"
import Game from "../src/Game"
import SetTiebreaker from "../src/SetTiebreaker"
import { PLAYER_1, PLAYER_2 } from "../src/TennisCommons"

const PLAYER_1_NAME = "Player 1"
const PLAYER_2_NAME = "Player 2"

describe("Match score suite", () => {
  let set: TennisSet
  beforeAll(() => {
    let players = new Players(PLAYER_1_NAME, PLAYER_2_NAME)
    set = new TennisSet(players, new Game(), new SetTiebreaker())
  })

  test("Should show initial score at the start", () => {
    expect(set.score()).toEqual("0-0, 0-0")
  })

  test("Should show score when Player1 won first point", () => {
    set.pointWonBy(PLAYER_1)
    expect(set.score()).toEqual("0-0, 15-0")
  })

  test("Should show score when Player1 won second point", () => {
    set.pointWonBy(PLAYER_1)
    expect(set.score()).toEqual("0-0, 30-0")
  })

  test("Should show score when Player1 won third point", () => {
    set.pointWonBy(PLAYER_1)
    expect(set.score()).toEqual("0-0, 40-0")
  })

  test("should reflect game winning score ", () => {
    set.pointWonBy(PLAYER_1)
    expect(set.score()).toEqual("1-0, 0-0")
  })
})

describe("Game advantage", () => {
  let set: TennisSet
  beforeAll(() => {
    let players = new Players(PLAYER_1_NAME, PLAYER_2_NAME)
    set = new TennisSet(players, new Game(), new SetTiebreaker())
  })

  test("both players winning 3 games each", () => {
    for (let i = 0; i < 3; i++) {
      for (let i = 0; i < 4; i++) {
        set.pointWonBy(PLAYER_1)
      }
      for (let i = 0; i < 4; i++) {
        set.pointWonBy(PLAYER_2)
      }
    }

    expect(set.score()).toEqual("3-3, 0-0")
  })

  test("Both players winging 3 point each", () => {
    for (let i = 0; i < 3; i++) {
      set.pointWonBy(PLAYER_1)
      set.pointWonBy(PLAYER_2)
    }

    expect(set.score()).toEqual("3-3, Deuce")
  })

  test("Player 2 take the advantage ", () => {
    set.pointWonBy(PLAYER_2)

    expect(set.score()).toEqual("3-3, Advantage Player 2")
  })

  test("Player 1 push back to deuce ", () => {
    set.pointWonBy(PLAYER_1)

    expect(set.score()).toEqual("3-3, Deuce")
  })

  test("Player 1 push 2 more point to take the game", () => {
    set.pointWonBy(PLAYER_1)
    set.pointWonBy(PLAYER_1)

    expect(set.score()).toEqual("4-3, 0-0")
  })
})

describe("Match set tiebreaker", () => {
  let set: TennisSet
  beforeAll(() => {
    let players = new Players(PLAYER_1_NAME, PLAYER_2_NAME)
    set = new TennisSet(players, new Game(), new SetTiebreaker())
  })

  test("both players winning 6 games each", () => {
    for (let i = 0; i < 6; i++) {
      for (let i = 0; i < 4; i++) {
        set.pointWonBy(PLAYER_1)
      }
      for (let i = 0; i < 4; i++) {
        set.pointWonBy(PLAYER_2)
      }
    }

    expect(set.score()).toEqual("6-6, Tiebreaker 0-0")
  })

  test("going close with game tie breaker", () => {
    for (let i = 0; i < 5; i++) {
      set.pointWonBy(PLAYER_1)
      set.pointWonBy(PLAYER_2)
    }

    expect(set.score()).toEqual("6-6, Tiebreaker 5-5")
  })

  test("one point push to set point", () => {
    set.pointWonBy(PLAYER_2)

    expect(set.score()).toEqual("6-6, Tiebreaker 5-6")
  })

  test("another more point to win the set", () => {
    set.pointWonBy(PLAYER_2)

    expect(set.score()).toEqual("6-7, 0-0")
  })
})