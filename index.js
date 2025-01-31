/** @format */

// /** @format */

// // es5 is old version

// // var names = "nika"; // string

// //es6 is new version

// // let age = 23; // number

// // const isMarried = false; // boolean

// // let address; // undefined

// // let x = BigInt("123456789012345678901234567890");// bigint

// // const ages = 100;
// // console.log(ages);

// // ages = 30;

// // console.log(age)

// // const number1 = 20;
// // const number2 = '20';

// // console.log(number1 === number2);

// // const number1 = '50';
// // const number2 = 20

// // const result = number1 % number2;

// // console.log(result);

// //მიმატების გარდა ყველა ოპერაცია შესრულდება;

// // let a = 3;
// // let x = (100 + 50) * a / 2;

// // console.log(x);

// // let x = 2;
// // x--;

// // console.log(x);
// //increment ერთით გაზრდა მნიშვნელობის;
// //decrement ერთით შემცირება მნიშვნელობის;

// // let x = 10;

// // x **= 5;

// // console.log(x)

// // let x = 10;

// // console.log(!x === 10)

// // const isMarried = false;

// // console.log(!isMarried)

// // const x = 10;

// // instanceof(x)
// // console.log()

// // let x = 5;
// // let y = '8';
// // let z = x + y;

// // console.log(typeof z)

// // const age = 20;

// // if (age >= 18) {
// //     if(){

// //     }else{

// //     }
// //   console.log("სრულწლოვანია");
// // } else if (age < 18 && age >= 10) {
// //   console.log("არასრულწლოვანი ხარ");
// // }else if(age < 10 && age >= 0){
// //     console.log("ბავშვი");
// // }else {
// //   console.log("შეცდომა მოხდა");
// // }

// // let age = 19;

// // switch (age){
// //     case 19:
// //         console.log('სრულწლოვანია');
// //     break;
// //     case 19:
// //         console.log('სრულწლოვანია');
// //     break;
// //     default:
// //         console.log('შეცდომა');
// // }

// // let x = 10;
// // let y = 5;

// // let operation = "-";

// // switch (operation) {
// //   case "+":
// //     console.log(x + y);
// //     break;
// //   case "-":
// //     console.log(x - y);
// //     break;
// //   case "*":
// //     console.log(x * y);
// //     break;
// //   case "/":
// //     if (x == 0 && y == 0) {
// //       console.log("ar iyofa");
// //     } else {
// //       console.log(x / y);
// //     }
// //     break;
// //   default:
// //     console.log("error");
// // }

// // let number = Number('10.1');
// // let number = parseFloat('10.1');

// // console.log(number)

// // const number = 10;

// // console.log(typeof String(10))

// // const hello = 'hello';
// // const world = "world";

// // const result = hello + " " + world;

// // console.log(result);

// // const isMarried = false;

// // const result = !isMarried ? "სრულწლოვანი" : "არასრულწლოვანი"; // ternary operator

// // console.log(result);

// // const age = 50;

// // const result = age > 10 && age <= 18 ? "teen" : age < 10 ? "baby" : "adult";

// // console.log(result);

// // const userName = 'nika';
// // const currentYear = new Date().getFullYear();
// // const birhtYear = 2002;

// // const user = `hello my name is ${userName} and my age is ${currentYear - birhtYear}`;

// // console.log(user);

// // const numbers = [['nika', 'luka'], ['saba', 'george']];

// // console.log(numbers[1][1]);

// // we have a key and value in object;

// // const users = [
// //     {
// //         firstName: "nika",
// //         lastName: "Munjishvili"
// //     },
// //     {
// //         firstName: "saba",
// //         lastName: "pachulia",
// //         address: [
// //             {
// //                 city: "gori",
// //                 location: "10 N"
// //             },
// //             {
// //                 city: "tbilisi",
// //                 location: "13 N"
// //             }
// //         ]
// //     }
// // ]

// // console.log(users[1].address[1].city);

