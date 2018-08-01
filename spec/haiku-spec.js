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
    let x = haiku.vowelCounter(haiku.line1);
    let y = haiku.vowelCounter(haiku.line2);
    let z = haiku.vowelCounter(haiku.line3);
    expect(x).toEqual(4);
    expect(y).toEqual(3);
    expect(z).toEqual(5);

  });

  it('should count down 1 for trailing E on word', function() {
    let haiku = new Haiku("hello there", "what is up", "not a haiku");
    haiku.endsWithE(haiku.line1);
    // haiku.vowelCounter2();
    // haiku.vowelCounter3();
    expect(haiku.counter).toEqual(-1);
    // expect(haiku.countLine2).toEqual(3);
    // expect(haiku.countLine3).toEqual(5);

  });
});
