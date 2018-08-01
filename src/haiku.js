export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1.replace(/[.,#!$%&'?;:{}=\-_`~()]/g,"").toLowerCase().split(" ");
    this.line2 = line2.replace(/[.,#!$%&'?;:{}=\-_`~()]/g,"").toLowerCase().split(" ");
    this.line3 = line3.replace(/[.,#!$%&'?;:{}=\-_`~()]/g,"").toLowerCase().split(" ");
    this.myLetters = {
      y: "y",
      vowels: ["a", "e", "i", "o", "u"],
      dumbE: ["acme", "acne", "ante", "Boise", "maybe", "posse", "adobe", "apache", "karate", "peyote", "reveille", "sesame", "shoshone", "syncope", "vigilante"]
    }
    this.counter = 0;
  }

  vowelCounter(line) {
    this.resetCounter(); // move later
    for (let i = 0; i < line.length; i++) {
      for (let j = 0; j < line[i].length; j++) {
        if (this.myLetters.vowels.includes(line[i][j])) {
          this.counter++;
        }
      }
    }
    return this.counter;
  }

  endsWithE(line) {
    for (let i = 0; i < line.length; i++) {
      if (this.myLetters.dumbE.includes(line[i])) {
        this.counter + 0;
      }
      else if (line[i].endsWith("e")) {
        this.counter--;
      }
    }
  }

  resetCounter() {
    this.counter = 0;
  }
}
