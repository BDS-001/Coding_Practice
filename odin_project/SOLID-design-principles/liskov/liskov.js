class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    setWidth(width) {
        this.width = width
    }

    setHeight(height) {
        this.height = height
    }

    area() {
        return this.width * this.height
    }
}

class Square extends Rectangle {
    setWidth(width) {
        this.width = width
        this.height = width
    }

    setHeight(height) {
        this.width = height
        this.height = height
    }
}

function increaseRectangleWidth(rectangle) {
    rectangle.setWidth(rectangle.width + 1)
}

const rec1 = new Rectangle(15, 40)
const rec2 = new Rectangle(22, 22)
const sqr1 = new Square(22, 22)

increaseRectangleWidth(rec1)
increaseRectangleWidth(rec2)
increaseRectangleWidth(sqr1)

console.log(rec1.area())
console.log(rec2.area())
console.log(sqr1.area())

// the principle is broken becuase increaseRectangleWidth function doesnt work correctly with rectangle and square, square increasees both the height and width
