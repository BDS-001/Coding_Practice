import * as THREE from 'three'

export default class Clock {
    constructor() {
        this.clock = new THREE.Clock()
        this.lastTime = 0
    }
    
    // Get delta time between frames
    getDeltaTime() {
        const currentTime = this.clock.getElapsedTime()
        const deltaTime = currentTime - this.lastTime
        this.lastTime = currentTime
        
        return deltaTime
    }
}