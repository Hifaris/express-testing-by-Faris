import Yahtzee, { DiceRoll } from "./yahtzee";

describe('Yahtzee Success case',()=>{
    it("ได้คะแนนเท่ากับ 1 เมื่อส่ง dices เป็น [1,2,3,4,6] และ target เป็น 1", () => {
        const dices: DiceRoll = [1, 2, 3, 4, 6];
        const target = 1;
        const expected = 1;
      
        const yahtzee = new Yahtzee();
        const result = yahtzee.calculateDicesByTarget(dices, target);
      
        expect(result).toBe(expected);
      });
      
      it("ได้คะแนนเท่ากับ 3 เมื่อส่ง dices เป็น [2,1,4,1,1] และ target เป็น 1", () => {
        const dices: DiceRoll = [2, 1, 4, 1, 1];
        const target = 1;
        const expected = 3;
      
        const yahtzee = new Yahtzee();
        const result = yahtzee.calculateDicesByTarget(dices, target);
      
        expect(result).toBe(expected);
      });
      
      it("ได้คะแนนเท่ากับ 0 เมื่อส่ง dices เป็น [2,5,2,3,4] และ target เป็น 1", () => {
        const dices: DiceRoll = [2, 5, 2, 3, 4];
        const target = 1;
        const expected = 0;
      
        const yahtzee = new Yahtzee();
        const result = yahtzee.calculateDicesByTarget(dices, target);
      
        expect(result).toBe(expected);
      });
      

    it("ได้คะแนนเท่ากับ 2 เมื่อส่ง dices เป็น [3,4,6,2,1] และ target เป็น 2", () => {
        const dices: DiceRoll = [3, 4, 6, 2, 1];
        const target = 2;
        const expected = 2;
      
        const yahtzee = new Yahtzee();
        const result = yahtzee.calculateDicesByTarget(dices, target);
      
        expect(result).toBe(expected);
      });
      
      it("ได้คะแนนเท่ากับ 6 เมื่อส่ง dices เป็น [2,5,2,6,2] และ target เป็น 2", () => {
        const dices: DiceRoll = [2, 5, 2, 6, 2];
        const target = 2;
        const expected = 6;
      
        const yahtzee = new Yahtzee();
        const result = yahtzee.calculateDicesByTarget(dices, target);
      
        expect(result).toBe(expected);
      });
      
      it("ได้คะแนนเท่ากับ 0 เมื่อส่ง dices เป็น [3,5,6,1,1] และ target เป็น 2", () => {
        const dices: DiceRoll = [3, 5, 6, 1, 1];
        const target = 2;
        const expected = 0;
      
        const yahtzee = new Yahtzee();
        const result = yahtzee.calculateDicesByTarget(dices, target);
      
        expect(result).toBe(expected);
      });
      
      it("ได้คะแนนเท่ากับ 3 เมื่อส่ง dices เป็น [1,2,3,4,5] และ target เป็น 3", () => {
        const dices: DiceRoll = [1, 2, 3, 4, 5];
        const target = 3;
        const expected = 3;
      
        const yahtzee = new Yahtzee();
        const result = yahtzee.calculateDicesByTarget(dices, target);
      
        expect(result).toBe(expected);
      });
      
      it("ได้คะแนนเท่ากับ 12 เมื่อส่ง dices เป็น [3,3,4,3,3] และ target เป็น 3", () => {
        const dices: DiceRoll = [3, 3, 4, 3, 3];
        const target = 3;
        const expected = 12;
      
        const yahtzee = new Yahtzee();
        const result = yahtzee.calculateDicesByTarget(dices, target);
      
        expect(result).toBe(expected);
      });
      
      it("ได้คะแนนเท่ากับ 0 เมื่อส่ง dices เป็น [1,4,5,6,2] และ target เป็น 3", () => {
        const dices: DiceRoll = [1, 4, 5, 6, 2];
        const target = 3;
        const expected = 0;
      
        const yahtzee = new Yahtzee();
        const result = yahtzee.calculateDicesByTarget(dices, target);
      
        expect(result).toBe(expected);
      });
      
      it("ได้คะแนนเท่ากับ 4 เมื่อส่ง dices เป็น [1,2,3,4,5] และ target เป็น 4", () => {
        const dices: DiceRoll = [1, 2, 3, 4, 5];
        const target = 4;
        const expected = 4;
      
        const yahtzee = new Yahtzee();
        const result = yahtzee.calculateDicesByTarget(dices, target);
      
        expect(result).toBe(expected);
      });
      it("ได้คะแนนเท่ากับ 8 เมื่อส่ง dices เป็น [5,2,4,4,5] และ target เป็น 4", () => {
        const dices: DiceRoll = [5, 2, 4, 4, 5];
        const target = 4;
        const expected = 8;
      
        const yahtzee = new Yahtzee();
        const result = yahtzee.calculateDicesByTarget(dices, target);
      
        expect(result).toBe(expected);
      });
   
      it("ได้คะแนนเท่ากับ 0 เมื่อส่ง dices เป็น [6,1,3,6,5] และ target เป็น 4", () => {
        const dices: DiceRoll = [6,1,3,6,5];
        const target = 4;
        const expected = 0;
      
        const yahtzee = new Yahtzee();
        const result = yahtzee.calculateDicesByTarget(dices, target);
      
        expect(result).toBe(expected);
      });
      it("ได้คะแนนเท่ากับ 5 เมื่อส่ง dices เป็น [1,2,3,4,5] และ target เป็น 5", () => {
        const dices: DiceRoll = [1,2,3,4,5];
        const target = 5;
        const expected = 5;
      
        const yahtzee = new Yahtzee();
        const result = yahtzee.calculateDicesByTarget(dices, target);
      
        expect(result).toBe(expected);
      });
      it("ได้คะแนนเท่ากับ 15 เมื่อส่ง dices เป็น [5,2,3,5,5] และ target เป็น 5", () => {
        const dices: DiceRoll = [5,2,3,5,5];
        const target = 5;
        const expected = 15;
      
        const yahtzee = new Yahtzee();
        const result = yahtzee.calculateDicesByTarget(dices, target);
      
        expect(result).toBe(expected);
      });
      it("ได้คะแนนเท่ากับ 0 เมื่อส่ง dices เป็น [1,2,3,4,4] และ target เป็น 5", () => {
        const dices: DiceRoll = [1,2,3,4,4];
        const target = 5;
        const expected = 0;
      
        const yahtzee = new Yahtzee();
        const result = yahtzee.calculateDicesByTarget(dices, target);
      
        expect(result).toBe(expected);
      });
   
      it("ได้คะแนนเท่ากับ 6 เมื่อส่ง dices เป็น [4,3,6,1,2] และ target เป็น 6", () => {
        const dices: DiceRoll = [4,3,6,1,2];
        const target = 6;
        const expected = 6;
      
        const yahtzee = new Yahtzee();
        const result = yahtzee.calculateDicesByTarget(dices, target);
      
        expect(result).toBe(expected);
      });
      it("ได้คะแนนเท่ากับ 30 เมื่อส่ง dices เป็น [6,6,6,6,6] และ target เป็น 6", () => {
        const dices: DiceRoll = [6,6,6,6,6];
        const target = 6;
        const expected = 30;
      
        const yahtzee = new Yahtzee();
        const result = yahtzee.calculateDicesByTarget(dices, target);
      
        expect(result).toBe(expected);
      });
      it("ได้คะแนนเท่ากับ 0 เมื่อส่ง dices เป็น [1,3,4,5,1] และ target เป็น 6", () => {
        const dices: DiceRoll = [1,3,4,5,1];
        const target = 6;
        const expected = 0;
      
        const yahtzee = new Yahtzee();
        const result = yahtzee.calculateDicesByTarget(dices, target);
      
        expect(result).toBe(expected);
      });
   
})

