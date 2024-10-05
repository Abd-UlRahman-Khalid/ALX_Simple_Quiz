function add(number1, number2) {
  return number1 + number2;
}

function sub(number1, number2) {
  return number1 - number2;
}

function multi(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

let addBtn = document.getElementById("add");
let subBtm = document.getElementById("subtract");
let MultiBtm = document.getElementById("multiply");
let divideBtm = document.getElementById("divide");

addBtn.addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = add(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});
subBtm.addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = sub(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});
MultiBtm.addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = multi(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});
divideBtm.addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = divide(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});
