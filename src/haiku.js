export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1.replace(/[.,#!$%&'?;:{}=\-_`~()]/g,"").toLowerCase().split(" ");
    this.line2 = line2.replace(/[.,#!$%&'?;:{}=\-_`~()]/g,"").toLowerCase().split(" ");
    this.line3 = line3.replace(/[.,#!$%&'?;:{}=\-_`~()]/g,"").toLowerCase().split(" ");
    this.myLetters = {
      y: "y",
      vowels: ["a", "e", "i", "o", "u"]
    }
    this.countLine1 = 0;
    this.countLine2 = 0;
    this.countLine3 = 0;
  }

  vowelCounter1() {
    for (let i = 0; i < this.line1.length; i++) {
      for (let j = 0; j < this.line1[i].length; j++) {
        if (this.myLetters.vowels.includes(this.line1[i][j])) {
          this.countLine1++;
        }
      }
    }
  }

  endsWithE() {
    for (let i = 0; i < this.line1.length; i++) {
      // insert for non-silent trailing E edge case later
      if (this.line1[i].endsWith("e")) {
              this.countLine1--;
      }
    }
  }



// LET's GET WET!!!
  vowelCounter2() {
    for (let i = 0; i < this.line2.length; i++) {
      for (let j = 0; j < this.line2[i].length; j++) {
        if (this.myLetters.vowels.includes(this.line2[i][j])) {
          this.countLine2++;
        }
      }
    }
  }

  vowelCounter3() {
    for (let i = 0; i < this.line3.length; i++) {
      for (let j = 0; j < this.line3[i].length; j++) {
        if (this.myLetters.vowels.includes(this.line3[i][j])) {
          this.countLine3++;
        }
      }
    }
  }


}
