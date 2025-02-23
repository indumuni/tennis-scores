
import Scorable from "./Scorable"
import { otherPlayer, PLAYER, PLAYER_1, PLAYER_2 } from "./Players"

class Game extends Scorable {

  score() {
    if (this.isDeuce()) {
      return "Deuce"
    }

    if (this.isAdvantage()) {
      return "Advantage"
    }
    return `${this.displayScore(PLAYER_1)}-${this.displayScore(PLAYER_2)}`
  }

  protected displayScore(key: PLAYER): string {
    switch (this.getScore(key)) {
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
    const opponent = otherPlayer(player)
    let otherPlayerScore = this.getScore(opponent)
    if (this.isAdvantage() && otherPlayerScore > score) {
      this.setScore(opponent, --otherPlayerScore)
    } else {
      this.setScore(player, ++score)
    }
  }

  isCompleted() {
    const { player1Score, player2Score } = this.getPlayerScores()

    return (
      Math.abs(player1Score - player2Score) >= 2 &&
      (player1Score > 3 || player2Score > 3)
    )
  }

  isDeuce() {
    const { player1Score, player2Score } = this.getPlayerScores()
    return Math.abs(player1Score - player2Score) === 0 && player1Score == 3
  }

  isAdvantage() {
    const { player1Score, player2Score } = this.getPlayerScores()
    return (
      Math.abs(player1Score - player2Score) === 1 &&
      (player1Score > 3 || player2Score > 3)
    )
  }

  playerWinning(): PLAYER | undefined {
    const { player1Score, player2Score } = this.getPlayerScores()
    if (player1Score - player2Score > 0) {
      return PLAYER_1
    }
    if (player2Score - player1Score > 0) {
      return PLAYER_2
    }
    return
  }
}

export default Game
