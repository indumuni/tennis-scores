import Scorable from "./Scorable"

class TennisSet extends Scorable {
  constructor() {
    super()
  }

  isCompleted(): boolean {
    const { player1Score, player2Score } = this.playerScores()

    return (
      Math.abs(player1Score - player2Score) >= 2 &&
      (player1Score > 5 || player2Score > 5)  ||
      Math.abs(player1Score - player2Score) === 1 &&
      6 <= player1Score && player1Score <= 7
      && 6 <= player2Score && player2Score <= 7
    )
  }

  isTieBreaker() {
    const { player1Score, player2Score } = this.playerScores()
    return player1Score === 6 && player2Score === 6
  }
}

export default TennisSet