describe('Yahtzee Fail case',()=>{
    it("ต้องได้รับข้อความ Invalid target เมื่อส่ง target เป็น 0", () => {
        const dices: DiceRoll = [1,1,1,1,1];
        const target = 0;
        const expected = "Invalid target";
      
        const yahtzee = new Yahtzee();

        expect(() => yahtzee.calculateDicesByTarget(dices, target)).toThrow(expected);
     
      });
      
    it("ต้องได้รับข้อความ Invalid target เมื่อส่ง target เป็น -1", () => {
        const dices: DiceRoll = [1,1,1,1,1];
        const target = -1;
        const expected = "Invalid target";
      
        const yahtzee = new Yahtzee();

        expect(() => yahtzee.calculateDicesByTarget(dices, target)).toThrow(expected);
     
      });
    it("ต้องได้รับข้อความ Invalid target เมื่อส่ง target เป็น 7", () => {
        const dices: DiceRoll = [2,2,2,2,2];
        const target = 7;
        const expected = "Invalid target";
      
        const yahtzee = new Yahtzee();

        expect(() => yahtzee.calculateDicesByTarget(dices, target)).toThrow(expected);
     
      });
      
})


describe('Yahtzee Chance case',()=>{

  it("ต้องได้คะแนนเท่ากับ 16 เมื่อส่ง dices[1,2,3,4,6]",()=>{
    const dices: DiceRoll =[1,2,3,4,6];
    const expected = 16

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesByChance(dices);
    
    expect(result).toBe(expected)
    
  })
  it("ต้องได้คะแนนเท่ากับ 19 เมื่อส่ง dices[4,6,5,1,3]",()=>{
    const dices: DiceRoll =[4,6,5,1,3];
    const expected = 19

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesByChance(dices);
    
    expect(result).toBe(expected)
    
  })
})

