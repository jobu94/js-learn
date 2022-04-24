const user = {
  name: "Josef",
  rc: 940328,
  adress: "Kachlikova",
  cp: "885/7",
  psc: "63500",
  day: function () {
    return this.rc % 100;
  },
  month: function () {
    return Math.floor((this.rc % 1000) / 100);
  },
  year: function () {
    return Math.floor(this.rc / 10000);
  },
};
// console.log(
// `${user.name} bydli na adrese ${
//     user.adress
// } a datum narozeni je ${user.day()}.${user.month()}.${user.year()}`
// );
// console.log(JSON.stringify(user, null, 4));

/////////////////////////////////////////////////////////////////////////////
// const vaha = parseInt(prompt("Zadejte vasi vahu v kg:"));
// let vyska = parseInt(prompt("Zadejte vasi vysku v cm:"));

// vyska = vyska / 100;
// function bmi(vaha, vyska) {
//   return (bodyMassIndex = vaha / (vyska * vyska));
// }
// bmi(vaha, vyska);

// if (bodyMassIndex >= 18.5 && bodyMassIndex <= 25) {
//   console.log("Vase vaha je v poradku");
// } else if (bodyMassIndex > 25) {
//   console.log("Jste tloustik a meli byste se nad sebou zamyslet");
// } else {
//   console.log("Jste podvyziveny a bezte na Mekac");
// }
// console.log(`Vase BMI je ${bodyMassIndex}`);

/////////////////////////////////////////////////////////////////////////////
const array = [2, 3, 5, 8, 9, 1, 6, 15, 7, 4];
let count = 0;
let soucet = 1;
let max = 0;
let pozice = 0;

for (let i = 0; i < array.length; i++) {
  //   soucet *= array[i];
  if (max < array[i]) {
    max = array[i];
    pozice = i;
  }
}
// console.log(soucet);
// console.log(max);
// console.log(pozice);

/////////////////////////////////////////////////////////////////////////////
const pole = [0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1];
let binary = true;
for (let i = 0; i < pole.length; i++) {
  if (pole[i] < 0 || pole[i] > 1) {
    binary = false;
  }
}
if (binary) {
  //   console.log("Cisla jsou binarni");
} else {
  //   console.log("Cisla jsou nebinarni");
}
// console.log(binary);

/////////////////////////////////////////////////////////////////////////////
// let n = 10;
// let arrayTest = [];
// for (let i = 0; i < n; i++) {
//   arrayTest[i] = i;
//   if (arrayTest[i] == 5) {
//     arrayTest.splice(i, 1);
//   }
// }
// console.log(arrayTest);

/////////////////////////////////////////////////////////////////////////////
let random = Array.from({ length: 20 }, () => Math.floor(Math.random() * 20));

const num = 5;
random = random.filter((item) => item !== num);
console.log(random);
