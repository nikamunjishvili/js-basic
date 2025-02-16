/** @format */

// /** @format */

// // /** @format */

// // // es5 is old version

// // // var names = "nika"; // string

// // //es6 is new version

// // // let age = 23; // number

// // // const isMarried = false; // boolean

// // // let address; // undefined

// // // let x = BigInt("123456789012345678901234567890");// bigint

// // // const ages = 100;
// // // console.log(ages);

// // // ages = 30;

// // // console.log(age)

// // // const number1 = 20;
// // // const number2 = '20';

// // // console.log(number1 === number2);

// // // const number1 = '50';
// // // const number2 = 20

// // // const result = number1 % number2;

// // // console.log(result);

// // //მიმატების გარდა ყველა ოპერაცია შესრულდება;

// // // let a = 3;
// // // let x = (100 + 50) * a / 2;

// // // console.log(x);

// // // let x = 2;
// // // x--;

// // // console.log(x);
// // //increment ერთით გაზრდა მნიშვნელობის;
// // //decrement ერთით შემცირება მნიშვნელობის;

// // // let x = 10;

// // // x **= 5;

// // // console.log(x)

// // // let x = 10;

// // // console.log(!x === 10)

// // // const isMarried = false;

// // // console.log(!isMarried)

// // // const x = 10;

// // // instanceof(x)
// // // console.log()

// // // let x = 5;
// // // let y = '8';
// // // let z = x + y;

// // // console.log(typeof z)

// // // const age = 20;

// // // if (age >= 18) {
// // //     if(){

// // //     }else{

// // //     }
// // //   console.log("სრულწლოვანია");
// // // } else if (age < 18 && age >= 10) {
// // //   console.log("არასრულწლოვანი ხარ");
// // // }else if(age < 10 && age >= 0){
// // //     console.log("ბავშვი");
// // // }else {
// // //   console.log("შეცდომა მოხდა");
// // // }

// // // let age = 19;

// // // switch (age){
// // //     case 19:
// // //         console.log('სრულწლოვანია');
// // //     break;
// // //     case 19:
// // //         console.log('სრულწლოვანია');
// // //     break;
// // //     default:
// // //         console.log('შეცდომა');
// // // }

// // // let x = 10;
// // // let y = 5;

// // // let operation = "-";

// // // switch (operation) {
// // //   case "+":
// // //     console.log(x + y);
// // //     break;
// // //   case "-":
// // //     console.log(x - y);
// // //     break;
// // //   case "*":
// // //     console.log(x * y);
// // //     break;
// // //   case "/":
// // //     if (x == 0 && y == 0) {
// // //       console.log("ar iyofa");
// // //     } else {
// // //       console.log(x / y);
// // //     }
// // //     break;
// // //   default:
// // //     console.log("error");
// // // }

// // // let number = Number('10.1');
// // // let number = parseFloat('10.1');

// // // console.log(number)

// // // const number = 10;

// // // console.log(typeof String(10))

// // // const hello = 'hello';
// // // const world = "world";

// // // const result = hello + " " + world;

// // // console.log(result);

// // // const isMarried = false;

// // // const result = !isMarried ? "სრულწლოვანი" : "არასრულწლოვანი"; // ternary operator

// // // console.log(result);

// // // const age = 50;

// // // const result = age > 10 && age <= 18 ? "teen" : age < 10 ? "baby" : "adult";

// // // console.log(result);

// // // const userName = 'nika';
// // // const currentYear = new Date().getFullYear();
// // // const birhtYear = 2002;

// // // const user = `hello my name is ${userName} and my age is ${currentYear - birhtYear}`;

// // // console.log(user);

// // // const numbers = [['nika', 'luka'], ['saba', 'george']];

// // // console.log(numbers[1][1]);

// // // we have a key and value in object;

// // // const users = [
// // //     {
// // //         firstName: "nika",
// // //         lastName: "Munjishvili"
// // //     },
// // //     {
// // //         firstName: "saba",
// // //         lastName: "pachulia",
// // //         address: [
// // //             {
// // //                 city: "gori",
// // //                 location: "10 N"
// // //             },
// // //             {
// // //                 city: "tbilisi",
// // //                 location: "13 N"
// // //             }
// // //         ]
// // //     }
// // // ]

// // // console.log(users[1].address[1].city);

// // // const friends1 = "george";
// // // const friends2 = "nick";
// // // const friends3 = "goga";

