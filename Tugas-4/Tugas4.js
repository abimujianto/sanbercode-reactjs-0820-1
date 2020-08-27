console.log("soal 1================================");
var no1 = 2;
console.log("LOOPING PERTAMA");
while (no1 <= 20) {
  console.log(no1 + " - I Love coding");
  no1 += 2;
}
console.log("LOOPING KEDUA");
var no2 = 20;
while (no2 >= 2) {
  console.log(no2 + " - I will become a frontend developer");
  no2 -= 2;
}
console.log("soal 2================================");
for (var mood = 1; mood <= 20; mood++) {
  if (mood % 3 === 0 && mood % 2 === 1) {
    console.log(mood + " - I Love Coding");
  } else if (mood % 2 === 0) {
    console.log(mood + " - Berkualitas");
  } else console.log(mood + " - Santai");
}

console.log("soal 3================================");

var num = " ";
var angk = 7;

for (var i = 1; i <= angk; i++) {
  num = num + "#";

  console.log(num);
}
console.log("soal 4================================");
var kalimat = "saya sangat senang belajar javascript";
var rubah = kalimat.split(" ");
console.log(rubah);

console.log("soal 5================================");
var daftarBuah = [
  "2. Apel",
  "5. Jeruk",
  "3. Anggur",
  "4. Semangka",
  "1. Mangga",
];
var o = daftarBuah.sort();
var no1 = daftarBuah[0];
var no2 = daftarBuah[1];
var no3 = daftarBuah[2];
var no4 = daftarBuah[3];
var no5 = daftarBuah[4];
console.log(no1);
console.log(no2);
console.log(no3);
console.log(no4);
console.log(no5);
