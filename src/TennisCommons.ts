type PLAYER = "1" | "2"

const PLAYER_1: PLAYER = "1"
const PLAYER_2: PLAYER = "2"

const otherPlayer = (player: PLAYER): PLAYER => {
  if (player == PLAYER_1) return PLAYER_2;
  else return PLAYER_1;
}

export {PLAYER, PLAYER_1, PLAYER_2, otherPlayer};
