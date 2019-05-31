import { AgeCalculator } from './../src/agecalculator.js';

describe('AgeCalculator', function() {
  var reusableCalculator;

  beforeEach(function() {
    reusableCalculator = new AgeCalculator(1987, 03, 04);
  });

  it('should take a year, month, and day as an argument and create a new instance of the class', function() {
    let testDate = new Date(1987, 03, 04);
    expect(reusableCalculator.birthDate).toEqual(testDate);
  });

  it('should take the inputted birthday and return the correct age in Earth Years', function() {
    expect(reusableCalculator.GetEarthAge()).toEqual(32);
  });

});
