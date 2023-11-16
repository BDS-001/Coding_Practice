class Entity {
    constructor(name, attackDamage, health) {
        this.name = name
        this.attackDamage = attackDamage
        this.health = health
    }

    move() {
        console.log(`${this.name} moved`)
    }

    attack(target) {
        console.log(`${this.name} attacked ${target.name} for ${this.attackDamage} damage`)
        target.takeDamage(this.attackDamage)
    }

    takeDamage(amount) {
        this.health -= amount
        console.log(`${this.health} health remaining`)
    }
}

class Character extends Entity {

}

class Wall extends Entity {
    constructor(name, health) {
        super(name, 0, health)
    }

    move() {
        return null
    }

    attack() {
        return null
    }
}

class Turret extends Entity {
    constructor(name, attackDamage) {
        super(name, attackDamage, -1)
    }

    move() {
        return null
    }

    attack() {
        return null
    }
}