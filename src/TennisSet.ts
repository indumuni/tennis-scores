import Scorecard from "./Scorecard"
import { PLAYER, PLAYER_1, PLAYER_2 } from "./TennisCommons"


class TennisSet extends Scorecard {

  constructor() {
    super()
  }

  pointWonBy(player: PLAYER) {
    let score = super.getScore(player)
    super.setScore(player, ++score)
  }

  isCompleted(): boolean {
    let player1Score = this.getScore(PLAYER_1)
    let player2Score = this.getScore(PLAYER_2)

    return Math.abs(player1Score - player2Score) >= 2 && (player1Score > 5 || player2Score > 5)
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
}

export default TennisSet