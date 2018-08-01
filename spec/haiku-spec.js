import { Haiku } from "../src/haiku.js";

describe('Haiku', function() {
  it('should test whether a Haiku has three lines', function() {
    var haiku = new Haiku("hello there", "what is up", "not a haiku");
    expect(haiku.line1).toEqual("hello there");
    expect(haiku.line2).toEqual("what is up");
    expect(haiku.line3).toEqual("not a haiku");
  });
});
