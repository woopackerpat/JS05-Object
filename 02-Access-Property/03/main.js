const product1 = {
  name: "Water",
  distributor: {
    name: "Giraffe Water Company",
    address: {
      street: "Phetchaburi",
      subdistrict: "Thanonphetchaburi",
      district: "Ratchathewi",
      province: "Bangkok",
    },
  },
};

let product2 = {};

if (!checkEmptyObject(product1)) {
  console.log(product1);
}

if (checkEmptyObject(product2)) {
  console.log(product2);
}

function checkEmptyObject(obj) {
  for (let key in obj) {
    if (!key) return true;
    return false;
  }
}
