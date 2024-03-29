class Test4 extends Test2 {
  set testProp(a) {
    this._testProp = a * 10;
  }
  get testValue() {
    return this._testProp <100 ? this._testProp : false
  }
}

const ex4 = new Test4();
ex4.testProp = 44
// console.log(ex4) 

// console.log(ex4.testValue) 