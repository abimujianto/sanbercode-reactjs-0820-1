//Soal 1
console.log("===========1===========");
const luasLingkaran = (jariJari) => {
  let pi = jariJari % 7 === 0 ? 22 / 7 : 3.14;
  return pi * jariJari * jariJari;
};

const kelilingLingkaran = (diameter) => {
  return diameter * 3.14;
};
console.log(
  `luas lingkarang ialah ${luasLingkaran(
    7
  )} dan keliling lingkaran ialah ${kelilingLingkaran(8)}`
);
console.log("===========2===========");
//Soal 2
let kalimat = "";
const tambahKata = () => {
  let a = "saya";
  let b = "adalah";
  let c = "seorang";
  let d = "frontend";
  let e = "developer";

  kalimat.push(`${a} ${b} ${c} ${d} ${e}`);
};

//soal 3
console.log("===========3===========");
const newFunction = (firstName, lastName) => {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: () => {
      console.log(`${firstName} ${lastName}`);
      return;
    },
  };
};

newFunction("William", "Imoh").fullName();

//soal 4
console.log("===========4===========");
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!",
};

const { firstName, lastName, destination, occupation, spell } = newObject;
console.log(firstName, lastName, destination, occupation);

console.log("===========5===========");
//soal 5
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];
console.log(combined);
