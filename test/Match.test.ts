import Match from "../src/Match"
import Game from "../src/Game"
import TennisSet from "../src/TennisSet"
import SetTiebreaker from "../src/SetTiebreaker"
import { Player } from "../src/Players"

const PLAYER_1_NAME = "Player 1"
const PLAYER_2_NAME = "Player 2"

describe("Sequence to win first game", () => {
  let match: Match
  beforeAll(() => {
    const player = new Player(PLAYER_1_NAME, PLAYER_2_NAME)
    match = new Match(player, new TennisSet(player, new Game(), new SetTiebreaker()))
  })

  test("Should show initial score at the start", () => {
    expect(match.score()).toEqual("0-0, 0-0")
  })

  test("Should show score when Player1 won first point", () => {
    match.pointWonBy(PLAYER_1_NAME)
    expect(match.score()).toEqual("0-0, 15-0")
  })

  test("Should show score when Player1 won second point", () => {
    match.pointWonBy(PLAYER_1_NAME)
    expect(match.score()).toEqual("0-0, 30-0")
  })

  test("Should show score when Player1 won third point", () => {
    match.pointWonBy(PLAYER_1_NAME)
    expect(match.score()).toEqual("0-0, 40-0")
  })

  test("should reflect game winning score ", () => {
    match.pointWonBy(PLAYER_1_NAME)
    expect(match.score()).toEqual("1-0, 0-0")
  })
})

describe("Match win with a tiebreaker", () => {
  let match: Match
  beforeAll(() => {
    const player = new Player(PLAYER_1_NAME, PLAYER_2_NAME)
    match = new Match(player, new TennisSet(player, new Game(), new SetTiebreaker()))
  })

  test("both players winning 6 games each", () => {
    for (let i = 0; i < 6; i++) {
      for (let i = 0; i < 4; i++) {
        match.pointWonBy(PLAYER_1_NAME)
      }
      for (let i = 0; i < 4; i++) {
        match.pointWonBy(PLAYER_2_NAME)
      }
    }

    expect(match.score()).toEqual("6-6, Tiebreaker 0-0")
  })

  test("going close with game tie breaker", () => {
    for (let i = 0; i < 5; i++) {
      match.pointWonBy(PLAYER_1_NAME)
      match.pointWonBy(PLAYER_2_NAME)
    }

    expect(match.score()).toEqual("6-6, Tiebreaker 5-5")
  })

  test("one point push to set point", () => {
    match.pointWonBy(PLAYER_2_NAME)

    expect(match.score()).toEqual("6-6, Tiebreaker 5-6")
  })

  test("another more point to win the set", () => {
    match.pointWonBy(PLAYER_2_NAME)

    expect(match.score()).toEqual("6-7, 0-0")
  })
})
