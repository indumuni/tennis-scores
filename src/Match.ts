import { PLAYER } from "./TennisCommons"
import TennisSet from "./TennisSet"
import Players from "./Players"

class Match {
  private set: TennisSet
  private players: Players

  constructor(players: Players, tennisSet: TennisSet, ) {
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
