document.getElementsByTagName("h1")[0].style.fontSize = "6vw";


function appendToResult(value) {
  var result = document.getElementById('result');
  result.value += value;
}

function calculate() {
  var result = document.getElementById('result');
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}

function clearResult() {
  var result = document.getElementById('result');
  result.value = '';
}
