// task 3
class ModernButton extends Button {
  constructor(width, height, background, value, borderRadius = 0) {
    super(width, height, background, value);
    this.borderRadius = borderRadius;
  }
//   task 4
  render() {
    let modBtn = super.render();
    modBtn.style.borderRadius = this.borderRadius + 'px'
  return modBtn
  }
}

// task 5
const myBtn2 = new ModernButton(100, 50, 'red', 'Push me', 40) // +1 параметр

const btnElem2 = myBtn2.render() 

document.body.appendChild(btnElem2) 