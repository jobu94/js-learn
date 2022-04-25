const user = {
  name: "Josef",
  rc: 940328,
  adress: "Koblizna",
  cp: "7",
  psc: "777777",
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
// let random = Array.from({ length: 20 }, () => Math.floor(Math.random() * 20));

// const num = 5;
// random = random.filter((item) => item !== num);
// console.log(random);

/////////////////////////////////////////////////////////////////////////////
//MAPPING
// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// console.log(rest.set(2, "Lisabon, Portugal"));

// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open")
//   .set(false, "We are close");

// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has("categories"));
// rest.delete(2);
// console.log(rest);

/////////////////////////////////////////////////////////////////////////////
// const question = new Map([
//   ["question", "what is the best programing language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "Javascript"],
//   ["correct", 3],
//   [true, "Correct "],
//   [false, "try again"],
// ]);
// console.log(question);

// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }
// const answer = 3;
// // 3 = 3 which is true, true = Correct
// console.log(question.get(question.get("correct") === answer));

// console.log([...question.keys()]);
// console.log([...question.values()]);

///////////////////////////////////////////////////////////////////////////
//CODING CHALLANGE 3

// const gameEvents = new Map([
//   [17, "⚽ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽ GOAL"],
//   [80, "⚽ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);

// //1
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// //2
// gameEvents.delete(64);
// console.log(gameEvents);

// //3
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(`An event happened, on
// average, every ${time / gameEvents.size} minutes`);

// //4
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? "FIRST" : "SECOND";
//   console.log(`[${half}HALF] ${min}: ${event}`);
// }

///////////////////////////////////////////////////////////////////////////
