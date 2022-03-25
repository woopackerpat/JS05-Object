let key;
let obj = {};
let value;

do {
  key = prompt("Enter key");
  if (key === "stop") break;
  value = prompt("Enter value");

  obj[key] = value;
} while (key !== "stop");

console.log(obj);
