// const Car = function ({ brand, model, price } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// const myCar = new Car({
//   brand: "Ford",
//   model: "Raptor",
//   price: 20000,
// });

// // console.log(Car);

// const dog = {
//   name: "Buch",
//   age: "20",
//   gender: "male",
// };

// const secondDog = Object.create(dog);
// secondDog.name = "Gav";
// secondDog.age = "24";
// secondDog.gender = "female";

// function sumTotally(value) {
//   return value + value;
// }

// // console.log(sumTotally.prototype);

// const User = function ({ email, password } = {}) {
//   this.email = email;
//   this.password = password;
// };

// User.prototype.setNewPassword = function (newPassword) {
//   this.password = newPassword;
// };

// User.prototype.setNewEmail = function setNewEmail(newEmail) {
//   this.email = newEmail;
// };

// const bordon = new User({ email: "soba@", password: 288002 });

// User.takeBrake = function (value) {
//   console.log(`Відпочиваємо ${value} хвилин`);
// };

// User.broke = "Ай, зламався";

// console.dir(User);
// console.log(Math);

// User.takeBrake(15);

// Функція конструктор
const CounterPlugin = function ({
  rootSelector,
  initialValue = 0,
  step = 1,
} = {}) {
  this._value = initialValue;
  this._step = step;
  this._refs = this._gerRefs(rootSelector);
  this._bindEvents();
  this._updateValueUI();
};

// Прототип конструктора і додавання методів

CounterPlugin.prototype.increment = function () {
  this._value += this._step;
};

CounterPlugin.prototype.decrement = function () {
  this._value -= this._step;
};

//Функція яка бере селектор

CounterPlugin.prototype._gerRefs = function (rootSelector) {
  const refs = {};

  refs.container = document.querySelector(rootSelector);
  refs.incrementBtn = refs.container.querySelector("[data-increment]");
  refs.decrementBtn = refs.container.querySelector("[data-decrement]");
  refs.value = refs.container.querySelector("[data-value]");
  console.log(refs);

  return refs;
};

// Функція яка прикріпляє івенти

CounterPlugin.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener("click", () => {
    this.increment();
    this._updateValueUI();
  });
  this._refs.decrementBtn.addEventListener("click", () => {
    this.decrement();
    this._updateValueUI();
  });
};

// Функція яка змінює value

CounterPlugin.prototype._updateValueUI = function () {
  this._refs.value.textContent = this._value;
};

//Створення екземпляра

const counter1 = new CounterPlugin({
  rootSelector: "#counter1",
  initialValue: 10,
  step: 3,
});

//Створення екземпляра

const counter2 = new CounterPlugin({
  rootSelector: "#counter2",
  initialValue: 7,
  step: 8,
});

//Створення екземпляра

const counter3 = new CounterPlugin({
  rootSelector: "#counter3",
  initialValue: 20,
  step: 10,
});
