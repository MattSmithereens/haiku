export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1.replace(/[.,#!$%&'?;:{}=\-_`~()]/g,"").toLowerCase().split(" ");
    this.line2 = line2.replace(/[.,#!$%&'?;:{}=\-_`~()]/g,"").toLowerCase().split(" ");
    this.line3 = line3.replace(/[.,#!$%&'?;:{}=\-_`~()]/g,"").toLowerCase().split(" ");
    this.myLetters = {
      vowels: ["a", "e", "i", "o", "u"],
      esPrefixes: ["c", "s", "x", "g", "h", "z"],
      pthPrefixes: ["c", "s", "x", "g", "h", "t"],
      edPrefixes: ["t", "d"],
      dumbE: ["acme", "acne", "ante", "Boise", "bebe", "catastrophe", "hyperbole", "maybe", "posse", "adobe", "apache", "karate", "peyote", "reveille", "sesame", "shoshone", "syncope", "vigilante"]
    }
    this.counter = 0;
  }

  vowelCounter(line) {
    for (let i = 0; i < line.length; i++) {
      for (let j = 0; j < line[i].length; j++) {
        if (this.myLetters.vowels.includes(line[i][j])) {
          this.counter++;
        }
      }
    }
  }

  endsWithE(line) {
    for (let i = 0; i < line.length; i++) {
      if (this.myLetters.dumbE.includes(line[i])) {
        this.counter + 0;
      }
      else if (line[i].endsWith("e") && this.counter === 1) {
        this.counter + 0;
      }
      else if (line[i].endsWith("e")) {
        this.counter--;
      }
    }
  }

  endsWithES(line) {
    for (let i = 0; i < line.length; i++) {
      let prefix = line[i][line[i].length - 3];
      if ((line[i].endsWith("es")) && (!this.myLetters.esPrefixes.includes(prefix)))  {
        this.counter--;
      }
    }
  }

  endsWithED(line) {
    for (let i = 0; i < line.length; i++) {
      let prefix = line[i][line[i].length - 3];
      if ((line[i].endsWith("ed")) && (!this.myLetters.edPrefixes.includes(prefix)))  {
        this.counter--;
      }
    }
  }

  endsWithY(line) {
    for (let i = 0; i < line.length; i++) {
      let prefix = line[i][line[i].length - 2];
      if ((line[i].endsWith("y")) && (!this.myLetters.vowels.includes(prefix)))  {
        this.counter++;
      }
    }
  }

  adjacentVowels(line) {
    for (let i = 0; i < line.length; i++) {
      for (let j = 0; j < line[i].length; ) {
        if ((line[i][j] === "e") && (line[i][j+1] === "a") && (line[i][j+2] === "u")) {
          this.counter-=2;
          j+=2;
        }
        else if ((line[i][j] === "i") && (line[i][j+1] === "o") && (line[i][j+2] === "u") && (this.myLetters.pthPrefixes.includes(line[i][j-1]))) {
          this.counter-=2;
          j+=2;
        }
        else if ((this.myLetters.vowels.includes(line[i][j])) && (this.myLetters.vowels.includes(line[i][j+1])) && (this.myLetters.vowels.includes(line[i][j+2]))) {
          this.counter--;
          j+=2;
        }
        else if ((this.myLetters.vowels.includes(line[i][j])) && (this.myLetters.vowels.includes(line[i][j+1]))) {
          this.counter--;
          j++;
        } else {
          j++;
        }
      }
    }
  }

  resetCounter() {
    this.counter = 0;
  }
}
