import { PLAYER, PLAYER_1, PLAYER_2 } from "./TennisCommons"

class Player {
  private readonly playersName: Map<PLAYER, string> = new Map()
  constructor(player1: string, player2: string) {
    this.playersName.set(PLAYER_1, player1)
    this.playersName.set(PLAYER_2, player2)
  }

   findPlayerName(playerId: PLAYER) {
    const player = this.playersName.get(playerId)

    if (player === undefined) throw new Error("Player not found")
    return player
  }

   findPlayerByName(playerName: string): PLAYER {
    for (const [playerId, name] of this.playersName.entries()) {
      if (playerName === name) {
        return playerId
      }
    }

    throw new Error(`Unknown player: ${playerName}`)
  }
}

export default Player