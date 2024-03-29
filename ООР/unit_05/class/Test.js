class Test {
    #test = 'hohoho'
    set testProp(a) {
        this._testProp = a;
        // console.log(a)
    }
    get testProp() {
        return this._testProp;
    }
}

const exampl = new Test()
exampl.testProp = 'rt'
// console.log(exampl)