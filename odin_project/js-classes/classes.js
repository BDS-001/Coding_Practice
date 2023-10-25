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



  class Book {
    constructor(author, title, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    }

    get author() {
      return this._author
    }
  
    set author(value) {
      if (value.length === 0) {
        console.log('author cannot be blank')
        return
      }
      this._author = value
    }

    changeRead() {
      if (this.read === 'no') {
        this.read = 'yes'
      } else {
        this.read = 'no'
      }
    }
  }

  const testBook = new Book('', 'title', 34, false)
  console.log(testBook.author, 'the author')