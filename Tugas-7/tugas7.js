// //Soal1
// console.log("=============1=============");
// class Animal {
//   constructor(name) {
//     this.name = name;
//     this._legs = 4;
//     this._cold_blooded = false;
//   }
//   get legs() {
//     return this._legs;
//   }
//   get cold_blooded() {
//     return this._cold_blooded;
//   }
// }

// var sheep = new Animal("shaun");
// console.log(sheep.name); // "shaun"
// console.log(sheep.legs); // 4
// console.log(sheep.cold_blooded); // false

// class Ape extends Animal {
//   constructor(name) {
//     super(name);
//   }
//   yell() {
//     return "Auoo";
//   }
//   legs() {
//     return 2;
//   }
// }
// var sungokong = new Ape("kera sakti");
// sungokong.yell(); // "Auooo"

// class Frog extends Animal {
//   constructor(nama) {
//     super(nama);
//   }
//   jump() {
//     return "hop hop";
//   }
// }
// var kodok = new Frog("buduk");
// kodok.jump(); // "hop hop"

//soal2
console.log("=============2=============");

class Clock {
  constructor({ template }) {
    this.template = template;
    this.timer;
  }
  render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    var output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(timer);
  }

  start() {
    this.render;
    setInterval(this.render.bind(), 1000);
  }
}

var clock = new Clock({ template: "h:m:s" });
clock.start();
