import Scorable from "./Scorable"
import Game from "./Game"
import SetTiebreaker from "./SetTiebreaker"
import { PLAYER} from "./TennisCommons"
import Players from "./Players"

class TennisSet extends Scorable {
  private players: Players
  private game: Game
  private setTiebreaker: SetTiebreaker

  constructor(players: Players, game: Game, setTiebreaker: SetTiebreaker) {
    super()
    this.players = players
    this.game = game
    this.setTiebreaker = setTiebreaker
  }

  public score() {
    if (this.game.isAdvantage()) {
      const playerId = this.game.playerWinning()
      let playerName
      if (playerId) {
        playerName = this.players.findPlayerName(playerId)
      }

      return `${super.score()}, ${this.game.score()} ${playerName}`
    }

    if (this.isTieBreaker()) {
      return `${super.score()}, Tiebreaker ${this.setTiebreaker.score()}`
    }
    return `${super.score()}, ${this.game.score()}`
  }

  pointWonBy(player: PLAYER) {
    if (this.isTieBreaker()) {
      this.setTiebreaker.pointWonBy(player)
      if (this.setTiebreaker.isCompleted()) {
        this.setTiebreaker.reset()
        super.pointWonBy(player)
      }
    } else {
      this.game.pointWonBy(player)
      if (this.game.isCompleted()) {
        this.game.reset()
        super.pointWonBy(player)
      }
    }
  }

  isCompleted(): boolean {
    const { player1Score, player2Score } = this.getPlayerScores()

    return (
      (Math.abs(player1Score - player2Score) >= 2 &&
        (player1Score > 5 || player2Score > 5)) ||
      (Math.abs(player1Score - player2Score) === 1 &&
        6 <= player1Score &&
        player1Score <= 7 &&
        6 <= player2Score &&
        player2Score <= 7)
    )
  }

  isTieBreaker() {
    const { player1Score, player2Score } = this.getPlayerScores()
    return player1Score === 6 && player2Score === 6
  }
}

export default TennisSet
