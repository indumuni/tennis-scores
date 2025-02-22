type PLAYER = "1" | "2"
const PLAYER_1: PLAYER = "1"
const PLAYER_2: PLAYER = "2"
const otherPlayer = (player: PLAYER): PLAYER => {
  if (player === PLAYER_1) return PLAYER_2
  else return PLAYER_1
}

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
export { otherPlayer }
export { PLAYER_2 }
export { PLAYER_1 }
export { PLAYER }