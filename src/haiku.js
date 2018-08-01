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
  }

  vowelCounter(line) {
    let count = 0;
    for (let i = 0; i < line.length; i++) {
      for (let j = 0; j < line[i].length; j++) {
        if (this.myLetters.vowels.includes(line[i][j])) {
          count++;
        }
      }
    }
    return count;
  }

  endsWithE() {
    for (let i = 0; i < this.line1.length; i++) {
      if (this.line[i].equals(this.myLetters.dumbE)) {
        this.countLine + 0;
      }
      else if (this.line1[i].endsWith("e")) {
        this.countLine1--;
      }
    }
  }
}
