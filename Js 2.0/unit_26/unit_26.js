// ВНИМАНИЕ!!! Не пишите apikey в тасках напрямую. Применяйте константу APIKEY (задать ее значение можно в файле config.js).
// Task 1
// При нажатии кнопки .b-1, срабатывает функция f1. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/employee/read
// method: GET

// Результат - объект со списком сотрудников. Выведите в out-1 возраст сотрудников через пробел.
// не забывайте для авторизации отправлять apikey с указанным ключом.

async function f1() {
  const reqHead = new Headers();
  reqHead.append("apikey", APIKEY);

  let listEmployee = await fetch(URL + `/api/26/employee/read`, {
    method: "GET",
    headers: reqHead,
  });
  console.log(listEmployee);

  const res = await listEmployee.json();
  console.log(res);

  let b = res.result.map((e) => e.age);
  console.log(b);

  document.querySelector(".out-1").innerHTML = b.join(" ");
}

document.querySelector(".b-1").addEventListener("click", f1);

// Task 2
// При нажатии кнопки .b-2, срабатывает функция f2. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/employee/read?id=3
// method: GET
// в качестве query параметра задайте id равный числу из input .i-2

// Результат - объект с описанием сотрудника. Выведите в out-2 email полученного сотрудника.

async function f2() {
  let input = document.querySelector(".i-2").value;
  console.log(input);

  const reqHead = new Headers();
  reqHead.append("apikey", APIKEY);

  let employee = await fetch(URL + "/api/26/employee/read?id=" + input, {
    method: "GET",
    headers: reqHead,
  });
  console.log(employee);
  const res = await employee.json();
  console.log(res);

  let b = res.result.email;
  console.log(b);
  document.querySelector(".out-2").innerHTML = b;
}

document.querySelector(".b-2").onclick = f2;

// Task 3
// При нажатии кнопки .b-3 срабатывает функция f3. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// /api/26/employee/read/5
// method: POST
// число 5 получите из input .i-3

// Результат - объект с описанием сотрудника. Выведите в out-3 name полученного сотрудника.

async function f3() {
  const input = document.querySelector(".i-3").value;

  const reqHead = new Headers();
  reqHead.append("apikey", APIKEY);

  let employee = await fetch(URL + "/api/26/employee/read/" + input, {
    method: "POST",
    headers: reqHead,
  });
  const res = await employee.json();
  console.log(res);

  const descript = res.result.name;

  // ну це точно не в такому контексті...
  // `Name: ${res.result.name} <br>
  //  Age: ${res.result.age} <br>
  //  Created: ${res.result.created} <br>
  //  Designation: ${res.result.designation} <br>
  //  Email: ${res.result.email} <br>
  //  Id: ${res.result.id} <br>
  // `;

  document.querySelector(".out-3").innerHTML = descript;
}

document.querySelector(".b-3").onclick = f3;

// Task 4.
// При нажатии кнопки .b-4 срабатывает функция f4. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/sr/read
// method: POST

// Результат - объект с описанием рас игры КР. Выведите в out-4 название рас (title) через пробел.

async function f4() {
  const reqHead = new Headers();
  reqHead.append("apikey", APIKEY);

  let listOfRace = await fetch(URL + "/api/26/sr/read", {
    method: "POST",
    headers: reqHead,
  });
  const res = await listOfRace.json();
  console.log(res);

  let nameOfRaces = res.result.map((e) => e.title);
  console.log(nameOfRaces);
  document.querySelector(".out-4").innerHTML = nameOfRaces.join(" ");
}

document.querySelector(".b-4").onclick = f4;

// Task 5.
// При нажатии кнопки .b-5 срабатывает функция f5. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/sr/read?race=gaal
// method: GET
// где gaal - название расы полученное из select .s-5

// Результат - объект с описанием указанной расы. Выведите в out-5 описание расы (description). Вывод осуществляйте через innerHTML.

