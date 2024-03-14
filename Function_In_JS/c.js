let name = "Andrew"

const obj = {
  name: "John",
  sayName: () => {
    console.log(this.name)
  },
};

obj.sayName(); // Виведе: undefined

