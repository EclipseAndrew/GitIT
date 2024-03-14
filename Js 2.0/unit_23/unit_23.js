// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

function t1() {
  let a = localStorage.setItem(5, 11); // зберігає значення навіть після перезавантаження сторінки. (І зберігає тільки один раз, ключ/значення)
  console.log(a);
}
document.querySelector(".b-1").onclick = t1;
// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */

function t2() {
  let a2 = [7, 6, 5];
  localStorage.setItem("a2", JSON.stringify(a2));
  let a = localStorage.getItem("a2");
  console.log(a);
}
document.querySelector(".b-2").onclick = t2;
// ваше событие здесь!!!

// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

function t3() {
  let ls = localStorage.getItem("a2");
  let parse = JSON.parse(ls);
  let output = "";

  for (let i = 0; i < parse.length; i++) {
    output += `a2 ${parse[i]} <br>`;
  }
  document.querySelector(".out-3").innerHTML = output;
}

document.querySelector(".b-3").onclick = t3;
// ваше событие здесь!!!

// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/

function t4() {
  let a4 = { hello: "world", hi: "mahai" };
  localStorage.setItem("a4", JSON.stringify(a4));
}
document.querySelector(".b-4").onclick = t4;

// ваше событие здесь!!!

// Task 5 ============================================
/*   При нажатии кнопки b-5 выведите из LS сохранненный массив a4. Выведите в out-5 в формате ключ пробел значение перенос строки. */

function t5() {
  let getLS = localStorage.getItem("a4");
  let parse = JSON.parse(getLS);
  let output = "";

  for (let key in parse) {
    output += `${key} ${parse[key]}<br>`;
  }

  document.querySelector(".out-5").innerHTML = output;

  //   console.log(getLS);
  //   console.log(output);
}
document.querySelector(".b-5").onclick = t5;
// ваше событие здесь!!!

// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

function t6() {
  localStorage.clear();
}

document.querySelector(".b-6").onclick = t6;
// ваше событие здесь!!!

// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/
let a7 = [];

function t7() {
  let input = document.querySelector(".i-7").value;
  a7.push(input);
  localStorage.setItem("a7", JSON.stringify(a7));

  console.log(a7);
}
document.querySelector(".b-7").onclick = t7;
// ваше событие здесь!!!

// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

function t8() {
  a7.pop();
  localStorage.setItem("a7", JSON.stringify(a7));
}

document.querySelector(".b-8").onclick = t8;
// ваше событие здесь!!!
