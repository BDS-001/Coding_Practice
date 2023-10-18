// let myModule = {
//     name: 'will',
//     age: 34,
//     sayName: function() {
//         alert(this.name)
//     },
//     setName: function(newName) {
//         this.name = newName
//     }
// }

// myModule.sayName()

// //only module can access variables
// let people = (function() {
//     let name = 'will'

//     function sayName() {
//         alert(name);
//     }

//     return {
//         sayName:sayName
//     }
// })()

let poepleTwo = {
    people: [],
    init: function() {
        this.cacheDom()
    },
    cacheDom: function() {
        this.el = document.querySelector('#peopleModule')
        this.button = this.el.querySelector('button')
        this.input = this.el.querySelector('input')
        this.ul = this.el.querySelector('ul')
        this.template = document.querySelector('#people-template')
    },
    render: function() {
        let data = {
            people: this.people,
            
        }
    }
    

}
