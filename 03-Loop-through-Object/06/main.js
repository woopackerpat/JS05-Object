let productName = prompt("Enter product name");
let soldAmount = prompt("Enter sold amount");
let unitPrice = prompt("Enter unit price");
let discount = prompt("Enter discount rate");

let product = {};

if (isNaN(+discount) || +discount === 0 || discount === null) {
  product = {
    productName,
    soldAmount,
    unitPrice,
  };
} else {
  product = {
    productName,
    soldAmount,
    unitPrice,
    discount,
  };
}

function calTotal(obj) {
  if (obj.discount) {
    total = obj.soldAmount * obj.unitPrice * obj.discount;
  } else {
    total = obj.soldAmount * obj.unitPrice;
  }
  alert(total);
}

calTotal(product);
