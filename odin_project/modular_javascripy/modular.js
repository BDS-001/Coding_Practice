let people = (function() {
    let name = 'will'

    function sayName() {
        alert(name);
    }

    return {
        sayName:sayName
    }
})()