import { AgeCalculator } from './../src/agecalculator.js';

describe('AgeCalculator', function() {
  let reusableCalculator;

  beforeEach(function() {
    reusableCalculator = new AgeCalculator(47);
  });

  it('should take an age as an argument and create a new instance of the class', function() {
    expect(reusableCalculator.earthAge).toEqual(47);
  });

  it('should return the inputted age converted to Mercury years', function() {
    expect(reusableCalculator.GetMercuryYears()).toEqual(11);
  });

  it('should return the inputted age converted to Venus years', function() {
    expect(reusableCalculator.GetVenusYears()).toEqual(29);
  });

  it('should return the inputted age converted to Mars years', function() {
    expect(reusableCalculator.GetMarsYears()).toEqual(88);
  });

  it('should return the inputted age converted to Jupiter years', function() {
    expect(reusableCalculator.GetJupiterYears()).toEqual(557);
  });



});
