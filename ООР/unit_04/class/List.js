// task 1
class List {
  constructor(item) {
    this.item = item;
  }

  render() {
    // task 2
    const ul = document.createElement("ul");
    for (let e of this.item) {
      const li = document.createElement("li");
      li.textContent = e;
      ul.appendChild(li);
    }
    return ul;
  }
}

// task 3
const ex = new List(["one", "two", "three", "four"]);
document.body.appendChild(ex.render());
