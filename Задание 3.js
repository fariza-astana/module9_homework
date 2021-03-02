//Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

//Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
//Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.
const reqUrl = "https://picsum.photos/v2/list?limit=10"


 const output = document.querySelector('.output');
 const button = document.querySelector('button');
 const input = document.querySelector('input');
 const url = `https://picsum.photos/v2/list/?limit=${input.value}`
 
 // обработчик на кнопку для запроса
 button.addEventListener('click', () => {
   if (1 <= input.value <= 10) {
     useRequest(`https://picsum.photos/v2/list/?limit=${input.value}`, displayOutput);
   } else {
     output.textContent="Число вне диапазона от 1 до 10";
   }
 });
   
 function useRequest(url, callback) {
   var xhr = new XMLHttpRequest();
   xhr.open('GET', `https://picsum.photos/v2/list/?limit=${input.value}`, true);
   
   xhr.onload = function() {
     if (xhr.status != 200) {
       console.log('Статус ответа: ', xhr.status);
     } else {
       const result = JSON.parse(xhr.response);
       if (callback) {
         callback(result);
       }
     }
   };
   
   xhr.onerror = function() {
     console.log('Ошибка! Статус ответа: ', xhr.status);
   };
   
   xhr.send();
 };
 
 
 
 /**
   * Функция обработки полученного результата
   * apiData - объект с результатом запроса
   */
 function displayOutput(apiData) {
   let cards = '';
   // console.log('start cards', cards);
   
   apiData.forEach(item => {
     const cardBlock = `
       <div class="card">
         <img
           src="${item.download_url}"
           class="card-image"
         />
         <p>${item.author}</p>
       </div>
     `;
     cards = cards + cardBlock;
   });
   
   // console.log('end cards', cards);
     
   output.innerHTML = cards;
 }
 



//HTML:
<!DOCTYPE html>
<html>

<head>
	<title>Parcel Sandbox</title>
	<meta charset="UTF-8" />
</head>

<body>
	<input class="input" type="number" placeholder="Введите число">
	<button class="button">Обработка запроса</button>
    <div class="output">Здесь будет результат запроса</div>

	<script src="index.js">
	</script>
</body>

</html>

.body {
  background-color: beige;
}

.output {
  display: flex;
  flex-wrap: wrap;
  width: 500px;
}

.card {
  width: 200px;
  margin: 20px;
}

.card-image {
  display: inline-flex;
  width: 200px;
  height: 150px;
}

.button {
  background-color: beige;
}
.button:hover {
  background-color: beige;
  box-shadow: 0px 2px 8px  2px rgba(141,150,178,.3);
  transform: scale(1.05);
}