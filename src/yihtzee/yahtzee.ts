type DiceNumber = 1 | 2 | 3 | 4 | 5 | 6;
export type DiceRoll = [
  DiceNumber,
  DiceNumber,
  DiceNumber,
  DiceNumber,
  DiceNumber
];
type DiceCount = { [key in DiceNumber]: number };

class Yahtzee {
  private countDices(dices: DiceRoll): Map<number, number> {
    const counts = new Map<number, number>();

    for (const dice of dices) {
      counts.set(dice, (counts.get(dice) || 0) + 1);
    }
    return counts;
  }

  calculateDicesByTarget(dices: DiceRoll, target: number): number {
    if (target > 6 || target < 1) {
      throw new Error("Invalid target");
    }

    let score: number = 0;

    for (let i: number = 0; i < dices.length; i++) {
      if (dices[i] === target) {
        score += target;
      }
    }
    return score;
  }
  calculateDicesByChance(dices: DiceRoll): number {
    return dices.reduce((sum, dice) => sum + dice, 0);
  }

  calculateDicesByFullHouse(dices: DiceRoll): number {
    const counts = this.countDices(dices);

    const findFullHouse = Array.from(counts.values());
    return findFullHouse.includes(2) && findFullHouse.includes(3) ? 25 : 0;
  }

  calculateDicesByYihtzee(dices: DiceRoll): number {
    const counts = this.countDices(dices);

    const findYihtzee = Array.from(counts.values()).includes(5);
    return findYihtzee ? 50 : 0;
  }

  calculateDicesThreeOrFourOfKind(dices: DiceRoll, target: 3 | 4): number {
    const counts = this.countDices(dices);

    const findThreeOrFour = Array.from(counts.values());

    const hasOfKind = findThreeOrFour.find((value) => value >= target);
    return hasOfKind ? dices.reduce((sum, dice) => sum + dice, 0) : 0;

  }

  calculateDicesBySmallAndLargeStraight(dices:DiceRoll, target: "small"|"large"):number{
    
    const sortDices = [...dices].sort((a,b)=>a-b)

    const uniqueDices = Array.from(new Set(sortDices))

    if(target === "small"){
        for (let i = 0; i < uniqueDices.length - 3; i++) {
            if (
                uniqueDices[i] + 1 === uniqueDices[i + 1] &&
                uniqueDices[i + 1] + 1 === uniqueDices[i + 2] &&
                uniqueDices[i + 2] + 1 === uniqueDices[i + 3]
            ) {
                return 30;
            }
        }
    }else if(target === "large"){
        if(
            uniqueDices[0]-uniqueDices[1] === uniqueDices[3]-uniqueDices[4] 
        ){
            return 40
        }
    }
    return 0
  }
}

export default Yahtzee;
