export class AgeCalculator {
  constructor(inputtedAge) {
    this.earthAge = inputtedAge;
  }

  GetYearOfBirth() {
    let cur = new Date();
    let yearOfBirth = cur.setFullYear(cur.getFullYear() - this.earthAge);
    return yearOfBirth.getFullYear();
  }
}