// // const friends1 = "george";
// // const friends2 = "nick";
// // const friends3 = "goga";

// // const numbers = [1,2,3,4,5,6,7,8];

// // console.log(numbers[1])
// // console.log(numbers[2])
// // console.log(numbers[3])

// // let odd = [];

// // for(let i = 0; i < numbers.length; i++){
// //     const loopedNumbers = numbers[i];
// //     if(loopedNumbers % 2 !== 0){
// //         odd.push(loopedNumbers);
// //     }
// // }

// // console.log(odd);

// // for(let element of numbers){
// //     console.log(element)
// // }

// // for(let index in numbers){
// //     console.log(index);
// // }

// //  numbers.forEach((number) => {
// //    if(number > 2){
// //     console.log(number);
// //    }
// //  });

// // const numbers = [1,2,3,4,5,6,7,8];

// // console.log(numbers.length);

// // numbers.push(10);
// // numbers.pop();
// // numbers.shift();
// // numbers.unshift(1000);

// // delete numbers[2];

// // const num1 = [1,2,3];
// // const num2 = [4,5,6];

// // console.log(num1.concat(num2));

// // const numbers = [1,2,3,4];

// // const flatedNumber = numbers.flat(2);

// // console.log(flatedNumber);

// // const slicedArr = numbers.slice(1, 3);
// // console.log(slicedArr)

// // const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // const joined = fruits.join(" + ");

// // console.log(joined)

// // console.log(Array.prototype)

// // const numbersArray = [1,2,3,4,5,6];

// // numbersArray.map((item) => {
// //     return {
// //         ...item,
// //     }
// // })

// // const numbersArray = [1,2,3,4,5,6,7,8,9,10];

// // // const result = numbersArray.filter(num => num > 8);

// // // console.log(result);

// // const result = numbersArray.reduce((previousValue, numbers ) => {
// //     return previousValue + numbers;
// // }, 0)

// // console.log(result);

// // const numbersArray = [
// //   {
// //     id: 1,
// //     name: "nick",
// //   },
// //   {
// //     id: 2,
// //     name: "saba",
// //   },
// //   {
// //     id: 3,
// //     name: "goga",
// //   },
// // ];

// // const result = numbersArray.some(item => item === 10);
// // console.log(result);
// // const result = numbersArray.every(item => item === 10);
// // console.log(result);

// // const numbers = [1,5,3,7,4,10];

// // const result = numbers.lastIndexOf(5);
// // console.log(result);

// // const result = numbersArray.find(item => item.id === 2);

// // const result = numbers.findIndex(item => item > 5 );
// // console.log(result);

// // const result = numbers.sort((a, b) => a - b);
// // console.log(result);

// // const numbers = [100, 400];

// // numbers[1] = '2000';

// // console.log(numbers)

// let users = [
//   { id: 1, name: "John Doe", email: "john@example.com", balance: 100 },
//   { id: 2, name: "Jane Doe", email: "jane@example.com", balance: 200 },
//   { id: 3, name: "Mike Smith", email: "mike@example.com", balance: 300 },
//   { id: 4, name: "Anna Johnson", email: "anna@example.com", balance: 400 },
//   { id: 5, name: "Chris Lee", email: "chris@example.com", balance: 500 },
// ];

// // CRUD

// // C => create
// // R => Read
// // U => Update
// // Delete => Update

// function createUser(name, email, balance) {
//   const newUser = {
//     id: users.length + 1,
//     name,
//     email,
//     balance,
//   };
//   users.push(newUser);
//   return newUser;
// }

// createUser("Nick Munjishvili", "nika@gmail.com", 300);

// // console.log(users);

// function readUser(){
//     console.log(users);
// }

// function findUserById(id){
//     return users.find(user => user.id === id);
// }

// // console.log(findUserById(4))

// function updateUser(id, updateData){
//     users = users.map(user =>
//         user.id === id ? {...user, ...updateData} : user
//     )

//     return users.find(user => user.id === id) || "User Not Found"
// };

