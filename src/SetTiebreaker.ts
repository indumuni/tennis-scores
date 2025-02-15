import Scorable from "./Scorable"

class SetTiebreaker extends Scorable {
  constructor() {
    super()
  }

  isCompleted(): boolean {
    const { player1Score, player2Score } = this.playerScores()

    return (
      Math.abs(player1Score - player2Score) >= 2 &&
      (player1Score > 6 || player2Score > 6)
    )
  }
}

export default SetTiebreaker
