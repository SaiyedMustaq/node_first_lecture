// const uName = "Next";
// let age = 20;
// age = 30;

// const summrizeUser = function (userName, userAge) {
//   return "Name is " + userName + ", age is " + userAge;
// };

// console.log(summrizeUser(uName, age));

// //Arrow function
// const summrizeUser2 = (userName, userAge) => {
//   return "Name is " + userName + ", age is " + userAge;
// };
// console.log(summrizeUser2(uName, age));

// //NOTE Arrow function with multiple parameters
// const subb = (a, b) => {
//   return a - b;
// };
// //NOTE -  Shorthand syntax if only one expression is there in the function body
// const add = (a, b) => a + b;

// const addOne = (a) => a + 1;
// const addTwo = (a) => a + 2;

// const addRandom = () => 1 + 2;

// console.log(addRandom());
// console.log(addTwo(5));
// console.log(addOne(5));
// console.log(subb(5, 3));
// console.log(add(5, 3));

//NOTE -  Objects
const person = {
  name: "Max",
  age: 30,
  greet() {
    console.log("Hi, I am " + this.name + "Age is " + this.age);
  },
  getName: function () {
    console.log(this.name);
  },
};
// console.log(person.greet);
// person.greet();
// person.getName();

//NOTE - Arrays
//const hobbies = ["Sports", "Cooking"];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }

///NOTE -  map will allways return a new array no modification of existing array
// console.log(hobbies.map((hobby) => "Hobby: " + hobby));
// console.log(hobbies);
// hobbies.push("Programming");
// console.log(hobbies);

//NOTE - Spread Operator. slice() creates a shallow copy of the array
//const copiedArray = hobbies.slice();
//NOTE - Another way of copying an array using spread operator
// const copiedArray2 = [...hobbies];
// console.log(copiedArray, copiedArray2);

// const person2 = { ...person };
// console.log(person2);

//NOTE - Rest Parameters - collects all arguments into an array
// const toArray = (...args) => {
//   return args;
// };
// console.log(toArray(1, 2, 3, 4));

//NOTE - Destructuring Arrays
// const myHobbies = ["Sports", "Cooking"];
// const [hobby1, hobby2, hobby3] = myHobbies;
// console.log(hobby1, hobby2, hobby3);

// const myHobbiesArgs = ["Sports", "Cooking", "Reading"];
// const [...args] = myHobbies;
// console.log(args);

//NOTE - Destructuring Objects
// const userDetails = { userName: "Max", userAge: 30 };
// const { userName, userAge, position } = userDetails;
// console.log(userName, userAge, position);
// const printUserName = ({ name, age }) => {
//   console.log(name + " " + age);
// };
// printUserName(person);

// const fetchData = (callback) => {
//   setTimeout(() => {
//     callback("Done!");
//   }, 1500);
// };
// //NOTE - Async code - setTimeout
// setTimeout(() => {
//   console.log("Timer is done!");
//   fetchData((text) => {
//     console.log(text);
//   });
// }, 2000);

///NOTE - Promises
// const fetchData = () => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Done!");
//     }, 1500);
//   });
//   return promise;
// };
// fetchData()
//   .then((text) => {
//     console.log(text);
//     return fetchData();
//   })
//   .then((text2) => {
//     console.log(text2);
//   });

// console.log("Hello!");
// console.log("Hi!");
