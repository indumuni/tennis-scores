import Scorable from "./Scorable"

class TennisSet extends Scorable {
  constructor() {
    super()
  }

  isCompleted(): boolean {
    const { player1Score, player2Score } = this.playerScores()

    return (
      Math.abs(player1Score - player2Score) >= 2 &&
      (player1Score > 5 || player2Score > 5)
    )
  }
}

export default TennisSet
