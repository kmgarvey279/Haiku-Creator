import { AgeCalculator } from './../src/agecalculator.js';

describe('AgeCalculator', function() {
  it('should test whether three lines have been entered', function() {
    var haiku = new HaikuCreator("line1", "line2", "line3");
    expect(haiku.line1).toEqual("line1");
    expect(haiku.line2).toEqual("line2");
    expect(haiku.line3).toEqual("line3");
  });

  it('should test whether a word has three letters or fewer', function() {
    var haiku = new HaikuCreator("line1", "line2", "line3");
    expect(haiku.CheckSyllable(["one"])).toEqual(1);
  });

  it('should test whether a vowel is followed by another vowel', function() {
    var haiku = new HaikuCreator("line1", "line2", "line3");
    expect(haiku.CheckSyllable(["daes"])).toEqual(1);
  })

  it('should test whether an e is the last char in a word and ignore it', function() {
    var haiku = new HaikuCreator("line1", "line2", "line3");
    expect(haiku.CheckSyllable(["ddddde"])).toEqual(0);
  })


});
