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

describe("Game advantage", () => {
  let match: Match
  beforeAll(() => {
    match = new Match(PLAYER_1_NAME, PLAYER_2_NAME)
  })

  test("both players winning 3 games each", () => {
    for (let i = 0; i < 3; i++) {
      for (let i = 0; i < 4; i++) {
        match.pointWonBy(PLAYER_1_NAME)
      }
      for (let i = 0; i < 4; i++) {
        match.pointWonBy(PLAYER_2_NAME)
      }
    }

    expect(match.score()).toEqual("3-3, 0-0")
  })

  test("Both players winging 3 point each", () => {
    for (let i = 0; i < 3; i++) {
      match.pointWonBy(PLAYER_1_NAME)
      match.pointWonBy(PLAYER_2_NAME)
    }

    expect(match.score()).toEqual("3-3, Deuce")
  })

  test("Player 2 take the advantage ", () => {
    match.pointWonBy(PLAYER_2_NAME)

    expect(match.score()).toEqual("3-3, Advantage Player 2")
  })

  test("Player 1 push back to deuce ", () => {
    match.pointWonBy(PLAYER_1_NAME)

    expect(match.score()).toEqual("3-3, Deuce")
  })

  test("Player 1 push 2 more point to take the game", () => {
    match.pointWonBy(PLAYER_1_NAME)
    match.pointWonBy(PLAYER_1_NAME)

    expect(match.score()).toEqual("4-3, 0-0")
  })
})

describe("Match set tiebreaker", () => {
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
