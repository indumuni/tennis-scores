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
    expect(match.score()).toEqual("0-0")
  })

  test("Should show score when Player1 won by first point", () => {
    match.pointWonBy(match.player1())
    expect(match.score()).toEqual("0-0, 15-0")
  })

  test("Should show score when Player1 won by second point", () => {
    match.pointWonBy(match.player1())
    match.pointWonBy(match.player1())
    expect(match.score()).toEqual("0-0, 30-0")
  })

  test("Should show score when Player1 won by third point", () => {
    match.pointWonBy(match.player1())
    match.pointWonBy(match.player1())
    match.pointWonBy(match.player1())
    expect(match.score()).toEqual("0-0, 40-0")
  })
})
