// task 1
class Button {
  constructor(width, height, background, value) {
    (this.width = width),
      (this.height = height),
      (this.background = background),
      (this.value = value);
  }
//  task 2
  render() {
    let btn = document.createElement("button");
    btn.style.width = this.width + "px";
    btn.style.height = this.height + "px";
    btn.style.background = this.background;
    btn.innerText = this.value;
    return btn;
  }
}



const myBtn = new Button(100, 50, 'red', 'Push me') // задаємо параметри

const btnElem = myBtn.render() // призначаємо параметри об'єкту(фактично тут і створюється тіло об'єкта) 

document.body.appendChild(btnElem) 