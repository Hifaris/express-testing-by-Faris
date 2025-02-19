type DiceNumber = 1 | 2 | 3 | 4 | 5 | 6;
export type DiceRoll = [DiceNumber, DiceNumber, DiceNumber, DiceNumber, DiceNumber];

class Yahtzee {
  private score: number = 0;

  calculateDicesByTarget(dices: DiceRoll, target: number): number {
    if(target > 6 || target < 1) {
        throw new Error('Invalid target');
    }

    this.score = 0;

    for (let i: number = 0; i < dices.length; i++) {
        if (dices[i] === target) {
            this.score += target;
        }
    }
    return this.score;
}
}

export default Yahtzee;
