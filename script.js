// Average Calculator by Mr. v
// Event Listener
document.getElementById("calc-btn").addEventListener("click", calcAverage);
// Event Function
function calcAverage() {
  // Input
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let num3 = +document.getElementById("num3").value;
  // Process
  let average = (num1 + num2 + num3) / 3;
  let sum = num1 + num2 + num3;
  let product = num1 * num2 * num3;
  let remainder = num1 % num2;
  let power = num1 ** num2;
  let decimal = num1.toFixed(2);
  let tangent = Math.tan(num3);
  let outcomes = num2 - num1 + 1;
  let randNumber = Math.random() * outcomes + num1;
  // Output
  document.getElementById("ave-out").innerHTML = average;
  document.getElementById("sum-out").innerHTML = sum;
  document.getElementById("product-out").innerHTML = product;
  document.getElementById("remainder-out").innerHTML = remainder;
  document.getElementById("power-out").innerHTML = power;
  document.getElementById("decimal-out").innerHTML = decimal;
  document.getElementById("tangent-out").innerHTML = tangent;
  document.getElementById("rand-out").innerHTML = randNumber;
}
