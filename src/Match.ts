import { PLAYER, PLAYER_1, PLAYER_2 } from "./TennisCommons"
import Game from "./Game"
import TennisSet from "./TennisSet"

class Match {
  private readonly playersName: Map<PLAYER, string> = new Map()
  private game: Game
  private set: TennisSet

  constructor(player1: string, player2: string) {
    this.playersName.set(PLAYER_1, player1)
    this.playersName.set(PLAYER_2, player2)
    this.game = new Game()
    this.set = new TennisSet()
  }

  score(): string {
    if (this.game.isAdvantage()) {
      const playerId = this.game.playerWinning()
      let playerName
      if (playerId) {
        playerName = this.findPlayer(playerId)
      }

      return `${this.set.score()}, ${this.game.score()} ${playerName}`
    }
    return `${this.set.score()}, ${this.game.score()}`
  }

  private findPlayer(key: PLAYER) {
    const player = this.playersName.get(key)

    if (player === undefined) throw new Error("Player not found")
    return player
  }

  pointWonBy(player: string) {
    const p: PLAYER = this.findPlayerByName(player)
    this.game.pointWonBy(p)
    if (this.game.isCompleted()) {
      this.game.reset()
      this.set.pointWonBy(p)
    }
  }

  private findPlayerByName(player: string): PLAYER {
    for (const [key, value] of this.playersName.entries()) {
      if (player === value) {
        return key
      }
    }

    throw new Error(`Unknown player: ${player}`)
  }
}

export default Match
