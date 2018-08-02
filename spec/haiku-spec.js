import { Haiku } from "../src/haiku.js";

describe('Haiku', function() {

  it('should test whether a Haiku has three lines', function() {
    let haiku = new Haiku("HELL'o? There!!", "what?! is up?", "isn't a haiku");
    expect(haiku.line1).toEqual(["hello", "there"]);
    expect(haiku.line2).toEqual(["what", "is", "up"]);
    expect(haiku.line3).toEqual(["isnt", "a", "haiku"]);
  });

  it('should count how many vowels are in each line', function() {
    let haiku = new Haiku("hello there", "what is up", "not a haiku");
    haiku.vowelCounter(haiku.line1);
    expect(haiku.counter).toEqual(4);

  });

  it('should count down 1 for trailing E on word', function() {
    let haiku = new Haiku("hello there", "what is up", "not a haiku");
    haiku.endsWithE(haiku.line1);
    expect(haiku.counter).toEqual(-1);

  });

  it('should decrement if adjacent vowels are detected', function() {
    let haiku = new Haiku("thou", " ", " ");
    haiku.adjacentVowels(haiku.line1);
    expect(haiku.counter).toEqual(-1);

  });

  it('should not decrease counter if ending e is the only vowel', function() {
    let haiku = new Haiku("he", " ", " ");
    haiku.vowelCounter(haiku.line1);
    haiku.endsWithE(haiku.line1);
    expect(haiku.counter).toEqual(1);

  });

  it('should decrement counter by 1 if the word ends in es not preceded by esPrefixes', function() {
    let haiku = new Haiku("lines", " ", " ");
    haiku.vowelCounter(haiku.line1);
    haiku.endsWithES(haiku.line1);
    expect(haiku.counter).toEqual(1);

  });

  it('should increment counter by 1 if the word ends in y not preceded by a vowel', function() {
    let haiku = new Haiku("stay", " ", " ");
    haiku.vowelCounter(haiku.line1);
    haiku.endsWithY(haiku.line1);
    expect(haiku.counter).toEqual(1);

  });

  it('should decrement counter by 2 if the word contains iou preceded by a soft consonant', function() {
    let haiku = new Haiku("ambitious", " ", " ");
    haiku.vowelCounter(haiku.line1);
    haiku.adjacentVowels(haiku.line1);
    expect(haiku.counter).toEqual(3);

  });

  it('should decrement counter by 2 if the word contains eau', function() {
    let haiku = new Haiku("eau", " ", " ");
    haiku.adjacentVowels(haiku.line1);
    expect(haiku.counter).toEqual(-2);

  });

  it('should decrement counter by 1 if the word ends in ed not preceded by edPrefixes', function() {
    let haiku = new Haiku("phrased", " ", " ");
    haiku.vowelCounter(haiku.line1);
    haiku.endsWithED(haiku.line1);
    expect(haiku.counter).toEqual(1);

  });

  it('should not allow a 0 counter value for a word regardless of verb configuration', function() {
    let haiku = new Haiku("hey you brrr shh", " ", " ");
    haiku.vowelCounter(haiku.line1);
    haiku.noVowels(haiku.line1);
    expect(haiku.counter).toEqual(5);

  });

});
