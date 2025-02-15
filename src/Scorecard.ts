import { PLAYER, PLAYER_1, PLAYER_2 } from "./TennisCommons"

abstract class Scorecard {
  private gamePoints: Map<PLAYER, number> = new Map()

  protected constructor() {
    this.setDefaultScore()
  }

  private setDefaultScore() {
    this.gamePoints.set(PLAYER_1, 0)
    this.gamePoints.set(PLAYER_2, 0)
  }

  score() {
    return `${this.displayScore(PLAYER_1)}-${this.displayScore(PLAYER_2)}`
  }


  protected displayScore(player: PLAYER) :string {
    return this.getScore(player) + ""
  }
  abstract isCompleted():boolean

  protected getScore(player: PLAYER) {
    let score = this.gamePoints.get(player)
    if (score === undefined) {
      // TODO: NOT tested
      throw new Error("Could not find any player")
    }
    return score
  }

  setScore(player: PLAYER, score: number) {
    this.gamePoints.set(player, score)
  }

  reset() {
    this.setDefaultScore()
  }
}
export default Scorecard
