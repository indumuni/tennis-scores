import Scorable from "./Scorable"
import { PLAYER_1, PLAYER_2 } from "./TennisCommons"

class MatchTiebreaker extends Scorable {
  constructor() {
    super()
  }

  isCompleted(): boolean {
    let player1Score = this.getScore(PLAYER_1)
    let player2Score = this.getScore(PLAYER_2)

    return (
      Math.abs(player1Score - player2Score) >= 2 &&
      (player1Score > 6 || player2Score > 6)
    )
  }
}

export default MatchTiebreaker