// // // const numbers = [1,2,3,4,5,6,7,8];

// // // console.log(numbers[1])
// // // console.log(numbers[2])
// // // console.log(numbers[3])

// // // let odd = [];

// // // for(let i = 0; i < numbers.length; i++){
// // //     const loopedNumbers = numbers[i];
// // //     if(loopedNumbers % 2 !== 0){
// // //         odd.push(loopedNumbers);
// // //     }
// // // }

// // // console.log(odd);

// // // for(let element of numbers){
// // //     console.log(element)
// // // }

// // // for(let index in numbers){
// // //     console.log(index);
// // // }

// // //  numbers.forEach((number) => {
// // //    if(number > 2){
// // //     console.log(number);
// // //    }
// // //  });

// // // const numbers = [1,2,3,4,5,6,7,8];

// // // console.log(numbers.length);

// // // numbers.push(10);
// // // numbers.pop();
// // // numbers.shift();
// // // numbers.unshift(1000);

// // // delete numbers[2];

// // // const num1 = [1,2,3];
// // // const num2 = [4,5,6];

// // // console.log(num1.concat(num2));

// // // const numbers = [1,2,3,4];

// // // const flatedNumber = numbers.flat(2);

// // // console.log(flatedNumber);

// // // const slicedArr = numbers.slice(1, 3);
// // // console.log(slicedArr)

// // // const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // // const joined = fruits.join(" + ");

// // // console.log(joined)

// // // console.log(Array.prototype)

// // // const numbersArray = [1,2,3,4,5,6];

// // // numbersArray.map((item) => {
// // //     return {
// // //         ...item,
// // //     }
// // // })

// // // const numbersArray = [1,2,3,4,5,6,7,8,9,10];

// // // // const result = numbersArray.filter(num => num > 8);

// // // // console.log(result);

// // // const result = numbersArray.reduce((previousValue, numbers ) => {
// // //     return previousValue + numbers;
// // // }, 0)

// // // console.log(result);

// // // const numbersArray = [
// // //   {
// // //     id: 1,
// // //     name: "nick",
// // //   },
// // //   {
// // //     id: 2,
// // //     name: "saba",
// // //   },
// // //   {
// // //     id: 3,
// // //     name: "goga",
// // //   },
// // // ];

// // // const result = numbersArray.some(item => item === 10);
// // // console.log(result);
// // // const result = numbersArray.every(item => item === 10);
// // // console.log(result);

// // // const numbers = [1,5,3,7,4,10];

// // // const result = numbers.lastIndexOf(5);
// // // console.log(result);

// // // const result = numbersArray.find(item => item.id === 2);

// // // const result = numbers.findIndex(item => item > 5 );
// // // console.log(result);

// // // const result = numbers.sort((a, b) => a - b);
// // // console.log(result);

// // // const numbers = [100, 400];

// // // numbers[1] = '2000';

// // // console.log(numbers)

// // let users = [
// //   { id: 1, name: "John Doe", email: "john@example.com", balance: 100 },
// //   { id: 2, name: "Jane Doe", email: "jane@example.com", balance: 200 },
// //   { id: 3, name: "Mike Smith", email: "mike@example.com", balance: 300 },
// //   { id: 4, name: "Anna Johnson", email: "anna@example.com", balance: 400 },
// //   { id: 5, name: "Chris Lee", email: "chris@example.com", balance: 500 },
// // ];

// // // CRUD

// // // C => create
// // // R => Read
// // // U => Update
// // // Delete => Update

// // function createUser(name, email, balance) {
// //   const newUser = {
// //     id: users.length + 1,
// //     name,
// //     email,
// //     balance,
// //   };
// //   users.push(newUser);
// //   return newUser;
// // }

// // createUser("Nick Munjishvili", "nika@gmail.com", 300);

// // // console.log(users);

// // function readUser(){
// //     console.log(users);
// // }

// // function findUserById(id){
// //     return users.find(user => user.id === id);
// // }

// // // console.log(findUserById(4))

// // function updateUser(id, updateData){
// //     users = users.map(user =>
// //         user.id === id ? {...user, ...updateData} : user
// //     )

// //     return users.find(user => user.id === id) || "User Not Found"
// // };

// // updateUser(100, {name: "test test", balance: 10000})`

// // readUser()

// // function deleteUser(id = 1){
// //     const findUser = users.some(user => user.id === id);

