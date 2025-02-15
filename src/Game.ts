import { PLAYER, PLAYER_1, PLAYER_2, otherPlayer } from "./TennisCommons"

class Game {
  private gamePoints: Map<PLAYER, number> = new Map()

  constructor() {
    this.setDefaultScore()
  }

  private setDefaultScore() {
    this.gamePoints.set(PLAYER_1, 0)
    this.gamePoints.set(PLAYER_2, 0)
  }

  score() {
    return `${this.displayScore(PLAYER_1)}-${this.displayScore(PLAYER_2)}`
  }

  protected displayScore(key: PLAYER): string {
    switch (this.gamePoints.get(key)) {
      case 0:
        return "0"
      case 1:
        return "15"
      case 2:
        return "30"
      case 3:
        return "40"
      default:
        return ""
    }
  }

  pointWonBy(player: PLAYER) {
    let score = this.getScore(player)
    let opponent = otherPlayer(player)
    let otherPlayerScore = this.getScore(opponent)
    if (this.isAdvantage() && otherPlayerScore > score) {
      this.gamePoints.set(opponent, --otherPlayerScore)
    } else {
      this.gamePoints.set(player, ++score)
    }
  }

  private getScore(player: PLAYER) {
    let score = this.gamePoints.get(player)
    if (score === undefined) {
      // TODO: NOT tested
      throw new Error("Could not find any player")
    }
    return score
  }

  isCompleted() {
    let player1Score = this.getScore(PLAYER_1)
    let player2Score = this.getScore(PLAYER_2)

    return (
      Math.abs(player1Score - player2Score) >= 2 &&
      (player1Score > 3 || player2Score > 3)
    )
  }

  isDeuce() {
    let player1Score = this.getScore(PLAYER_1)
    let player2Score = this.getScore(PLAYER_2)
    return Math.abs(player1Score - player2Score) === 0 && player1Score == 3
  }

  isAdvantage() {
    let player1Score = this.getScore(PLAYER_1)
    let player2Score = this.getScore(PLAYER_2)
    return (
      Math.abs(player1Score - player2Score) === 1 &&
      (player1Score > 3 || player2Score > 3)
    )
  }

  playerWinning(): PLAYER | "" {
    let player1Score = this.getScore(PLAYER_1)
    let player2Score = this.getScore(PLAYER_2)
    if (player1Score - player2Score > 0) {
      return PLAYER_1
    }
    if (player2Score - player1Score > 0) {
      return PLAYER_2
    }
    return ""
  }

  reset() {
    this.setDefaultScore()
  }
}

export default Game
