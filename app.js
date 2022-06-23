const btn = document.getElementById('btn');

btn.addEventListener('click', getValues);

function getValues() {
  let inputTo = document.getElementById('input-to').value;
  let inputFrom = document.getElementById('input-from').value;
  pascal(inputFrom, inputTo)
};

function pascal(inputFrom, inputTo) {
  const pascalArr = [
    [1],
    [1, 1]
  ];
  let arr = [];
  for(let i = 2; i < inputTo; i++) {
    for(let j = 0; j <= i; j++) {
      if(j === 0 || j === i) {
        arr.push(1);
      } else if(j > 0 && j < i) {
          const x = pascalArr.length - 1;
          arr[j] = pascalArr[x][j - 1] + pascalArr[x][j];
    }
  }
    pascalArr.push(arr);
    arr = [];
  }
  for(inputFrom; inputFrom <= inputTo; inputFrom++){
    console.log(pascalArr[inputFrom - 1]);
  }
};
