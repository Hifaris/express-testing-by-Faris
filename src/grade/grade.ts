export const getGrade = (score: number): string => {
    
    if(!Number.isInteger(score)) {
        return "Invalid type"
    }
    if(score < 0 || score > 100) {
        return "Invalid input"
    }
    if(score >= 80 && score <= 100) {
        return "A";
    }
    if(score >= 0 && score <= 49) {
        return "F"
    }
    if(score >=50 && score <= 54) {
      return "D";
    }
    if(score >= 55 && score <= 59) {
      return "D+";
    }
    if(score >= 60 && score <= 64) {
      return "C";
    }
    if(score >= 65 && score <= 69) {
      return "C+";
    }
  
    if(score >= 70 && score <= 74) {
      return "B";
    }
    if (score >=75 && score <= 79) {
    return "B+";
  }
  return "invalid input";
};
