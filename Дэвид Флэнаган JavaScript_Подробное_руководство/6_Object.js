// property attributes (writable),(enumerable),(cinfigurable)

const obj = {
  prop: {
    value: "value",
    writable: true, // revriting value
    enumerable: true, // hiding from counting in (for..in & Object.key())
    configurable: true, // changing of abilities & delete
  },
};

let func = new Function("a", "b", "return a * b");
// console.log(func(4,4))

var o1 = Object.create({ x: 1, y: 2 });

// console.log(o1)
// console.log(o1.x)

var o3 = Object.create(Object.prototype);

// console.log(o3)

let o = {};
o.x = 1;
let r = Object.create(o);
// console.log(o)
// console.log(r)

function deepCopy(obj) {
  // Перевіряємо, чи obj є об'єктом
  if (typeof obj !== "object" || obj === null) {
    return obj; // Якщо не об'єкт, повертаємо його без змін
  }

  // Створюємо новий об'єкт або масив в залежності від типу obj
  const newObj = Array.isArray(obj) ? [] : {};
 
  // Рекурсивно копіюємо всі властивості об'єкта obj в новий об'єкт newObj
  for (let key in obj) {
    newObj[key] = deepCopy(obj[key]);
  }

  return newObj;
}

// Приклад використання
let originalObj = {
  a: 1,
  b: [2, 3],
  c: { d: 4, e: { f: 5 } },
};

const copiedObj = deepCopy(originalObj);
// console.log(copiedObj);


let bj = {
    a: 1,
    b: [2, 3],
    c: { d: 4, e: { f: 5 } },
  };

console.log(Object.getOwnPropertyDescriptor(bj, 'c'))
