// Task 1
// Напишите pure функцию t1, которая принимает два аргумента и выводит в .out-1 cумму всех целых чисел от первого аргумента(включительно) до второго(включительно). Функция запускается по кнопке .b-1.

const t1 = (min, max) => {
  let sum = 0;
  // min = Math.round(min)
  // max = Math.round(max)
  for (let i = min; i <= max; i++) {
    sum += i;
    //   console.log(sum)
  }
  return sum;
};

document.querySelector(".b-1").addEventListener("click", function () {
  const res = t1(1, 9);
  document.querySelector(".out-1").textContent = res;
});

// Task 2
// Напишите pure функцию t2, которая принимает два аргумента и выводит в .out-2 больше число. Используйте Math.max. Функция запускается по кнопке .b-2.

const t2 = (num1, num2) => {
  return Math.max(num1, num2);
};
document.querySelector(".b-2").addEventListener("click", () => {
  const res = t2(33, 7);
  document.querySelector(".out-2").innerHTML = res;
});

// Task 3.
// Напишите pure функцию t3 ( принимает 3 аргумента), которая делит число a на b и результат выводит в out-3. Если b равно нулю, то в out-3 выводится аргумент c. Функция запускается по кнопке .b-3.

const t3 = (a, b, c) => {
  return b !== 0 ? a / b : c;
};

document.querySelector(".b-3").addEventListener("click", () => {
  const res = t3(7, 4, 4);
  document.querySelector(".out-3").innerHTML = res;
});

// Task 4
// Давайте напишем pure функцию t4, которая выводит переданный ей массив (как аргумент arr) в блок (переданный как аргумент block) через пробел. Функция запускается по кнопке .b-4.

// const t4 = (arr, block) => {
// block.textContent = arr.join(' ')
// }  // ми передаємо аргументом блок але тепер ми міняємо DOM

const t4 = (arr) => {
  return arr.join(" ");
};

document.querySelector(".b-4").addEventListener("click", () => {
  // t4([2,3,4,4,5,67,6], document.querySelector('.out-4'))
  const content = t4([2, 3, 4, 4, 5, 67, 6]);
  document.querySelector(".out-4").textContent = content;
});

// Task 5
// Давайте напишем pure функцию t5, которая проверяет наличие элемента класс которой передан ей как аргумент (например '.out-5') на странице и возвращает true или false. Функция запускается по кнопке .b-5.

const t5 = (selector) => {
  const element = document.querySelector(selector);
  return element ? true : false;
};

document.querySelector(".b-5").addEventListener("click", () => {
  const res = t5(".out-5");
  document.querySelector(".out-5").textContent = res;
});

// Task 6
// Давайте напишем pure функцию t6, которая получает массив и возвращает его развернутым на 180 градусов ( чистый аналог reverse ). Функция запускается по кнопке .b-6. Для проверки - выводите результат на страницу, через пробел.

const t6 = (arr) => {
  const reversedArr = arr.slice().reverse();
  return reversedArr.join(" ");
};

document.querySelector(".b-6").addEventListener("click", () => {
  const res = t6([3, 4, 5, 6, 7, 8, 9, 12]);
  document.querySelector(".out-6").textContent = res;
});

// Task 7
// Давайте напишем функцию t7, которая позволяет выводить текст переданный ей в качестве аргумента text в блок block. При этом переданный текст с помощью trim очищается от пробелов до и после и переводится в нижний регистр. Ваша задача модицифировать функцию и запуск так, чтобы она стала pure.

// const out7 = document.querySelector(".out-7");
// function t7(block, text) {
//  return block.textContent = text.trim().toLowerCase()
// }

function t7(text) {
  return text.trim().toLowerCase();
}

document.querySelector(".b-7").addEventListener("click", function () {
  //   t7(out7, " HelLO wORLd       ");
  const res = t7(" HelLO wORLd       ");
  document.querySelector(".out-7").textContent = res;
});

// Task 8
// Давайте напишем pure функцию t8, которая получает массив a8 и год year и проверяет что все года массива больше или равны year - возвращает true, false. Запускатеся при нажатии t8. Результат работы должен быть виден в out-8.

let a8 = [1998, 2000, 1999, 2002, 2005];
let year = 1998;

function t8(arr, year) {
  const min = Math.min(...arr);
  return min >= year;
}

document.querySelector(".b-8").addEventListener("click", function () {
  const res = t8(a8, year);
  document.querySelector(".out-8").textContent = res;
});
// Task 9
// Метод push мутирует массив. Давайте напишем pure функцию t9 которая принимает массив и число в качестве аргумента и возвращает новый массив равный исходному с добавленным в него числом ( добавленным в конце массива). Запускаться функция дожна при нажатии  на кнопку b-9. Для проверки - выводите результат на страницу через пробел.
function t9(arr, num) {
  return [...arr, num];
}

document.querySelector(".b-9").addEventListener("click", function () {
  const newArray = t9([1, 2, 3, 4, 5], 66);
  document.querySelector(".out-9").textContent = newArray.join(" ");
});
// Task 10
// Метод push мутирует массив. Давайте напишем pure функцию t10 которая принимает массив и любое количество чисел в качестве аргументов и возвращает новый массив равный исходному с добавленными в него числами ( добавленным в конце массива). Запускаться функция дожна при нажатии  на кнопку b-10. Для проверки - выводите результат на страницу через пробел.
function t10(arr, ...num) {
  return [...arr, ...num];
}

document.querySelector(".b-10").addEventListener("click", function () {
  const newArray = t10([1, 2, 3, 4, 5], 54, 645, 1);
  document.querySelector(".out-10").textContent = newArray.join(" ");
});
