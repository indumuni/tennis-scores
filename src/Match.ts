import { PLAYER, PLAYER_1, PLAYER_2 } from "./TennisCommons"
import Game from "./Game"
import TennisSet from "./TennisSet"
import SetTiebreaker from "./SetTiebreaker"

class Match {
  private readonly playersName: Map<PLAYER, string> = new Map()
  private game: Game
  private set: TennisSet
  private setTiebreaker: SetTiebreaker

  constructor(player1: string, player2: string) {
    this.playersName.set(PLAYER_1, player1)
    this.playersName.set(PLAYER_2, player2)
    this.game = new Game()
    this.set = new TennisSet()
    this.setTiebreaker = new SetTiebreaker()
  }

  score(): string {
    if (this.game.isAdvantage()) {
      const playerId = this.game.playerWinning()
      let playerName
      if (playerId) {
        playerName = this.findPlayerName(playerId)
      }

      return `${this.set.score()}, ${this.game.score()} ${playerName}`
    }

    if (this.set.isTieBreaker()) {
      return `${this.set.score()}, Tiebreaker ${this.setTiebreaker.score()}`
    }
    return `${this.set.score()}, ${this.game.score()}`
  }

  pointWonBy(playerName: string) {
    const player: PLAYER = this.findPlayerByName(playerName)
    if (this.set.isTieBreaker()) {
      this.setTiebreaker.pointWonBy(player)
      if (this.setTiebreaker.isCompleted()) {
        this.setTiebreaker.reset()
        this.set.pointWonBy(player)
      }
    } else {
      this.game.pointWonBy(player)
      if (this.game.isCompleted()) {
        this.game.reset()
        this.set.pointWonBy(player)
      }
    }
  }

  private findPlayerName(playerId: PLAYER) {
    const player = this.playersName.get(playerId)

    if (player === undefined) throw new Error("Player not found")
    return player
  }

  private findPlayerByName(playerName: string): PLAYER {
    for (const [playerId, name] of this.playersName.entries()) {
      if (playerName === name) {
        return playerId
      }
    }

    throw new Error(`Unknown player: ${playerName}`)
  }
}

export default Match
