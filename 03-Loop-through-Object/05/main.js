let fruitStock = {};

let key;
let value;
let obj = {};

do {
  key = prompt("Enter key or type stop");
  if (key === "stop") break;
  value = prompt("Enter value or type stop");

  if (+value > 1) {
    key += "s";
  }
  if (value === "stop") break;

  obj[key] = value;
} while (key !== "stop");

console.log(obj);
