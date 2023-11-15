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

    area() {
        return this.width * this.height
    }
}