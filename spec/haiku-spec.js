import { Haiku } from "../src/haiku.js";

describe('Haiku', function() {

  it('should test whether a Haiku has three lines', function() {
    var haiku = new Haiku("HELL'o? There!!", "what?! is up?", "isn't a haiku");
    console.log(haiku.line1);
    expect(haiku.line1).toEqual(["hello", "there"]);
    expect(haiku.line2).toEqual(["what", "is", "up"]);
    expect(haiku.line3).toEqual(["isnt", "a", "haiku"]);
  });

  it('should count how many vowels are in each line', function() {
    var haiku = new Haiku("hello there", "what is up", "not a haiku");
    haiku.vowelCounter1();
    haiku.vowelCounter2();
    haiku.vowelCounter3();
    expect(haiku.countLine1).toEqual(4);
    expect(haiku.countLine2).toEqual(3);
    expect(haiku.countLine3).toEqual(5);

  });

  it('should count down 1 for trailing E on word', function() {
    var haiku = new Haiku("hello there", "what is up", "not a haiku");
    haiku.endsWithE();
    // haiku.vowelCounter2();
    // haiku.vowelCounter3();
    expect(haiku.countLine1).toEqual(-1);
    // expect(haiku.countLine2).toEqual(3);
    // expect(haiku.countLine3).toEqual(5);

  });
});
