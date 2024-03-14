class Goods {
  constructor(name, price, image, count) {
    this.name = name;
    this.price = price;
    this.image = image;
    this.count = count;
  }
  draw() {// task 3
    const div = document.createElement("div");
    div.classList.add("goods");
    console.log(div);

    div.innerHTML = `
      <h1>${this.name}</h1>
      <p class="price">${this.price}</p>
      <img src="${this.image}" alt="${this.name}" style ="width:100px"> 
 `
    return div;
  }
}

const goods_1 = new Goods(
  "apple",
  23.5,
  "https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png",
  400
);
console.log(goods_1);
// И теперь выведем на страницу
document.querySelector(".out-3").append(goods_1.draw());

const service_1 = new Goods(//task 4
    'car', 
    '5000',
    "https://cdn1.iconfinder.com/data/icons/family-life-flat/340/car_vehicle_transportation_automobile_transport_auto_automotive-512.png",
    50
)

console.log(service_1)
document.querySelector('.out-4').append(service_1.draw())

