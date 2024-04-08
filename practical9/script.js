let arr1 = [
  1,
  5,
  9,
  4,
  {
    name: "Hnatiuk Julia",
    mark: 90,
    subject: "JS"
  },
  function fourthPower(num) {
    return num ** 4;
  },
  function printName(obj) {
    console.log(obj.name);
  },
  -6,
  14
];

console.log("1.2.4:");
arr1.forEach(element => console.log(element));

console.log("1.2.5:");
const index5 = arr1.indexOf(5);
if (index5 !== -1) {
  arr1[index5] = 8;
}
console.log(arr1);

console.log("1.2.6:");
arr1.splice(4, 0, "Hello");
console.log(arr1);

console.log("1.2.7:");
const arr2 = arr1.slice(5, 7);
console.log(arr2);

console.log("1.2.8:");
arr2.forEach(func => console.log(func));

console.log("1.2.9:");
const arr3 = arr1.slice(0, 3).concat(arr1.slice(7, 8));
console.log(arr3);

console.log("1.2.10:");
arr3.forEach(element => console.log(element));

console.log("1.2.11:");
const arr3Reversed = arr3.slice().reverse();
console.log(arr3Reversed);

console.log("1.2.12:");
arr3Reversed.forEach(element => console.log(element));

console.log("1.2.13:");
const indexOfMinus6 = arr1.indexOf(-6);
console.log(indexOfMinus6);

console.log("1.2.14:");
const filteredArr = arr1.filter(element => typeof element === 'number' && element > 4);
console.log(filteredArr);

console.log("1.2.15:");
arr1[6](arr1[4]);

console.log("1.2.16:");
console.log(arr1[5](arr1[indexOfMinus6]));

console.log("1.2.17:");
for (const index in arr1) {
  console.log(arr1[index]);
}

console.log("1.2.18:");
for (const key in arr1[4]) {
  console.log(key);
}

console.log("1.2.19:");
for (const element of arr1) {
  console.log(element);
}

console.log("1.2.20:");
arr1.version = "1.0.0";
console.log("Version:", arr1.version);

console.log("1.2.21:");
for (const index in arr1) {
  console.log(arr1[index]);
}

console.log("1.2.22:");
for (const element of arr1) {
  console.log(element);
}

const Petryk = {
  name: "Petryk",
  skill: "JS",
  level: "junior"
};

const Mychajlyk = {
  name: "Mychajlyk",
  skill: "HTML/CSS",
  level: "middle"
};

const Volodyk = {
  name: "Volodyk",
  skill: "TS",
  level: "trainee"
};

const map1 = new Map();
map1.set(Petryk.name, Petryk);
map1.set(Mychajlyk.name, Mychajlyk);
map1.set(Volodyk.name, Volodyk);

console.log("1.2.25:");
console.log(map1.has("Ivanko"));

console.log("1.2.26:");
console.log(map1.has("Volodyk"));

console.log("1.2.27:");
for (const key of map1.keys()) {
  console.log(key);
}

console.log("1.2.28:");
map1.delete("Mychajlyk");

console.log("1.2.29:");
for (const [key, value] of map1.entries()) {
  console.log(`${key} is ${value.level} in ${value.skill}`);
}

const set1 = new Set([Petryk, Mychajlyk, Volodyk]);

const Antypko = {
  name: "Antypko",
  skill: "PHP",
  level: "senior"
};

console.log("1.2.32:");
console.log(set1.has(Antypko));

console.log("1.2.33:");
console.log(set1.has(Mychajlyk));

console.log("1.2.34:");
for (const element of set1) {
  console.log(`${element.name} is ${element.level} in ${element.skill}`);
}

console.log("1.2.35:");
set1.delete(Volodyk);

console.log("1.2.36:");
for (const element of set1) {
  console.log(`${element.name} is ${element.level} in ${element.skill}`);
}

