// before
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

// after call function multiplyNumeric(menu, 3)
// menu = {
//   width: 600,
//   height: 900,
//   title: "My menu",
// };

function multiplyNumeric(obj, num) {
  for (let key in obj) {
    if (!isNaN(obj[key])) {
      obj[key] = obj[key] * num;
    }
  }
  return obj;
}

console.log(multiplyNumeric(menu, 3));
