import * as THREE from 'three'

export default class Camera {
    
    constructor() {
        this.camera = this.#initialize()
        this.keys = {
            w: false,
            a: false,
            s: false,
            d: false,
        };
    }

    #initialize() {
        // camera setup. 
        // perspective camera (field of view, aspect ratio, near clipping, far clipping)
        // clipping planes determine when an object no longer gets redered based on camera distance
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.set(0, 1.5, 3)
        this.#listenerSetup()
        return camera
    }

    #listenerSetup() {
    // Add event listeners for key presses
    window.addEventListener('keydown', (event) => {
    if (event.key in this.keys) {
        this.keys[event.key] = true;
    }
    });

    window.addEventListener('keyup', (event) => {
    if (event.key in this.keys) {
        this.keys[event.key] = false;
    }
    });
    }

    update(deltaTime) {
        // Handle camera movement based on keys
        const moveSpeed = 2.0 // Units per second
        const scrollSpeed = 10.0
        const moveDistance = moveSpeed * deltaTime
        const scrollDistance = scrollSpeed * deltaTime

        if (this.keys.w) {
            this.camera.position.z -= moveDistance // Move up
        }
        if (this.keys.s) {
            this.camera.position.z += moveDistance // Move down
        }
        if (this.keys.a) {
            this.camera.position.x -= moveDistance // Move left
        }
        if (this.keys.d) {
            this.camera.position.x += moveDistance // Move right
        }
    }
}