describe('Yahtzee Full House case',()=>{
  it("ต้องได้คะแนนเท่ากับ 25 เมื่อส่ง dices[2,2,2,5,5]",()=>{
    const dices: DiceRoll =[2,2,2,5,5];
    const expected = 25

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesByFullHouse(dices);
    
    expect(result).toBe(expected)
    
  })
  it("ต้องได้คะแนนเท่ากับ 25 เมื่อส่ง dices[5,5,2,2,2]",()=>{
    const dices: DiceRoll =[5,5,2,2,2];
    const expected = 25

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesByFullHouse(dices);
    
    expect(result).toBe(expected)
    
  })
  it("ต้องได้คะแนนเท่ากับ 25 เมื่อส่ง dices[1,5,1,1,5]",()=>{
    const dices: DiceRoll =[1,5,1,1,5];
    const expected = 25

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesByFullHouse(dices);
    
    expect(result).toBe(expected)
    
  })
  it("ต้องได้คะแนนเท่ากับ 0 เมื่อส่ง dices[1,1,1,1,5]",()=>{
    const dices: DiceRoll =[1,1,1,1,5];
    const expected = 0

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesByFullHouse(dices);
    
    expect(result).toBe(expected)
    
  })
})

describe('Yahtzee case',()=>{
  it("ต้องได้คะแนนเท่ากับ 50 เมื่อส่ง dices[1,1,1,1,1",()=>{
    const dices: DiceRoll =[1,1,1,1,1];
    const expected = 50

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesByYihtzee(dices);
    
    expect(result).toBe(expected)
    
  })
  it("ต้องได้คะแนนเท่ากับ 50 เมื่อส่ง dices[5,5,5,5,5]",()=>{
    const dices: DiceRoll =[5,5,5,5,5];
    const expected = 50

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesByYihtzee(dices);
    
    expect(result).toBe(expected)
    
  })
  it("ต้องได้คะแนนเท่ากับ 0 เมื่อส่ง dices[2,4,4,4,4]",()=>{
    const dices: DiceRoll =[2,4,4,4,4];
    const expected = 0

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesByYihtzee(dices);
    
    expect(result).toBe(expected)
    
  })
})

describe("Yahtzee Three of kind and Four of kind case",()=>{
  it("ต้องได้คะแนนเท่ากับ 5 เมื่อส่ง dices[1,1,1,1,1] และ target เป็น 3",()=>{
    const dices: DiceRoll =[1,1,1,1,1];
    const expected = 5
    const target = 3

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesThreeOrFourOfKind(dices,target);
    
    expect(result).toBe(expected)
    
  })
  it("ต้องได้คะแนนเท่ากับ 13 เมื่อส่ง dices[2,2,2,2,5] และ target เป็น 3",()=>{
    const dices: DiceRoll =[2,2,2,2,5];
    const expected = 13
    const target = 3

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesThreeOrFourOfKind(dices,target);
    
    expect(result).toBe(expected)
    
  })
  it("ต้องได้คะแนนเท่ากับ 8 เมื่อส่ง dices[1,1,1,2,3] และ target เป็น 3",()=>{
    const dices: DiceRoll =[1,1,1,2,3];
    const expected = 8
    const target = 3

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesThreeOrFourOfKind(dices,target);
    
    expect(result).toBe(expected)
    
  })
  it("ต้องได้คะแนนเท่ากับ 12 เมื่อส่ง dices[2,2,2,3,3] และ target เป็น 3",()=>{
    const dices: DiceRoll =[2,2,2,3,3];
    const expected = 12
    const target = 3

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesThreeOrFourOfKind(dices,target);
    
    expect(result).toBe(expected)
    
  })
  it("ต้องได้คะแนนเท่ากับ 0 เมื่อส่ง dices[1,3,5,5,6] และ target เป็น 3",()=>{
    const dices: DiceRoll =[1,3,5,5,6];
    const expected = 0
    const target = 3

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesThreeOrFourOfKind(dices,target);
    
    expect(result).toBe(expected)
    
  })
  it("ต้องได้คะแนนเท่ากับ 0 เมื่อส่ง dices[2,4,5,3,6]และ target เป็น 3",()=>{
    const dices: DiceRoll =[2,4,5,3,6];
    const expected = 0
    const target = 3

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesThreeOrFourOfKind(dices,target);
    
    expect(result).toBe(expected)
    
  })
  it("ต้องได้คะแนนเท่ากับ 26 เมื่อส่ง dices[5,5,5,5,6]และ target เป็น 4",()=>{
    const dices: DiceRoll =[5,5,5,5,6];
    const expected = 26
    const target = 4

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesThreeOrFourOfKind(dices,target);
    
    expect(result).toBe(expected)
    
  })
  it("ต้องได้คะแนนเท่ากับ 13 เมื่อส่ง dices[1,1,1,4,6]และ target เป็น 4",()=>{
    const dices: DiceRoll =[1,1,1,4,6];
    const expected = 0
    const target = 4

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesThreeOrFourOfKind(dices,target);
    
    expect(result).toBe(expected)
    
  })
  it("ต้องได้คะแนนเท่ากับ 0 เมื่อส่ง dices[5,5,5,3,3]และ target เป็น 4",()=>{
    const dices: DiceRoll =[5,5,5,3,3];
    const expected = 0
    const target = 4

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesThreeOrFourOfKind(dices,target);
    
    expect(result).toBe(expected)
    
  })
  it("ต้องได้คะแนนเท่ากับ 0 เมื่อส่ง dices[1,1,5,4,3]และ target เป็น 4",()=>{
    const dices: DiceRoll =[1,1,5,4,3];
    const expected = 0
    const target = 4

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesThreeOrFourOfKind(dices,target);
    
    expect(result).toBe(expected)
    
  })
  it("ต้องได้คะแนนเท่ากับ 0 เมื่อส่ง dices[1,2,3,4,5]และ target เป็น 4",()=>{
    const dices: DiceRoll =[1,2,3,4,5];
    const expected = 0
    const target = 4

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesThreeOrFourOfKind(dices,target);
    
    expect(result).toBe(expected)
    
  })
})

