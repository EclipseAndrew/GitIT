//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочкa рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

function t1() {
  let result = "";

  for (let i = 0; i < 3; i++) {
    for (let n = 0; n < 3; n++) {
      result += "*";
    }
    result += "_";
  }
  //console.log(result)
  document.querySelector(".out-1").innerHTML = result;
}

document.querySelector(".b-1").onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифру и перенос строки br, внутренний - *_, и после этого внешний - знак переноса.</p>
function t2() {
  let num = 1;
  let result = "";

  for (let i = 0; i < 3; i++) {
    result += num + "<br>";
    num++;

    for (let n = 0; n < 3; n++) {
      result += "*_";
    }
    result += "<br>";
  }

  //console.log(result);
  document.querySelector(".out-2").innerHTML = result;
}

document.querySelector(".b-2").onclick = t2;

//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_

// <p>Решить задачу с помощью вложенных циклов. Внутренний цикл выводит *_,  внешний цикл выводит перенос строки br.</p>
function t3() {
  let result = "";

  for (let i = 0; i < 4; i++) {
    for (let k = 0; k < 3; k++) {
      result += "*_";
    }
    result += "<br>";
  }
  console.log(result);
  document.querySelector(".out-3").innerHTML = result;
}

document.querySelector(".b-3").onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1_1*2*3*4*5*2_1*2*3*4*5*3_1*2*3*4*5*
// Внешний цикл выводит цифру и _, а внутренний выводит от 1 до 5 с *
function t4() {
  let result = "";
  let counter = 1;

  for (let i = 0; i <= 2; i++) {
    let counterToo = 1;
    result += `${counter}_`;
    counter++;

    for (let k = 1; k <= 5; k++) {
      result += `${counterToo}*`;
      counterToo++;
    }
  }

  console.log(result);
  document.querySelector(".out-4").textContent = result;
}

document.querySelector(".b-4").onclick = t4;

//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 101010
// 101010
// 101010

// <p>Вложенный цикл в зависимости от четного или нет k (счетчика цикла) рисует или 0 или 1. Внешний цикл - br.</p>
function t5() {
  result = "";

  for (let i = 0; i <= 2; i++) {
    for (let k = 0; k <= 2; k++) {
      result += "10";
    }
    result += "<br>";
  }
  document.querySelector(".out-5").innerHTML = result;
}

document.querySelector(".b-5").onclick = t5;

//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 10x01x
// 10x01x
// 10x01x

function t6() {
  let result = "";

  for (let i = 0; i <= 2; i++) {
    for (let a = 0; a < 1; a++) {
      result += "1";
      for (let b = 0; b < 1; b++) {
        result += "0";
        for (let c = 0; c < 1; c++) {
          result += "x";
          for (let d = 0; d < 1; d++) {
            result += "0";
            for (let e = 0; e < 1; e++) {
              result += "1";
              for (let f = 0; f < 1; f++) {
                result += "x"; //цікво, за таку конструкцію б'ють по пальцях??
              }
            }
          }
        }
      }
    }
    result += "<br>";
  }
  //console.log(result)
  document.querySelector(".out-6").innerHTML = result;
}

document.querySelector(".b-6").onclick = t6;

//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *
// **
// ***
// ****

function t7() {
  let result = "";
  let counter = 1;
  for (let i = 0; i < 4; i++) {
    for (let k = 0; k < counter; k++) {
      result += "*";
    }
    counter++;
    result += "<br>";
  }
  document.querySelector(".out-7").innerHTML = result;
}

document.querySelector(".b-7").onclick = t7;

//  Task 8
// Per aspera ad astra
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *****
// ****
// ***
// **
// *

function t8() {
  let result = "";

  for (let i = 0; i <= 4; i++) {
    for (let k = 5; k > i; k--) {
      result += "*";
    }
    result += "<br>";
  }

  document.querySelector(".out-8").innerHTML = result;
}

document.querySelector(".b-8").onclick = t8;

//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 1_
// 1_2_
// 1_2_3_
// 1_2_3_4_
// 1_2_3_4_5_

function t9() {
  let result = "";

  for (let i = 1; i <= 5; i++) {
    for (let k = 1; k <= i; k++) {
      result += `${k}_`;
    }
    result += "<br>";
  }
  document.querySelector(".out-9").innerHTML = result;
}

document.querySelector(".b-9").onclick = t9;

//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

//01_02_03_04_05_06_07_08_09_10_
//11_12_13_14_15_16_17_18_19_20_
//21_22_23_24_25_26_27_28_29_30_
//31_32_33_34_35_36_37_38_39_40_
//41_42_43_44_45_46_47_48_49_50_

function t10() {
  let result = "";
  let counter = 1;
  for (let i = 0; i < 5; i++) {
    for (let k = 1; k <= 10; k++) {
      if (i === 0 && k < 10) {
        result += "0";
      }
      result += counter + "_";
      counter++; // бачив такий приклад out += (10 * i + k) + "_"; він простий і класний, але я вже на сьогодні "всьо". Саме тому i counter.
    }
    result += "<br>";
  }
  document.querySelector(".out-10").innerHTML = result;
}

document.querySelector(".b-10").onclick = t10;
