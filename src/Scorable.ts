import { PLAYER, PLAYER_1, PLAYER_2 } from "./TennisCommons"

abstract class Scorable {
  private gamePoints: Map<PLAYER, number> = new Map()

  protected constructor() {
    this.setDefaultScore()
  }

  abstract isCompleted(): boolean

  public score() {
    return `${this.displayScore(PLAYER_1)}-${this.displayScore(PLAYER_2)}`
  }

  public pointWonBy(player: PLAYER) {
    let score = this.getScore(player)
    this.setScore(player, ++score)
  }

  protected displayScore(player: PLAYER): string {
    return this.getScore(player) + ""
  }

  protected getScore(player: PLAYER) {
    const score = this.gamePoints.get(player)
    if (score === undefined) {
      throw new Error("Could not find any player")
    }
    return score
  }

  public setScore(player: PLAYER, score: number) {
    this.gamePoints.set(player, score)
  }

  protected playerScores() {
    const player1Score = this.getScore(PLAYER_1)
    const player2Score = this.getScore(PLAYER_2)
    return { player1Score, player2Score }
  }

  public reset() {
    this.setDefaultScore()
  }

  public playerWinning(): PLAYER | "" {
    const { player1Score, player2Score } = this.playerScores()
    if (player1Score - player2Score > 0) {
      return PLAYER_1
    }
    if (player2Score - player1Score > 0) {
      return PLAYER_2
    }
    return ""
  }

  private setDefaultScore() {
    this.gamePoints.set(PLAYER_1, 0)
    this.gamePoints.set(PLAYER_2, 0)
  }
}
export default Scorable
