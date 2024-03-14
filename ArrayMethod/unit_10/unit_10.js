// TASK 01
// По нажатию b-1 выполняется функция f1. Функция с помощью reverse должна развернуть массив a1 и вывести в out-1 через пробел.

let a1 = [22, 33, 44, 55, 66, 77, 88];

const f1 = () => {
  const res = a1.toReversed();
  console.log(res);
  document.querySelector(".out-1").innerHTML = res.join(" "); // кожен раз сміюсь(в позитивному плані) коли нагадую " -ви скажетє Іспользуй джоін! "  це був дуже крутий момент, дякую))
};

// TASK 02
// По нажатию b-2 выполняется функция f2. Функция с помощью reverse должна развернуть строку s2 и вывести в out-2.

let s2 = "mazahackercrackall";

const f2 = () => {
  const res = s2.split("").reverse();
  console.log(res);
  document.querySelector(".out-2").innerHTML = res.join("");
};

// TASK 03
// По нажатию b-3 выполняется функция f3. Функция с помощью reverse должна развернуть вложенные в a3 и присвоить a3_res, вывести в out-3 через пробел. Массив a3_res очищать при старте функции.

let a3 = [
  [44, 55, 66],
  [77, 88, 99],
]; // ожидаю 66 55 44 99 88 77

const f3 = () => {
  // const res = [...a3[0].reverse(), ...a3[1].reverse()]

  const res = a3.reduce((arr, elem) => {
    return arr.concat(elem.reverse());
  }, []);

  console.log(a3);
  console.log(res);
  document.querySelector(".out-3").innerHTML = res.join(" ");

  a3.reduce((arr, elem) => {
    return arr.concat(elem.reverse());
  }, []);
};

// TASK 04
// Функция reverse меняет исходный массив. Напишите функцию f4, которая запускается по кнопке b-4. Функция создает новый массив на основе a4 с обратным порядком элементов и возвращает его. Использовать reverse запрещено. Исходный массив - не должен изменяеться.

let a4 = [55, 66, 77, 88, 99];

const f4 = () => {
  // const res = a4.reduce((acc, elem) => {
  //   acc.unshift(elem);
  //   return acc;
  // }, []);

  let res = [];
  for (let item of a4) {
    res.unshift(item);
  }

  document.querySelector(".out-4").innerHTML = res;
  return res;
};

// TASK 05
// Напишите функцию f5, которая запускается по кнопке b-5. Функция создает и возвращает новый массив на основе a5 c попарно замененными четными и нечетными элементами. Исходный массив менять запрещено! Количество элементов в массиве всегда четное.

let a5 = [1, 2, 3, 4, 5, 6, 7, 8]; // ожидаю [2, 1, 4, 3, 6, 5, 8, 7]
a5 = [2, 3];
const f5 = () => {
  const res = a5.reduce((acc, elem, index) => {
    if (index % 2 === 0) {
      acc.push(a5[index + 1], elem);
    }
    return acc;
  }, []);

  console.log(res);
  document.querySelector(".out-5").innerHTML = res.join(" ");
};

// TASK 06
//  Напишите функцию f6, которая запускается по кнопке b-6. Функция сортирует массив a6 по возрастанию и выводит в out-6 через пробел. Не указывайте функции сортировки. Изучите результат на двух значениях переменной a6.

let a6 = [1, 4, 2, 6, 7, 3, 5, 2, 9];
//  a6 = ['hi', 'low', 'lo', 'hihi'];

const f6 = () => {
  a6.sort(); // сортує за прорядковим номером в списку unicode

  console.log(a6);
  document.querySelector(".out-6").innerHTML = a6.join(" ");
};

// TASK 07
// Напишите функцию f7, которая запускается по кнопке b-7. Функция сортирует массив a7 по возрастанию и выводит в out-7 через пробел. Не указывайте функции сортировки. Изучите результат. Понимаете ли вы почему так произошло?

let a7 = [10, 4, 20, 6, 70, 30, 5, 2, 9];

const f7 = () => {
  const res = a7.sort((a, b) => a - b);

  document.querySelector(".out-7").innerHTML = res.join(" ");
};

// TASK 08
//  Напишите функцию f8, которая запускается по кнопке b-8. Функция сортирует массив a8 по возрастанию и выводит в out-8 через пробел. Функцию сортировки укажите самостоятельно.

let a8 = [10, 4, 20, 6, 70, 30, 5, 2, 9];

const f8 = () => {
  // for (let i = 0; i <a8.length; i++) {   //О(n2) вроді
  //     for(let k=i; k < a8.length; k++) {
  //         if(a8[i]>a8[k]){
  //             let temp = a8[i];
  //             a8[i] = a8[k];
  //             a8[k]=temp;
  //         }
  //     }
  // }
  //  console.log(a8)

  a8.sort((a, b) => a - b);
  console.log(a8);
  document.querySelector(".out-8").innerHTML = a8.join(" ");
};

// TASK 09
// Напишите функцию f9, которая запускается по кнопке b-9. Функция сортирует массив a9  по возрастанию или по убыванию в зависимости от аргумента s. Если s равно ASC - то по возрастанию, если s равно DESC то по убыванию, и возвращает измененный массив.

let a9 = [9, 9, 45, 3, 1, 83, 50, 6, 5, 35, 8, 4];

const f9 = (s) => {
  //   if (s === "ASC") {
  //     a9.sort((a, b) => a - b);
  //   } else if (s === "DESC") {
  //     a9.sort((a, b) => b - a);
  //   }

  s === "ASC"
    ? a9.sort((a, b) => a - b)
    : s === "DESC"
    ? a9.sort((a, b) => b - a)
    : 0;

  console.log(a9);
  return a9;
};

// TASK 10
// По нажатию b-10 выполняется функция f10. Функция сортирует массив a10 по полю age (по позрастанию) и выводит имена (после сортировки) в out-10. Вывод через пробел.

let a10 = [
  { name: "Ivan", age: 34 },
  { name: "Petro", age: 24 },
  { name: "Orest", age: 45 },
  { name: "Virii", age: 35 },
  { name: "Blamo", age: 47 },
  { name: "Vandeya", age: 27 },
  { name: "Inna", age: 35 },
  { name: "Gretta", age: 25 },
  { name: "Brianna", age: 55 },
];

const f10 = () => {
  const sort = a10
    .toSorted((a, b) => a.age - b.age)
    .reduce((acc, item) => {
      acc.push(item.name);
      return acc;
    }, [])
    .join(" ");

  document.querySelector(".out-10").innerHTML = sort;
  console.log(sort);
};

document.querySelector(".b-1").addEventListener("click", f1);
document.querySelector(".b-2").addEventListener("click", f2);
document.querySelector(".b-3").addEventListener("click", f3);
document.querySelector(".b-4").addEventListener("click", f4);
document.querySelector(".b-5").addEventListener("click", f5);
document.querySelector(".b-6").addEventListener("click", f6);
document.querySelector(".b-7").addEventListener("click", f7);
document.querySelector(".b-8").addEventListener("click", f8);
document.querySelector(".b-9").addEventListener("click", () => {
  document.querySelector(".out-9").innerHTML = f9("ASC");
});
document.querySelector(".b-10").addEventListener("click", f10);
