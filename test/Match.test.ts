import Match from "../src/Match"

describe("Match players", () => {
  let match: Match
  beforeAll(() => {
    match = new Match("Player X", "Player Y")
  })
  test("Player1 should return first match player", () => {
    expect(match.player1()).toEqual("Player X")
  })
  test("Player2 should return second match player", () => {
    expect(match.player2()).toEqual("Player Y")
  })
})

describe("Match score suite", () => {
  let match: Match
  beforeAll(() => {
    match = new Match("Player 1", "Player 2")
  })

  test("Should show initial score at the start", () => {
    expect(match.score()).toEqual("0-0, 0-0")
  })

  test("Should show score when Player1 won first point", () => {
    match.pointWonBy(match.player1())
    expect(match.score()).toEqual("0-0, 15-0")
  })

  test("Should show score when Player1 won second point", () => {
    match.pointWonBy(match.player1())
    expect(match.score()).toEqual("0-0, 30-0")
  })

  test("Should show score when Player1 won third point", () => {
    match.pointWonBy(match.player1())
    expect(match.score()).toEqual("0-0, 40-0")
  })

  test("should reflect game score ", () => {
    match.pointWonBy(match.player1())
    expect(match.score()).toEqual("1-0, 0-0")
  })
})

describe("Game tiebreaker", () => {
  let match: Match
  beforeAll(() => {
    match = new Match("Player 1", "Player 2")
  })

  test("Should show score when Player1 won first point", () => {
    for (let i = 0; i < 3; i++) {
      match.pointWonBy(match.player1())
      match.pointWonBy(match.player2())
    }

    expect(match.score()).toEqual("0-0, Deuce")
  })
})

describe("Match game tiebreaker", () => {
  let match: Match
  beforeAll(() => {
    match = new Match("Player 1", "Player 2")
  })

  test("Should show score when Player1 won first point", () => {
    for (let i = 0; i < 6; i++) {
      for (let i = 0; i < 4; i++) {
        match.pointWonBy(match.player1())
      }
      for (let i = 0; i < 4; i++) {
        match.pointWonBy(match.player2())
      }
    }

    expect(match.score()).toEqual("6-6, 0-0")
  })

  test("going close with game tie breaker", () => {
    for (let i = 0; i < 4; i++) {
      match.pointWonBy(match.player1())
      match.pointWonBy(match.player2())
    }

    expect(match.score()).toEqual("6-6, Deuce")
  })

  test("one point push to advantage", () => {
    match.pointWonBy(match.player2())

    expect(match.score()).toEqual("6-6, Advantage Player 2")
  })

  test("another more point to win the set", () => {
    match.pointWonBy(match.player2())

    expect(match.score()).toEqual("6-7, 0-0")
  })
})
