import SetTiebreaker from "../src/SetTiebreaker"

describe("Super tiebreaker win", () => {
  let tieBreaker: SetTiebreaker
  beforeAll(() => {
    tieBreaker = new SetTiebreaker()
  })

  test("after both winning 6 games", () => {
    for (let i = 0; i < 7; i++) {
      tieBreaker.incScore("1")
    }
    expect(tieBreaker.score()).toEqual("7-0")
    expect(tieBreaker.isCompleted()).toEqual(true)
    expect(tieBreaker.playerWinning()).toEqual("1")
  })
})

describe("Super tiebreaker win after 11 ", () => {
  let tieBreaker: SetTiebreaker
  beforeAll(() => {
    tieBreaker = new SetTiebreaker()
  })

  test("after both winning 11 games head to head, game still open", () => {
    for (let i = 0; i < 11; i++) {
      tieBreaker.incScore("1")
      tieBreaker.incScore("2")
    }
    expect(tieBreaker.score()).toEqual("11-11")
    expect(tieBreaker.isCompleted()).toEqual(false)
    expect(tieBreaker.playerWinning()).toEqual(undefined)
  })

  test("two consecutive wins decide the tiebreaker", () => {
    tieBreaker.incScore("2")
    tieBreaker.incScore("2")
    expect(tieBreaker.score()).toEqual("11-13")
    expect(tieBreaker.isCompleted()).toEqual(true)
    expect(tieBreaker.playerWinning()).toEqual("2")
  })
})

describe("Super tiebreaker ", () => {
  let tieBreaker: SetTiebreaker
  beforeAll(() => {
    tieBreaker = new SetTiebreaker()
  })

  test("after both winning 6 games", () => {
    for (let i = 0; i < 6; i++) {
      tieBreaker.incScore("1")
      tieBreaker.incScore("2")
    }
    expect(tieBreaker.score()).toEqual("6-6")
    expect(tieBreaker.isCompleted()).toEqual(false)
  })
})
