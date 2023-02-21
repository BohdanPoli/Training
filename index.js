// class User {
//   static sayHello() {
//     console.log("Hi");
//   }

//   sayGoodBye() {
//     console.log("Bye");
//   }

//   character = "personal";

//   constructor({ email = "standard", password = "standard" } = {}) {
//     this._email = email;
//     this.password = password;
//   }

//   get email() {
//     return this._email;
//   }

//   set email(newEmail) {
//     this._email = newEmail;
//   }
// }

// const newUser = new User({ email: "123@gmail", password: "12312" });

// console.dir(User);
// console.log(newUser);

// class SuperUser extends User {
//   constructor({ nick, email, password } = {}) {
//     super({ email, password });

//     this._nick = nick;
//   }
// }

// const superI = new SuperUser({
//   email: "LALA@@@SUPER",
//   password: "Without",
//   nick: "Ball",
// });

// class SuperPix extends SuperUser {
//   constructor({ slogan, ...restProps } = {}) {
//     super(restProps);

//     this._slogan = slogan;
//   }

//   get slogan() {
//     return this._slogan;
//   }
// }

// const superIo = new SuperPix({
//   slogan: "play all time",
//   email: "super@123",
//   password: "12312",
//   nick: "Dad",
// });

// let arr = [1, 2, 3, 4, 5];
// arr.reverse();

// console.log(arr);

// window.alert(arr);
// let name = window.prompt("Яке ваше ім'я ?");
// console.log(name);

// console.log(window.confirm("ти нормальний ? "));

const train = document.querySelector(".train");

console.log(train.nextElementSibling);
