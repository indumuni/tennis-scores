import Match from "../src/Match"

const PLAYER_1_NAME = "Player 1"
const PLAYER_2_NAME = "Player 2"

describe("Match score suite", () => {
  let match: Match
  beforeAll(() => {
    match = new Match(PLAYER_1_NAME, PLAYER_2_NAME)
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

describe("Game tiebreaker", () => {
  let match: Match
  beforeAll(() => {
    match = new Match(PLAYER_1_NAME, PLAYER_2_NAME)
  })

  test("after winning 3 point by both players", () => {
    for (let i = 0; i < 3; i++) {
      match.pointWonBy(PLAYER_1_NAME)
      match.pointWonBy(PLAYER_2_NAME)
    }

    expect(match.score()).toEqual("0-0, Deuce")
  })
})

describe("Match game tiebreaker", () => {
  let match: Match
  beforeAll(() => {
    match = new Match(PLAYER_1_NAME, PLAYER_2_NAME)
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

    expect(match.score()).toEqual("6-6, 0-0")
  })

  test("going close with game tie breaker", () => {
    for (let i = 0; i < 4; i++) {
      match.pointWonBy(PLAYER_1_NAME)
      match.pointWonBy(PLAYER_2_NAME)
    }

    expect(match.score()).toEqual("6-6, Deuce")
  })

  test("one point push to advantage", () => {
    match.pointWonBy(PLAYER_2_NAME)

    expect(match.score()).toEqual("6-6, Advantage Player 2")
  })

  test("another more point to win the set", () => {
    match.pointWonBy(PLAYER_2_NAME)

    expect(match.score()).toEqual("6-7, 0-0")
  })
})
