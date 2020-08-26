// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
console.log(
  kataPertama +
    " " +
    kataKedua.charAt(0).toUpperCase() +
    kataKedua.slice(1) +
    " " +
    kataKetiga +
    " " +
    kataKeempat.toUpperCase()
);

// soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
var kpInt = Number(kataPertama);
var kdInt = Number(kataKedua);
var ktInt = Number(kataKetiga);
var kkInt = Number(kataKeempat);
console.log(kpInt + kdInt + ktInt + kkInt);

//soal 3
var kalimat = "wah javascript itu keren sekali";
var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);
console.log("Kata Pertama: " + kataPertama);
console.log("Kata Kedua: " + kataKedua);
console.log("Kata Ketiga: " + kataKetiga);
console.log("Kata Keempat: " + kataKeempat);
console.log("Kata Kelima: " + kataKelima);

//soal 4
var nilai = 30;
if (nilai >= 80) {
  console.log("A");
} else if (nilai >= 70 && nilai < 80) {
  console.log("B");
} else if (nilai >= 60 && nilai < 70) {
  console.log("C");
} else if (nilai >= 50 && nilai < 60) {
  console.log("D");
} else if (nilai < 50) {
  console.log("E");
}

//soal 5
var tanggal = 13;
var bulan = 3;
var tahun = 1997;
switch (bulan) {
  case 1:
    console.log(tanggal + " " + "januari" + " " + tahun);
    break;
  case 2:
    console.log(tanggal + " " + "februari" + " " + tahun);
    break;
  case 3:
    console.log(tanggal + " " + "maret" + " " + tahun);
    break;
  case 4:
    console.log(tanggal + " " + "april" + " " + tahun);
    break;
  case 5:
    console.log(tanggal + " " + "mei" + " " + tahun);
    break;
  case 6:
    console.log(tanggal + " " + "juni" + " " + tahun);
    break;
  case 7:
    console.log(tanggal + " " + "juli" + " " + tahun);
    break;
  case 8:
    console.log(tanggal + " " + "agustus" + " " + tahun);
    break;
  case 9:
    console.log(tanggal + " " + "september" + " " + tahun);
    break;
  case 10:
    console.log(tanggal + " " + "oktober" + " " + tahun);
    break;
  case 11:
    console.log(tanggal + " " + "november" + " " + tahun);
    break;
  case 12:
    console.log(tanggal + " " + "desember" + " " + tahun);
    break;
  default:
    console.log(
      "Mohon maaf bulan lahir di variable anda melebihi jumlah bulan"
    );
}
