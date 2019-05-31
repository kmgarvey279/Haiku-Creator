export class AgeCalculator {
  constructor(birthday) {
    this.birthDate = new Date(birthday);
    this.currentDate = new Date();
  }

  getBirthDate() {
    return this.birthDate;
  }

  getEarthAge() {
    let age = this.currentDate.getFullYear() - this.birthDate.getFullYear();
    return age;
  }

  getMercuryAge() {
    return Math.floor(this.getEarthAge() * .24);
  }

  getVenusAge() {
    return Math.floor(this.getEarthAge() * .62);
  }

  getMarsAge() {
    return Math.floor(this.getEarthAge() * 1.88);
  }

  getJupiterAge() {
    return Math.floor(this.getEarthAge() * 11.86);
  }
}