// //     if(findUser){
// //         users = users.filter(user => user.id !== id);
// //         return "User deleted successfylly"
// //     }

// //     return "User Not found";
// // };

// // deleteUser(3);

// // readUser()

// // დავალება 1: map + filter მეთოდები
// // დავალება:
// // მოცემულია users მასივი, რომელიც შეიცავს მომხმარებელთა ინფორმაციას.

// // დაამატეთ ახალი ველი fullName, რომელიც შედგება firstName + lastName-სგან.
// // გაფილტრეთ მხოლოდ ისინი, რომელთა ასაკი 25-ზე მეტია.

// const users = [
//   { firstName: "Nika", lastName: "Giorgadze", age: 23 },
//   { firstName: "Ana", lastName: "Beridze", age: 28 },
//   { firstName: "Luka", lastName: "Davitashvili", age: 30 },
//   { firstName: "Tako", lastName: "Gelashvili", age: 20 },
// ];

// const transformedUser = users
//   .map((user) => ({
//     ...user,
//     fullName: `${user.firstName} ${user.lastName}`,
//   }))
//   .filter((user) => user.age > 25);

// // console.log(transformedUser);

// // დავალება 2: reduce (ობიექტებში იტერაცია)
// // დავალება:
// // მოცემულია პროდუქტების სია. გამოითვალეთ კატეგორიების მიხედვით ფასების ჯამი.

// const products = [
//   { name: "Laptop", category: "Electronics", price: 1200 },
//   { name: "Headphones", category: "Electronics", price: 200 },
//   { name: "Shoes", category: "Fashion", price: 100 },
//   { name: "T-Shirt", category: "Fashion", price: 50 },
//   { name: "Phone", category: "Electronics", price: 900 },
// ];

// const totalByCategory = products.reduce((acc, product) => {
//   acc[product.category] = (acc[product.category] || 0) + product.price;
//   return acc;
// }, {});

// // console.log(totalByCategory);

// // დავალება 4: find + some (ობიექტების მოძებნა და შემოწმება)
// // დავალება:
// // მოცემულია შეკვეთების სია.

// // იპოვეთ პირველი შეკვეთა, რომელიც shipped სტატუსშია.
// // შეამოწმეთ, თუ ყველა შეკვეთა delivered სტატუსშია.

// // const orders = [
// //   { id: 101, status: "pending" },
// //   { id: 102, status: "shipped" },
// //   { id: 103, status: "delivered" },
// //   { id: 104, status: "pending" },
// // ];

// // const firstShippedStatus = orders.find((order) => order.status === "shipped");

// // console.log(firstShippedStatus);

// // const allDelivered = orders.every((order) => order.status === "delivered");

// // console.log(allDelivered);

// // es5

// // function getHello() {
// //   // function body
// //   console.log("Hello My Name is Nick!");
// // }

// // getHello();

// // es6
// // arrow function

// // const getFullName = (name, lastName = "munjishvili") => {
// //   // function body
// //   return `${name} ${lastName}`;
// // };

// // const result = getFullName("nika");
// // console.log(result);

// // const add = (a, b = 2) => {
// //   return a + b;
// // };

// // let result = add(3, 5);
// // console.log(result);

// // const myName = (name) => {
// //   console.log(name);
// // };

// // const getName = (callBackFunction) => {
// //   return callBackFunction("Nika");
// // };

// // const result = getName(myName);

// //1. პარამეტრი არის რასაც ვატან ფუნქციის ფრჩხილებში შექმნის დროს ანუ
// // აქ ().მაგალითად (a,b,c) არის პარამეტრები;

// // 2.არგუმენტი არის რასაც ვიღებ ამ პარამეტრების შესაბამისად.
// // მაგალითად (1,2,3);

// // 3.callBack ფუნქცია არის ისეთი ფუნქცია რომელიც პარამეტრად იღებს
// // სხვა ფუნქციას

// // function ragaca(number, number2) {
// //   console.log(number + number2);
// // }

// // function add(sxvaFunction) {
// //   return sxvaFunction(4, 2);
// // }

// // add(ragaca);

// // function findMax(numbersArr) {
// //   if (numbersArr.length === 0) return;

// //   let max = numbersArr[0];

// //   // return max;

// //   for (let i = 1; i < numbersArr.length; i++) {
// //     if (numbersArr[i] > max) {
// //       max = numbersArr[i];
// //     }
// //   }

// //   return max;
// // }