async function f5() {
  const select = document.querySelector(".s-5").value;
  console.log(select);

  const reqHead = new Headers();
  reqHead.append("apikey", APIKEY);

  let race = await fetch(URL + "/api/26/sr/read?race=" + select, {
    method: "GET",
    headers: reqHead,
  });
  const res = await race.json();

  console.log(res);
  document.querySelector(".out-5").innerHTML = res.result.description;
}

document.querySelector(".b-5").onclick = f5;

// Task 6.
// При нажатии кнопки .b-6 срабатывает функция f6. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/run
// method: GET
// поскольку такого адреса в API не предусмотрено, то сервер должен вернуть ошибку 404
// выведите статус ответа сервера в .out-6-status

async function f6() {
  let returnError = await fetch(URL + "/api/26/run"); // бо дефолтний стан запиту GET  тому без додаткових параметрів.
  console.log(returnError.status);

  document.querySelector(".out-6").innerHTML =
    "Request status: " + returnError.status;
}

document.querySelector(".b-6").onclick = f6;

// Task 7.
// При нажатии кнопки .b-7 срабатывает функция f7. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/sr/read/human
// method: POST
// human - название расы из select .s-7

// Результат - объект с описанием указанной расы. Выведите в out-7 изображение расы. Картинку формируйте через createElement.
// В начале функции делайте очистку .out-7.

async function f7() {
  document.querySelector(".out-7").innerHTML = "";
  const input = document.querySelector(".s-7").value;

  const reqHead = new Headers();
  reqHead.append("apikey", APIKEY);

  let race = await fetch(URL + "/api/26/sr/read/" + input, {
    method: "POST",
    headers: reqHead,
  });
  const nameOfRace = await race.json();
  console.log(nameOfRace);
  //  document.querySelector(".out-7").innerHTML = ""; //  за умови якщо часто клікати(дуже швидко)(то буде декілька запитів на сервер одночасно і в результаті асинхонне виконання функції призведе до створення декількох елементів), а тут очистка для перезапису буде більш норм.
  let newElemForPic = document.createElement("img");

  newElemForPic.src = URL + nameOfRace.result.image;
  console.log(newElemForPic);
  document.querySelector(".out-7").appendChild(newElemForPic);
}

document.querySelector(".b-7").onclick = f7;

// Task 8.
// При нажатии кнопки .b-8 срабатывает функция f8. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-number
// method: GET
// если запрос отправлен верно, то будет получен объект со случайным числом
// выведите в .out-8 данное число.

async function f8() {
  let reqHead = new Headers();
  reqHead.append("apikey", APIKEY);

  let randomInt = await fetch(URL + "/api/26/random/random-number", {
    method: "GET",
    headers: reqHead,
  });
  const getRandInt = await randomInt.json();
  console.log(getRandInt["random-number"]);

  document.querySelector(".out-8").innerHTML = getRandInt["random-number"];
}

document.querySelector(".b-8").onclick = f8;

// Task 9
// При нажатии кнопки .b-9 срабатывает функция f9. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-number?min=100&max=110
// method: GET
// где min - число из переменной min. Max - число из переменной max.

// если запрос отправлен верно, то будет получен объект со случайным число от min до max.
// выведите число в .out-9

let min = 400;
let max = 500;

async function f9() {
  const reqHead = new Headers();
  reqHead.append("apikey", APIKEY);

  let randomInt = await fetch(
    URL + `/api/26/random/random-number?min=${min}&max=${max}`,
    {
      method: "GET",
      headers: reqHead,
    }
  );
  console.log(randomInt);
  const getInt = await randomInt.json();
  console.log(getInt);

  document.querySelector(".out-9").innerHTML = getInt["random-number"];
}

document.querySelector(".b-9").onclick = f9;

// Task 10
// При нажатии кнопки .b-10 срабатывает функция f10. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-number
// method: POST
// в теле POST запроса передайте параметры min равные переменной min и max равное переменной max. Формат - formdata.

