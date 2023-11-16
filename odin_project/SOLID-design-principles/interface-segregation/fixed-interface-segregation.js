class Entity {
    constructor(name) {
        this.name = name
    }
}

const mover = {
    move() {
        console.log(`${this.name} moved`)
    }
}

const attacker = {
    attack(target) {
        console.log(`${this.name} attacked ${target.name} for ${this.attackDamage} damage`)
        target.takeDamage(this.attackDamage)
    }
}

const takeDamage = {
    takeDamage(amount) {
        this.health -= amount
        console.log(`${this.health} health remaining`)
    }
}

class Character extends Entity {
    constructor(name, attackDamage, health) {
        super(name)
        this.attackDamage = attackDamage
        this.health = health
    }
}

Object.assign(Character.prototype, mover)
Object.assign(Character.prototype, attacker)
Object.assign(Character.prototype, takeDamage)

class Wall extends Entity {
    constructor(name, health) {
        super(name)
        this.health = health
    }
}

Object.assign(Wall.prototype, takeDamage)

class Turret extends Entity {
    constructor(name, attackDamage) {
        super(name)
        this.attackDamage = attackDamage
    }
}

Object.assign(Turret.prototype, attacker)