// // console.log(findMax([7, 3, 2, 8, 14, 4]));

// // function maxNum(arr) {
// //   return Math.max(...arr);
// // }

// // console.log(maxNum([7, 3, 2, 8, 14, 4]));

// // დავალება 1: CallBack ფუნქციის ძირითადი პრინციპი
// // მოცემულობა: დაწერე ფუნქცია processData, რომელიც იღებს ორ პარამეტრს:

// // რიცხვს (მაგალითად, number).
// // callback ფუნქციას, რომელიც ამ რიცხვს გარდაქმნის.

// // function processData(num, callBackFunction) {
// //   return callBackFunction(num);
// // }

// // function calculateNum(number){
// //   return number * 2;
// // }

// // const result = processData(10, calculateNum);

// // console.log(result);

// // დავალება 2: Callback ფუნქციის გამოძახება
// // დაწერე ფუნქცია runCallback, რომელიც მიიღებს callback ფუნქციას და გამოიძახებს მას.

// // function runCallback(callBack){
// //   callBack();
// // }

// // function callBackFunction(){
// //   console.log("Callback function called!")
// // }

// // runCallback(callBackFunction)

// // დავალება 3: Callback ორი რიცხვის დამუშავებისთვის
// // დაწერე ფუნქცია calculate, რომელიც მიიღებს ორ რიცხვს და callback ფუნქციას. callback უნდა განსაზღვროს, როგორ უნდა დამუშავდეს ეს რიცხვები.

// // function calculate(a, b, callBack){
// //   return callBack(a, b);
// // };

// // function calculateFunction(x,y){
// //   return x + y;
// // }

// // const result = calculate(5,3,calculateFunction);

// // console.log(result);

// // დავალება 4: ორის ხარისხი
// // დაწერე ფუნქცია powerOfTwo, რომელიც იღებს რიცხვს და callback-ს. callback-მა უნდა დააბრუნოს ამ რიცხვის კვადრატი.

// // function powerOfTwo(num, callBack){
// //   return callBack(num);
// // }

// // const squared = powerOfTwo(4, function (n){
// //   return n ** 2;
// // })

// // console.log(squared);

// // const numbers = [1,2,3,4];

// // higer order function

// // const getName = function(){
// //   console.log("hello")
// // }

// // getName()

// //ანონიმური ფუნქცია არის ისეთი ფუნქცია რომელსაც სახელი არ გააჩნია;

// // const myName = () => {};// arrow functions

// // {
// //   var names = "nika";
// // }

// // console.log(names);

// // function getName(){
// //   const names = "nika";
// //   console.log(names);
// // }

// // console.log(names);

// const button = document.getElementById("button");

// console.log(window);

// const names = "nika";

// function getName() {
//   console.log(names);
// }
// getName();

// {
//   console.log(names);
// }

// // x = 10;

// // // const x;
// // console.log(x);

// // console.log(window.document.body);

// // const heading = document.getElementById("heading");
// // heading.style.color = "red";
// // console.log(heading);

// // const button = document.querySelectorAll("#buttons");

// // button.forEach((btn, index) => {
// //   btn.addEventListener("click", function(){
// //     console.log(btn.textContent);
// //   })
// // })

// // const text = document.getElementById("desc");

// // console.log(text.textContent)

// import {Button} from './components/index.js'
// Button("Register", "blue", "10px", "10px");
// Button("Delete", "red", "10px", "10px");

// const button = document.getElementById("signup");
// btn.forEach((element) => {
//   element.style.color = "red";
// });

// btn[0].style.color = 'red'
// btn[1].style.color = 'red'

// const buttons = document.querySelectorAll("#buttons");
// const content = document.getElementById("content");
// const btn_container = document.getElementById("btn_container");

// buttons.forEach((element) => {
//   element.addEventListener("click", () => {
//     btn_container.style.display = "none";
//     content.innerHTML = `You Checked ${element.textContent}`;
//     content.style.display = "block";
//   });
// });

// const button = document.createElement("button");
// button.textContent = "Register";

// button.classList.add("btn");

// if (button.classList.contains("დსდსდსდ")) {
//   console.log("აქვს კლასი");
// } else {
//   console.log("არანაირი კლასი არ აქვს ელემენტს!");
// }

// console.log(button.classList.remove("btn"));

// console.log(button);

// document.body.appendChild(button);

// const darkModeBtn = document.getElementById("darkModeBtn");

