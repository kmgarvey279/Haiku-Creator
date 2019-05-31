import { AgeCalculator } from './../src/agecalculator.js';

describe('AgeCalculator', function() {
  it('should take a year, month, and day as an argument and create a new instance of the class', function() {
    let newCalculator = new AgeCalculator('04-04-1987');
    let testDate = new Date('04-04-1987');
    console.log(newCalculator.currentDate);
    console.log(newCalculator.getBirthDate());
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

});
