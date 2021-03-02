//Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:
//Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
//Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.


const apiURL = "https://picsum.photos/200/300";

function pageLoaded() {
  const input1 = document.querySelector("#input1");
  const input2 = document.querySelector("#input2");
  const btn = document.querySelector("#button");
  const output = document.querySelector("#output");
  
  function sendRequest() {
    if (100 <= input1.value <= 300 && 100 <= input2.value <= 300 && !isNaN(input1.value) && !isNaN(input2.value)) {
      fetch(`https://picsum.photos/${input1.value}/${input2.value}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        writeOutput(displayOutput(data));
      })
    } else {
      output.textContent="Одно из чисел вне диапазона от 100 до 300";
    }
  }
  
  
  function formatOutput(data) {
    let output = `
      <img src= https://picsum.photos/${input1.value}/${input2.value}/>
    `
    return output;
  }
  
  function writeOutput(message) {
    output.innerHTML = message;
  }
  
  btn.addEventListener("click", sendRequest);
}

document.addEventListener("DOMContentLoaded", pageLoaded);

