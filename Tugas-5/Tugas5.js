console.log("------------SOAL 1--------------");
//SOAl1
function halo() {
  return "Halo Sanbers!";
}

console.log(halo());
console.log("------------SOAL 2--------------");
//SOAL2
function kalikan(num1, num2) {
  return num1 * num2;
}
var num1 = 12;
var num2 = 4;
var hasilKali = kalikan(num1, num2);
console.log(hasilKali);
console.log("------------SOAL 3--------------");
//SOAL3
function introduce(name, age, address, hobby) {
  return (
    "Nama saya " +
    name +
    ", umur saya " +
    age +
    " tahun, alamat saya di " +
    address +
    ", dan saya punya hobby yaitu " +
    hobby +
    "!"
  );
}
var name = "Jhon";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";
var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);
console.log("------------SOAL 4--------------");
//SOAL4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];
var objectpeserta = {
  nama: arrayDaftarPeserta[0],
  "jenis kelamin": arrayDaftarPeserta[1],
  hobi: arrayDaftarPeserta[2],
  "tahun lahir": arrayDaftarPeserta[3],
};
console.log(objectpeserta);

//SOAL5
console.log("------------SOAL 5--------------");
var arrObj = [
  {
    nama: "strawberry",
    warna: "merah",
    "ada bijinya": "tidak",
    harga: 9000,
  },
  {
    nama: "jeruk",
    warna: "oranye",
    "ada bijinya": "ada",
    harga: 8000,
  },
  {
    nama: "Semangka",
    warna: "Hijau & Merah",
    "ada bijinya": "ada",
    harga: 10000,
  },
  {
    nama: "Pisang",
    warna: "Kuning",
    "ada bijinya": "tidak",
    harga: 5000,
  },
];
console.log(arrObj[0]);

//SOAL6
console.log("------------SOAL 6--------------");
var dataFilm = [];

function fil(nmbahData) {
  dataFilm.push(nmbahData);
}

fil({
  nama: "McJackson",
  genre: "thriler",
  durasi: "50mins",
  tahun: 2000,
});

console.log(dataFilm);
