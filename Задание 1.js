//Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.


  const parser = new DOMParser();
  const xmlString = `
  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
  `;

 const xmlDOM = parser.parseFromString(xmlString, "text/xml");
 const studentNode = xmlDOM.querySelector("student");
 const nameNode = studentNode.querySelector("name");
 const firstNode = studentNode.querySelector("first");
 const secondNode = studentNode.querySelector("second");
 const ageNode = studentNode.querySelector("age");
 const profNode = studentNode.querySelector("prof");
 const langAttr = nameNode.getAttribute("lang");
 const lang1Attr = nameNode.getAttribute("lang");
 const lang2Attr = nameNode.getAttribute("lang");

 const result = 
   {
     list : [
    { name: firstNode.textContent + " " + secondNode.textContent, age: Number(ageNode.textContent), prof: profNode.textContent,  lang: lang1Attr },
    { name: firstNode.textContent + " " + secondNode.textContent, age: Number(ageNode.textContent), prof: profNode.textContent, lang: lang2Attr }
]
   };

 console.log("result", result);