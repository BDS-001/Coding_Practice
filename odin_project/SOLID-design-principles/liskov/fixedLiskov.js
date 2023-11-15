//fix by creating a new class to inherit from

class Shape {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    area() {
        return this.width * this.height
    }
}

class Rectangle extends Shape{
    setWidth(width) {
        this.width = width
    }

    setHeight(height) {
        this.height = height
    }
}

class Square extends Shape {
    setWidth(width) {
        this.width = width
        this.height = width
    }

    setHeight(height) {
        this.width = height
        this.height = height
    }
}

function increaseShapeWidth(rectangle) {
    rectangle.setWidth(rectangle.width + 1)
}

const rec1 = new Rectangle(15, 40)
const rec2 = new Rectangle(22, 22)
const sqr1 = new Square(22, 22)

increaseShapeWidth(rec1)
increaseShapeWidth(rec2)
increaseShapeWidth(sqr1)

console.log(rec1.area())
console.log(rec2.area())
console.log(sqr1.area())