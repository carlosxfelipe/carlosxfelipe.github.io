const fibonacci = (n, cache = {}) => {
  if (n <= 1) {
    return n;
  }
  if (n in cache) {
    return cache[n];
  }
  cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
  return cache[n];
};

const calculateFibonacci = () => {
  const numTerms = parseInt(document.getElementById("num_terms").value);
  let fibonacciSequence = [];
  for (let i = 0; i < numTerms + 1; i++) {
    fibonacciSequence.push(fibonacci(i));
  }
  const fibonacciList = document.getElementById("fibonacci_sequence");
  fibonacciList.innerHTML = "";
  for (let i = 0; i < fibonacciSequence.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `Termo ${i}: ${fibonacciSequence[i]}`;
    fibonacciList.appendChild(listItem);
  }
};
