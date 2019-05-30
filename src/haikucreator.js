export class HaikuCreator {
  constructor(line1, line2, line3) {
  this.line1 = line1;
  this.line2 = line2;
  this.line3 = line3;
}

  CheckSyllable(stringToCheck) {
    let syllableCount = 0;
    const vowels = new Array('a', 'e', 'i', 'o', 'u');
    for(let i = 0; i < stringToCheck.length; i++) {
      if(stringToCheck[i].length <= 3) {
        syllableCount++
        console.log("above else");
        console.log(stringToCheck[i]);
      } else {
        console.log("below else");
        let splitWord = stringToCheck[i].split('');
        console.log(splitWord);
        for(let j = 0; j < splitWord.length; j++) {
          console.log(splitWord[j]);
          if(vowels.includes(splitWord[j])) {
            console.log("char is vowel");
            if(j == 'e' && j == splitWord.length-1 || vowels.includes(splitWord[j+1])) {
              console.log("ignore e/double");
              syllableCount;
            } else if(vowels.includes(splitWord[j])) {
              console.log("otherwise add to syllible count");
              syllableCount++
              console.log(syllableCount);
            }
          }
        }
      }
    }
    return syllableCount;
  }

  CheckHaiku() {
    const splitLine1 = this.line1.split(" ");
    const splitLine2 = this.line2.split(" ");
    const splitLine3 = this.line3.split(" ");

    const syllableTotal1 = this.checkSyllable(splitLine1);
    const syllableTotal2 = this.checkSyllable(splitLine2);
    const syllableTotal3 = this.checkSyllable(splitLine3);

    if(syllableTotal1 == 5 && syllableTotal2 == 7 && syllableTotal3 == 5) {
      return true;
    } else {
      return false;
    }
  }
}
