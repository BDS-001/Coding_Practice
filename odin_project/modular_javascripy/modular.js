let myModule = {
    name: 'will',
    age: 34,
    sayName: function() {
        alert(this.name)
    },
    setName: function(newName) {
        this.name = newName
    }
}

myModule.sayName()

//only module can access variables
let people = (function() {
    let name = 'will'

    function sayName() {
        alert(name);
    }

    return {
        sayName:sayName
    }
})()


