class Validate {
  constructor(a) {
    this.a = a;
  }
  static isNumber(n) {
    return !isNaN(n);
  }
  static isInt(i) {
    return i % 1 === 0;
  }
  static isFloat(f) {
    return f % 1 !== 0;
  }
  static isChar(c) {
    return typeof c === "string" && c.length == 1;
  }
  static isString(s) {
    return typeof s === "string";
  }
  static isBoolean(b) {
    return typeof b === "boolean";
  }
  static isArray(a) {
    return Array.isArray(a);
  }
  static toMoney(m) {
    let str = m.toString();
    let dig = str.split("");
    let res = "";
    let count = 0;
    for (let i = dig.length - 1; i >= 0; i--) { 
      res = dig[i] + res;
      if (++count % 3 === 0 && i !== 0) {
        res = " " + res;
      }
    }
    return `${res}.00`;
  }
}