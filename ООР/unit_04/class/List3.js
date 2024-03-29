class List3 extends List {
   constructor(item, cssClass) {
    super(item)
  this.cssClass = cssClass
   }

    render3() {
       const ul = super.render()
     this.cssClass.forEach(e=> ul.classList.add(e)); 
     return ul;
    }
}

const ex3 = new List3(['one', 'two', 'three', 'four'], ['text-center', 'bold', 'text-red']);
document.body.appendChild(ex3.render3());