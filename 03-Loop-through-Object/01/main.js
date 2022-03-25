let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (let key in salaries) {
  if (checkEmptyObject(salaries)) {
    sum = 0;
    // console.log(sum);
  } else {
    sum += salaries[key];
    console.log(salaries[key]);
  }
}

console.log(sum);

function checkEmptyObject(obj) {
  for (let key in obj) {
    if (!key) return true;
    return false;
  }
}
