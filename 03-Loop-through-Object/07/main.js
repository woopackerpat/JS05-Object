const employees = {
  john: {
    salary: 1000,
    address: { district: "Ratchathewi", province: "Bangkok" },
  },
  peter: {
    salary: 1500,
    address: { district: "Pathumwan", province: "Bangkok" },
  },
  mike: {
    salary: 800,
    address: { district: "Pakkret", province: "Nonthaburi" },
  },
  sarah: {
    salary: 2200,
    address: { district: "Sriraja", province: "Chonburi" },
  },
};

let inputName = prompt("Enter employees name").trim();
let targetName = "";

for (let name in employees) {
  if (inputName === name) {
    targetName = name;
  }
}

if (targetName) {
  alert(
    `Name: ${targetName}, salary: ${employees[targetName].salary}, address: ${employees[targetName].address.district}, ${employees[targetName].address.province}`
  );
} else {
  alert("Not found");
}
