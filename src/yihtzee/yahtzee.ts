type DiceNumber = 1 | 2 | 3 | 4 | 5 | 6;
export type DiceRoll = [DiceNumber, DiceNumber, DiceNumber, DiceNumber, DiceNumber];

class Yahtzee {
 

  calculateDicesByTarget(dices: DiceRoll, target: number): number {
    if(target > 6 || target < 1) {
        throw new Error('Invalid target');
    }

    let score:number = 0;

    for (let i: number = 0; i < dices.length; i++) {
        if (dices[i] === target) {
            score += target;
        }
    }
    return score;
}
}

export default Yahtzee;
