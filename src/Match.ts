class Match {
  private playerOne: string;
  private playerTwo: string;
  constructor(player1: string, player2: string) {
    this.playerOne = player1;
    this.playerTwo = player2;

  }

  score(): string {
    return `0-0`;
  }

  player1() {
    return this.playerOne;
  }

  player2() {
    return this.playerTwo;
  }
}

export default Match;
