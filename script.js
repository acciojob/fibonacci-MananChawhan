
function fibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) return 0;
  if (num === 2) return 1;

  let a = 0, b = 1, c;
  for (let i = 3; i <= num; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

function calculateFibonacci() {
  const input = document.getElementById("fibInput").value;
  const output = document.getElementById("output");

  const n = parseInt(input);
  if (isNaN(n) || n < 0 || n > 50) {
    output.innerText = "Please enter a number between 0 and 50.";
    return;
  }

  const result = fibonacci(n);
  output.innerText = `Fibonacci number at position ${n} is: ${result}`;
}