// если запрос отправлен верно, то будет получен объект со случайным число от min до max.
// выведите число в .out-10

async function f10() {
  const reqHead = new Headers();
  reqHead.append("apikey", APIKEY);

  const data = new FormData();
  data.append("min", min);
  data.append("max", max);

  let randomInt = await fetch(URL + `/api/26/random/random-number`, {
    method: "POST",
    headers: reqHead,
    body: data,
  });
  const getInt = await randomInt.json();
  console.log(getInt);

  document.querySelector(".out-10").innerHTML = getInt["random-number"];
}

document.querySelector(".b-10").onclick = f10;

// Task 11
// При нажатии кнопки .b-11 срабатывает функция f11. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-string?length=16
// method: GET
// Значение длины строки получаем из input .i-11

// Если запрос сделан правильно, то сервер возвратит объект с строкой случайных символов длиной 16.
// Выведите строку в .out-11

async function f11() {
  const input = document.querySelector(".i-11").value;

  const reqHead = new Headers();
  reqHead.append("apikey", APIKEY);

  let strRandomInt = await fetch(
    URL + `/api/26/random/random-string?length=${input}`,
    {
      method: "GET",
      headers: reqHead,
    }
  );
  const getStr = await strRandomInt.json();
  console.log(getStr);

  document.querySelector(".out-11").innerHTML = getStr["random-string"];
}
document.querySelector(".b-11").onclick = f11;

// Task 12
// При нажатии кнопки .b-12 срабатывает функция f12. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-12 (form-data)
// укажите в body POST запроса аргумент symbols равный 0 или 1, данные берем из состояния checkbox .ch-12
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине и если указан symbols равный 1 то в пароле будут спецсимволы
// выведите в .out-12 полученный пароль.

async function f12() {
  let symbols = document.querySelector(".ch-12").checked ? 1 : 0;
  let length = document.querySelector(".i-12").value;
  const data = new FormData();
  data.append("symbols", symbols);
  data.append("length", length);

  const reqHead = new Headers();
  reqHead.append("apikey", APIKEY);

  let generPassword = await fetch(URL + "/api/26/random/generate-password", {
    method: "POST",
    headers: reqHead,
    body: data,
  });
  const getPassword = await generPassword.json();
  console.log(getPassword);

  document.querySelector(".out-12").innerHTML = getPassword.password;
}

document.querySelector(".b-12").onclick = f12;

// Task 13
// При нажатии кнопки .b-13 срабатывает функция f13. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-13 (form-data)
// укажите в body POST запроса аргумент symbols равный 0 или 1, данные берем из состояния checkbox .ch-131
// укажите в body POST запроса аргумент uppercase равный 0 или 1, данные берем из состояния checkbox .ch-132
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине и если указан symbols равный 1 то в пароле будут спецсимволы, и аналогично если uppercase равен 1 то будут символы в разных регистрах.
// выведите в .out-13 полученный пароль.

// не забывайте для авторизации отправлять apikey с указанным ключом.

async function f13() {
  const length = document.querySelector(".i-13").value;
  const symbols = document.querySelector(".ch-131").checked ? 1 : 0;
  const uppercase = document.querySelector(".ch-132").checked ? 1 : 0;
  const data = new FormData();
  data.append("length", length);
  data.append("symbols", symbols);
  data.append("uppercase", uppercase);

  const reqHead = new Headers();
  reqHead.append("apikey", APIKEY);

  let generPassword = await fetch(URL + "/api/26/random/generate-password", {
    method: "POST",
    headers: reqHead,
    body: data,
  });
  const getPassword = await generPassword.json();

  document.querySelector(".out-13").innerHTML = getPassword.password;
}

document.querySelector(".b-13").onclick = f13;

// Task 14
// При нажатии кнопки .b-14 срабатывает функция f14. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/world
// method: GET
// если все сделано верно, то получите объект с описанием миров игры GoW
// выведите в .out-14 title миров через пробел.

