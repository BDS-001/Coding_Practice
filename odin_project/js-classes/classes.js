class User {

    age = 50;

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    //getter
    get name() {
      return this._name;
    }
  
    //setter
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }

    //computed names
    ['say' + 'Hi']() {
        console.log("Hello");
      }
  
  }

  let test = new User("John");
  console.log(test.name);
  
  test = new User(""); 
  test.sayHi();
  console.log(test.age)

  console.log(User.prototype.name) 
  console.log(User.prototype.age)