describe("Yahtzee Small straight and Large straight case",()=>{
  it("ต้องได้คะแนนเท่ากับ 30 เมื่อส่ง dices[1,2,3,4,6] และ target เป็น small",()=>{
    const dices: DiceRoll =[1,2,3,4,6];
    const expected = 30
    const target = "small"

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesBySmallAndLargeStraight(dices,target);
    
    expect(result).toBe(expected)
    
  })
  it("ต้องได้คะแนนเท่ากับ 30 เมื่อส่ง dices[4,6,5,1,3] และ target เป็น small",()=>{
    const dices: DiceRoll =[4,6,5,1,3];
    const expected = 30
    const target = "small"

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesBySmallAndLargeStraight(dices,target);
    
    expect(result).toBe(expected)
    
  })
  it("ต้องได้คะแนนเท่ากับ 30 เมื่อส่ง dices[1,2,3,4,5] และ target เป็น small",()=>{
    const dices: DiceRoll =[1,2,3,4,5];
    const expected = 30
    const target = "small"

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesBySmallAndLargeStraight(dices,target);
    
    expect(result).toBe(expected)
    
  })
  it("ต้องได้คะแนนเท่ากับ 0 เมื่อส่ง dices[1,2,3,5,6] และ target เป็น small",()=>{
    const dices: DiceRoll =[1,2,3,5,6];
    const expected = 0
    const target = "small"

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesBySmallAndLargeStraight(dices,target);
    
    expect(result).toBe(expected)
    
  })
  it("ต้องได้คะแนนเท่ากับ 40 เมื่อส่ง dices[2,3,4,5,6] และ target เป็น large",()=>{
    const dices: DiceRoll =[2,3,4,5,6];
    const expected = 40
    const target = "large"

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesBySmallAndLargeStraight(dices,target);
    
    expect(result).toBe(expected)
    
  })
  it("ต้องได้คะแนนเท่ากับ 40 เมื่อส่ง dices[2,4,5,1,3] และ target เป็น large",()=>{
    const dices: DiceRoll =[2,4,5,1,3];
    const expected = 40
    const target = "large"

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesBySmallAndLargeStraight(dices,target);
    
    expect(result).toBe(expected)
    
  })
  it("ต้องได้คะแนนเท่ากับ 0 เมื่อส่ง dices[1,3,4,5,6]และ target เป็น large",()=>{
    const dices: DiceRoll =[1,3,4,5,6];
    const expected = 0
    const target = "large"

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesBySmallAndLargeStraight(dices,target);
    
    expect(result).toBe(expected)
    
  })
  it("ต้องได้คะแนนเท่ากับ 0 เมื่อส่ง dices[2,2,3,4,5]และ target เป็น large",()=>{
    const dices: DiceRoll =[2,2,3,4,5];
    const expected = 0
    const target = "large"

    const yahtzee = new Yahtzee()
    
    const result = yahtzee.calculateDicesBySmallAndLargeStraight(dices,target);
    
    expect(result).toBe(expected)
    
  })
})