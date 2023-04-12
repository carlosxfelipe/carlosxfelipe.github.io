const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const pivoIndex = Math.floor(arr.length / 2);
  const pivo = arr[pivoIndex];
  const esquerda = [];
  const direita = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivoIndex) {
      continue;
    }
    if (arr[i] < pivo) esquerda.push(arr[i]);
    else direita.push(arr[i]);
  }
  return [...quickSort(esquerda), pivo, ...quickSort(direita)];
};

const sortArray = () => {
  try {
    const inputArray = document.getElementById("inputArray").value.trim();
    const arr = inputArray.split(" ").map((num) => {
      if (isNaN(num)) {
        throw new Error("Erro! Digite apenas números.");
      }
      return Number(num);
    });

    const sortedArr = quickSort(arr);

    const outputArray = document.getElementById("outputArray");
    outputArray.innerText = `Ordem crescente: ${sortedArr.join(", ")}`;
  } catch (err) {
    const outputArray = document.getElementById("outputArray");
    outputArray.innerText = err.message;
  }
};
