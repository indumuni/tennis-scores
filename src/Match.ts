import TennisSet from "./TennisSet"
import { Player, PLAYER } from "./Players"

class Match {
  private set: TennisSet
  private players: Player

  constructor(players: Player, tennisSet: TennisSet) {
    this.players = players
    this.set = tennisSet
  }

  score(): string {
    return this.set.score()
  }

  pointWonBy(playerName: string) {
    const player: PLAYER = this.players.findPlayerByName(playerName)
    this.set.pointWonBy(player)
  }
}

export default Match
