import { AgeCalculator } from './../src/agecalculator.js';

describe('AgeCalculator', function() {
  let reusableCalculator;

  beforeEach(function() {
    reusableCalculator = new AgeCalculator(47);
  });

  it('should take an age as an argument and create a new instance of the class', function() {
    expect(reusableCalculator.earthAge).toEqual(47);
  });

  it('should convert the inputted age to Mercury years', function() {
    expect(reusableCalculator.earthAge).toEqual(47);
  });



});
