//Задание_1
/*const calc = (x, y) => {
  if (typeof x === "undefined" || typeof y === "undefined") {
    console.log("Введите два параметра");
  } else if (typeof x !== "number" || typeof y !== "number") {
    console.log("Введенные данные не являются числами");
  } else console.log(x + y);
};
calc(5, 8);*/

//Задание_2
/*function square(a) {
  if (typeof a === "undefined") {
    console.error('Функция "square" не может быть вызвана без аргумента');
  } else console.log(a * a);
}
square(5);*/

//Задание_3
/*function getRandomInteger(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}
const guessNum = (a) => {
  if (a >= 0 && a <= 10) {
    const random = getRandomInteger(2, 5);
    if (random === a) {
      return "Вы выиграли";
    } else {
      return `Вы не угадали, ваше число -  ${a},  а выпало число ${random}`;
    }
  }
};
console.log(guessNum(4));*/

//Задание_4
/*const name = ["Andrew", "Max", "Egor", "Vladimir", "Alena", "Olga"];
function copyArr(arr) {
  const newArr = arr.map((element) => element);
  return newArr;
}
console.log(copyArr(name));*/

//Задание_5
/*const name = ["Andrew", "Max", "Egor", "Vladimir", "Alena", "Olga"];
function copyArr(arr) {
  const newArr = arr.map((element) => "Hello " + element);
  return newArr;
}
console.log(copyArr(name));*/

//Задание_6
/*const users = [
  { name: "Andrew", age: 33 },
  { name: "Max", age: 33 },
  { name: "Egor", age: 16 },
  { name: "Vladimir", age: 38 },
  { name: "Alena", age: 34 },
];
function acceptNames(arr) {
  const arrNames = arr.map((element) => element.name);
  return arrNames;
}
console.log(acceptNames(users));*/

//Задание_7
/*const objectWithNumbers = {
  a: 10,
  b: 20,
  c: "string",
  d: 12,
};
function sumObjectValues(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      sum = sum + obj[key];
    }
  }
  return sum;
}
console.log(sumObjectValues(objectWithNumbers));*/

//Задание_8
/*const text =
  "lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptate perspiciatis? Voluptates esse nulla, eaque expedita inventore illum fugit soluta quam commodi repudiandae? Tenetur facilis optio beatae ratione, sint et!";
function ucFirst(str) {
  const newStr = str[0].toUpperCase() + str.slice(1);
  return newStr;
}
console.log(ucFirst(text));*/

//Задание_9
/*let str = "XXX";
function checkSpam(str) {
  const newStr = str.toLowerCase();
  if (newStr.includes("badord") || newStr.includes("xxx")) {
    return true;
  } else return false;
}
console.log(checkSpam(str));*/

//Задание_10
/*const str = "Привет, Женя";
const reverseString = (str) => {
  const newStr = str.split("").reverse().join("");
  return newStr;
};
console.log(reverseString(str));*/

//Задние_11
/*let stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",

  "GNF576746573fhdg4737dh4;Greenfield",

  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",

  "SYB4f65hf75f736463;Stalybridge",

  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];
const getStation = (arr) => {
  let cod;
  let name;
  for (let element of arr) {
    cod = element.slice(0, 3);
    const index = element.indexOf(";");
    name = element.slice(index + 1);
    console.log(`${cod}: ${name}`);
  }
};
getStation(stations);*/

//Задание_12
/*let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];
function unique(arr) {
  const newArr = [];
  for (let element of arr) {
    const uniq = newArr.indexOf(element);
    if (uniq === -1) {
      newArr.push(element);
    }
  }
  return newArr;
}
console.log(unique(strings));*/

//Задане_13
/*const catsJane = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
const catsJulia = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];
const catsJane2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];
const catsJulia2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];
function verifyCats(catsJane, catsJulia) {
  const deleteCatsJane = catsJane.slice(1, 9);
  const unifCats = catsJane.concat(catsJulia);
  unifCats.forEach((element, index) => {
    if (element < 2) {
      console.log(`Кошка  ${index} еще котенок`);
    } else {
      console.log(`Кошка  ${index} взрослая, ей ${element} лет`);
    }
  });
}
verifyCats(catsJane, catsJulia);
verifyCats(catsJane2, catsJulia2);*/

//Задание_14
/*let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
numbers.filter((element, index) =>
  console.log(`Индексу ${index} соответсвует число ${element}`)
);*/

/*const arr = [5, 4, 3, 8, 0];
function filterFor(arr, a) {
  const newArr = arr.filter((element) => element >= a);
  return newArr;
}
console.log(filterFor(arr, 5));*/

//Задание_15
/*const arrText = ["yes", "hello", "no", "easycode", "what"];
function receiptThree(arr) {
  const newArr = [];
  arr.map((element) => {
    if (element.length > 3) {
      newArr.push(element);
    }
  });
  return newArr;
}
console.log(receiptThree(arrText));*/

//Задание_16
/*const arr = [[14, 45], [1], ["a", "c", "d"]];
const sortArr = arr.sort((a, b) => {
  return a.length - b.length;
});
console.log(sortArr);*/

//Задание_17
/*const age = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
const age2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];
const getHumanAge = (arr) => {
  const humanAge = arr.map((item) => {
    if (item <= 2) {
      return (item *= 10);
    } else {
      return (item *= 7);
    }
  });

  const newHumanAge = humanAge.filter((item, index) => {
    if (item >= 18) {
      return item;
    }
  });
  const summHumanAge = newHumanAge.reduce((acc, item) => {
    return acc + item;
  });
  return summHumanAge / newHumanAge.length;
};
console.log(getHumanAge(age));*/
