import { Player, PLAYER_1 } from "../src/Players"

const PLAYER_1_NAME = "Player 1"
const PLAYER_2_NAME = "Player 2"

describe("Game of tennis played by 2 players", () => {
  let player: Player
  beforeAll(() => {
    player = new Player(PLAYER_1_NAME, PLAYER_2_NAME)
  })

  test("Player find by name", () => {
    expect(player.findPlayerByName(PLAYER_1_NAME)).toEqual(PLAYER_1)
  })

  test("Player find by Id", () => {
    expect(player.findPlayerName(PLAYER_1)).toEqual(PLAYER_1_NAME)
  })
})