async function f14() {
  const reqHead = new Headers();
  reqHead.append("apikey", APIKEY);

  let listOfWorldsGOW = await fetch(URL + "/api/26/gow/world", {
    method: "GET",
    headers: reqHead,
  });
  console.log(listOfWorldsGOW);
  const getNamesOfWorlds = await listOfWorldsGOW.json();
  console.log(getNamesOfWorlds);

  const list = getNamesOfWorlds.worlds.map((e) => e.title);
  document.querySelector(".out-14").innerHTML = list.join(" ");
}

document.querySelector(".b-14").onclick = f14;

// Task 15
// При нажатии кнопки .b-15 срабатывает функция f15. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/world/niflheim
// method: GET
// где niflheim - название мира полученное из .s-15
// выведите описание мира (description) в out-15

async function f15() {
  const world = document.querySelector(".s-15").value;
  console.log(world);

  const reqHead = new Headers();
  reqHead.append("apikey", APIKEY);

  let worldData = await fetch(URL + `/api/26/gow/world/${world}`, {
    method: "GET",
    headers: reqHead,
  });
  console.log(worldData);
  const wordDescribe = await worldData.json();
  console.log(wordDescribe);

  document.querySelector(".out-15").innerHTML = wordDescribe.world.description;
}

document.querySelector(".b-15").onclick = f15;

// Task 16
// При нажатии кнопки .b-16 срабатывает функция f16. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/governor/сурт
// method: GET
// имя правителя - получите из select .s-16
// если все сделано верно, то получите объект с описанием мира где правитель Сурт игры GoW.
// выведите в .out-16 руну данного мира. Как изображение (createElement). Очищайте out-16 в начале функции.

async function f16() {
  document.querySelector(".out-16").innerHTML = "";
  const input = document.querySelector(".s-16").value;

  const reqHead = new Headers();
  reqHead.append("apikey", APIKEY);

  let world = await fetch(URL + `/api/26/gow/governor/${input}`, {
    method: "GET",
    headers: reqHead,
  });
  const worldData = await world.json();
  console.log(worldData.world.rune);

  const newImgTag = document.createElement("img");
  newImgTag.src = URL + worldData.world.rune;
  document.querySelector(".out-16").appendChild(newImgTag);
}

document.querySelector(".b-16").onclick = f16;

// Task 17
// При нажатии кнопки .b-17 срабатывает функция f17. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/get-time
// method: POST
// если все сделано верно, то получите объект с текущим временем сервера.
// выведите в .out-17 время в формате час:минуты

async function f17() {
  const reqHead = new Headers();
  reqHead.append("apikey", APIKEY);

  let dataTime = await fetch(URL + "/api/26/get-time", {
    method: "post",
    headers: reqHead,
  });
  let getTime = await dataTime.json();
  console.log(getTime);
  const clock = getTime.time; // don't want stretch the row after "=" below... don't care.
  document.querySelector(".out-17").innerHTML = clock.h + ":" + clock.m;
}

document.querySelector(".b-17").onclick = f17;

// Task 18
// При нажатии кнопки .b-18 срабатывает функция f18. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/rune
// method: POST
// если все сделано верно, то получите объект с названиями миров и рунами
// выведите в .out-18 руны как изображения, а в качестве атрибута alt установите название мира.
// выполните очистку .out-18 в начале функции

async function f18() {
  const reqHead = new Headers();
  reqHead.append("apikey", APIKEY);

  let dataRune = await fetch(URL + "/api/26/gow/rune", {
    method: "post",
    headers: reqHead,
  });
  const getData = await dataRune.json();
  console.log(getData);

  const fatherNode = document.querySelector(".out-18");

  for (let key in getData.rune) {
    console.log(getData.rune[key]);
    let img = document.createElement("img");
    img.src = URL + getData.rune[key];
    img.alt = key;
    fatherNode.appendChild(img);
  }
}

document.querySelector(".b-18").onclick = f18;
