export class AgeCalculator {
  constructor(inputtedYear, inputtedMonth, inputtedDay) {
    this.birthDate = new Date(inputtedYear, inputtedMonth, inputtedDay);
  }

  GetEarthAge() {
    return (Date.now().getFullYear - this.birthDate.getFullYear());
  }

  GetMercuryYears() {
    return Math.floor(GetEarthAge() * .24);
  }

  GetVenusYears() {
    return Math.floor(GetEarthAge() * .62);
  }

  GetMarsYears() {
    return Math.floor(GetEarthAge() * 1.88);
  }

  GetJupiterYears() {
    return Math.floor(GetEarthAge() * 11.86);
  }
}
