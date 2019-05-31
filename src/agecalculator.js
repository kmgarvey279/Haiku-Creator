export class AgeCalculator {
  constructor(inputtedAge) {
    this.earthAge = inputtedAge;
  }
  GetMercuryYears() {
    return Math.floor(this.earthAge * .24);
  }

  GetVenusYears() {
    return Math.floor(this.earthAge * .62);
  }

  GetMarsYears() {
    return Math.floor(this.earthAge * 1.88);
  }

  GetJupiterYears() {
    return Math.floor(this.earthAge * 11.86);
  }
}
