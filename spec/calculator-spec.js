import { AgeCalculator } from './../src/agecalculator.js';

describe('AgeCalculator', function() {
  it('should take a year, month, and day as an argument and create a new instance of the class', function() {
    let newCalculator = new AgeCalculator('04-04-1987');
    let testDate = new Date('04-04-1987');
    expect(newCalculator.getBirthDate()).toEqual(testDate);
  });

  it('should take the inputted birthday and return the correct age in Earth Years', function() {
    let newCalculator = new AgeCalculator('04-04-1987');
    expect(newCalculator.getEarthAge()).toEqual(32);
  });

  it('should take the inputted birthday and return the correct age in Mercury Years', function() {
    let newCalculator = new AgeCalculator('04-04-1987');
    expect(newCalculator.getMercuryAge()).toEqual(7);
  });

  it('should take the inputted birthday and return the correct age in Venus Years', function() {
    let newCalculator = new AgeCalculator('04-04-1987');
    expect(newCalculator.getVenusAge()).toEqual(19);
  });

  it('should take the inputted birthday and return the correct age in Mars Years', function() {
    let newCalculator = new AgeCalculator('04-04-1987');
    expect(newCalculator.getMarsAge()).toEqual(60);
  });

  it('should take the inputted birthday and return the correct age in Jupiter Years', function() {
    let newCalculator = new AgeCalculator('04-04-1987');
    expect(newCalculator.getJupiterAge()).toEqual(379);
  });

  it('should return 71 (the global average human lifespan) subtracted by inputted age if no other life expectancy information is entered', function() {
      let newCalculator = new AgeCalculator('04-04-1987');
      expect(newCalculator.getLifeExpectancy()).toEqual(39);
  });

  it('should return the national average subtracted by the inputted age if nationality is selected', function() {
      let newCalculator = new AgeCalculator('04-04-1987');
      expect(newCalculator.getLifeExpectancy('UNITED STATES', "", false)).toEqual(48);
  });

  it('should subtract one year from the result if male is selected for gender', function() {
      let newCalculator = new AgeCalculator('04-04-1987');
      expect(newCalculator.getLifeExpectancy("", "male", false)).toEqual(38);
  });

  it('should subtract ten years from the result if yes is selected for smoker', function() {
      let newCalculator = new AgeCalculator('04-04-1987');
      expect(newCalculator.getLifeExpectancy("", "male", true)).toEqual(28);
  });

});
