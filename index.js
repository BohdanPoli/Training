class User {
  static sayHello() {
    console.log("Hi");
  }

  sayGoodBye() {
    console.log("Bye");
  }

  constructor({ email = "standard", password = "standard" } = {}) {
    this._email = email;
    this.password = password;
  }

  get email() {
    return this._email;
  }

  set email(newEmail) {
    this._email = newEmail;
  }
}

const newUser = new User({ email: "123@gmail", password: "12312" });

class SuperUser extends User {
  constructor({ nick, email, password } = {}) {
    super({ email, password });

    this._nick = nick;
  }
}

const superI = new SuperUser({
  email: "LALA@@@SUPER",
  password: "Without",
  nick: "Ball",
});

class SuperPix extends SuperUser {
  constructor({ slogan, ...restProps } = {}) {
    super(restProps);

    this._slogan = slogan;
  }

  get slogan() {
    return this._slogan;
  }
}

const superIo = new SuperPix({
  slogan: "play all time",
  email: "super@123",
  password: "12312",
  nick: "Dad",
});

console.log(newUser);
console.log(superI);
console.log(superIo);

console.log(superIo.email);

console.log(parseInt("I1"));