// updateUser(100, {name: "test test", balance: 10000})`

// readUser()

// function deleteUser(id = 1){
//     const findUser = users.some(user => user.id === id);

//     if(findUser){
//         users = users.filter(user => user.id !== id);
//         return "User deleted successfylly"
//     }

//     return "User Not found";
// };

// deleteUser(3);

// readUser()

// დავალება 1: map + filter მეთოდები
// დავალება:
// მოცემულია users მასივი, რომელიც შეიცავს მომხმარებელთა ინფორმაციას.

// დაამატეთ ახალი ველი fullName, რომელიც შედგება firstName + lastName-სგან.
// გაფილტრეთ მხოლოდ ისინი, რომელთა ასაკი 25-ზე მეტია.

const users = [
  { firstName: "Nika", lastName: "Giorgadze", age: 23 },
  { firstName: "Ana", lastName: "Beridze", age: 28 },
  { firstName: "Luka", lastName: "Davitashvili", age: 30 },
  { firstName: "Tako", lastName: "Gelashvili", age: 20 },
];

const transformedUser = users
  .map((user) => ({
    ...user,
    fullName: `${user.firstName} ${user.lastName}`,
  }))
  .filter((user) => user.age > 25);

// console.log(transformedUser);

// დავალება 2: reduce (ობიექტებში იტერაცია)
// დავალება:
// მოცემულია პროდუქტების სია. გამოითვალეთ კატეგორიების მიხედვით ფასების ჯამი.

const products = [
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Headphones", category: "Electronics", price: 200 },
  { name: "Shoes", category: "Fashion", price: 100 },
  { name: "T-Shirt", category: "Fashion", price: 50 },
  { name: "Phone", category: "Electronics", price: 900 },
];

const totalByCategory = products.reduce((acc, product) => {
  acc[product.category] = (acc[product.category] || 0) + product.price;
  return acc;
}, {});

// console.log(totalByCategory);

// დავალება 4: find + some (ობიექტების მოძებნა და შემოწმება)
// დავალება:
// მოცემულია შეკვეთების სია.

// იპოვეთ პირველი შეკვეთა, რომელიც shipped სტატუსშია.
// შეამოწმეთ, თუ ყველა შეკვეთა delivered სტატუსშია.

// const orders = [
//   { id: 101, status: "pending" },
//   { id: 102, status: "shipped" },
//   { id: 103, status: "delivered" },
//   { id: 104, status: "pending" },
// ];

// const firstShippedStatus = orders.find((order) => order.status === "shipped");

// console.log(firstShippedStatus);

// const allDelivered = orders.every((order) => order.status === "delivered");

// console.log(allDelivered);

// es5

// function getHello() {
//   // function body
//   console.log("Hello My Name is Nick!");
// }

// getHello();

// es6
// arrow function

// const getFullName = (name, lastName = "munjishvili") => {
//   // function body
//   return `${name} ${lastName}`;
// };

// const result = getFullName("nika");
// console.log(result);

// const add = (a, b = 2) => {
//   return a + b;
// };

// let result = add(3, 5);
// console.log(result);

// const myName = (name) => {
//   console.log(name);
// };

// const getName = (callBackFunction) => {
//   return callBackFunction("Nika");
// };

// const result = getName(myName);

//1. პარამეტრი არის რასაც ვატან ფუნქციის ფრჩხილებში შექმნის დროს ანუ
// აქ ().მაგალითად (a,b,c) არის პარამეტრები;

// 2.არგუმენტი არის რასაც ვიღებ ამ პარამეტრების შესაბამისად.
// მაგალითად (1,2,3);

// 3.callBack ფუნქცია არის ისეთი ფუნქცია რომელიც პარამეტრად იღებს
// სხვა ფუნქციას

// function ragaca(number, number2) {
//   console.log(number + number2);
// }

// function add(sxvaFunction) {
//   return sxvaFunction(4, 2);
// }

// add(ragaca);