// darkModeBtn.addEventListener("click", () => {
//   document.body.classList.toggle("dark");
//   if (darkModeBtn.textContent === "dark") {
//     darkModeBtn.textContent = "light";
//   } else {
//     darkModeBtn.textContent = "dark";
//   }
// });

// darkModeBtn.remove()

// document.body.innerHTML = "<input />"
// document.body.innerText = "hello world"

// console.log(darkModeBtn.textContent)

// console.log(darkModeBtn.getAttribute('type'))
// console.log(darkModeBtn.removeAttribute('type'))
// console.log(darkModeBtn.setAttribute("type", "submit"))
// console.log(darkModeBtn.getAttribute('type'))

// console.log(darkModeBtn.id = 'submit')

// console.log(document.anchors.length)

// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// const result = parent.removeChild(child);

// document.write('hello')

// const submit = document.getElementById("submit");
// const username = document.getElementById("username");

// console.log(username.value);

// submit.addEventListener("click", () => {
//   //   localStorage.setItem("user", username.value);
//   //   console.log(localStorage.getItem("user"));
//   //   localStorage.removeItem("user");
//   // localStorage.clear();
//   //   sessionStorage.setItem("user", username.value);
// });

// const georgiaTime = new Date();
// georgiaTime.setUTCHours(georgiaTime.getUTCHours() + 4);

// const insertCookie =
//   (document.cookie = `currentTime=${georgiaTime.toISOString()}; expires=${georgiaTime.toISOString()}`);

//   console.log('insertCookie',insertCookie)

// function firstFunction() {
//   console.log("პირველი");
// }

// firstFunction();

// function secondFunction() {
//   console.log("მეორე");
// }

// setTimeout(() => {
//   secondFunction();
// }, 4000);

// function thirdFunction() {
//   console.log("მესამე");
// }

// setTimeout(() => {
//   thirdFunction();
// }, 3000);

// const firstPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let success = true;
//     if (success) {
//       resolve("ოპერაცია წარმატებით დასრულდა");
//     } else {
//       reject("დაფიქსირდა შეცდომა!");
//     }
//   }, 2000);
// });

// firstPromise
// .then((res) => {
//   console.log(res);
// })
// .catch(err => {
//   console.log(err);
// })
// .finally(() => {
//   console.log("resalt")
// })

// const fetchData = new Promise((resolve, reject) => {
//   let success = true;

//   setTimeout(() => {
//     if (!success) {
//       resolve([{ id: 1, userName: "nika", email: "nika@gmail.com" }]);
//     } else {
//       reject("User Not Found!");
//     }
//   }, 3000);
// });

// fetchData.then(data => {
//   console.log(data)
// })
// .catch(err => {
//   console.log(err);
// })
// .finally(() => {
//   console.log("ოპერაცია დასრულდა!")
// })

// const getUser = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ id: 1, name: "Giorgi" });
//     }, 1000);
//   });
// };

// const getOrders = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(["Order 1", "Order 2", "Order 3"]);
//     }, 1000);
//   });
// };

// getUser()
// .then(user => {
//   console.log("მომხმარებელი", user);
//   return getOrders(user.id);
// })
// .then(orders => {
//   console.log("მომხმარებლის შეკვეთები", orders)
// })
// .catch(err => {
//   console.log("შეცდომა: ", err);
// })

// Promise.all(), Promise.race(), Promise.allSettled(), Promise.any();

// const first = new Promise((resolve, reject) =>
//   setTimeout(() => reject("პირველი წარმატებული."), 1000)
// );
// const second = new Promise((resolve) =>
//   setTimeout(() => resolve("მეორე წარმატებული."), 2000)
// );
// const third = new Promise((resolve) =>
//   setTimeout(() => resolve("მესამე წარმატებული."), 1500)
// );

// Promise.allSettled([first, second, third])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.race([first, second, third])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.all([first, second, third])
// .then(results => {
//   console.log(results);
// })
// .catch(err => {
//   console.log(err);
// })

// const p1 = new Promise((resolve, reject) =>
//   setTimeout(() => reject("პირველი შეცდომა"), 1000)
// );

// const p2 = new Promise((resolve, reject) =>
//   setTimeout(() => resolve("მეორე წარმატებული"), 3000)
// );

// Promise.any([p1, p2])
// .then(result => {
//   console.log(result);
// })

// async/await

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("მოხდა შეცდომა!");
    }, 2000);
  });
};

const getData = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getData()