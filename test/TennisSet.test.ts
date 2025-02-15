import TennisSet from "../src/TennisSet"

describe("Straight set win", () => {
  let set: TennisSet
  beforeAll(() => {
    set = new TennisSet()
  })

  test("score should be 0-0 just before start of the set", () => {
    expect(set.score()).toEqual("0-0")
    expect(set.isCompleted()).toEqual(false)
  })

  test("score should increment by 1 on win", () => {
    set.pointWonBy("1")
    expect(set.score()).toEqual("1-0")
    expect(set.isCompleted()).toEqual(false)
  })

  test("score should increment by 2 on double win", () => {
    set.pointWonBy("1")
    set.pointWonBy("1")
    expect(set.score()).toEqual("3-0")
    expect(set.isCompleted()).toEqual(false)
  })

  test("should win set after total of 6 game wins", () => {
    set.pointWonBy("1")
    set.pointWonBy("1")
    set.pointWonBy("1")
    expect(set.score()).toEqual("6-0")
    expect(set.isCompleted()).toEqual(true)
    expect(set.playerWinning()).toEqual("1")
  })

})

describe("Super tiebreaker ", () => {
  let set: TennisSet
  beforeAll(() => {
    set = new TennisSet()
  })

  test("after both winning 6 games", () => {
    for (let i = 0; i < 6; i++) {
      set.pointWonBy("1")
      set.pointWonBy("2")
    }
    expect(set.score()).toEqual("6-6")
    expect(set.isCompleted()).toEqual(false)
  })


})