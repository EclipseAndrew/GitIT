class Goods2 extends Goods {
  //task 5
  constructor(name, price, image, count, sale) {
    super(name, price, image, count);
    this.sale = sale; // task 6
  }
  draw() {  // task 7
    const div = super.draw();
    if (this.sale) {
      let s = document.createElement("h2");
      s.textContent = "Pаспродажа";
      div.append(s);
    }
    return div;
  }
}
