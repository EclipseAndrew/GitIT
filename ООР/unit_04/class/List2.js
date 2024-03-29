class List2 extends List {
 constructor(item, cssClass) {
    super(item)
    this.cssClass = cssClass;
 }

    render2() {
    const ul = super.render()
    ul.classList.add(this.cssClass); 
    return ul;
    }
}

const ex2 = new List2(['one', 'two', 'three', 'four'], 'myClass');
document.body.appendChild(ex2.render2());