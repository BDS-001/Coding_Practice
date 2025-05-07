import * as THREE from 'three'

export default class Camera {
    
    constructor() {
        this.camera = this.#initialize()
        this.keys = {
            w: false,
            a: false,
            s: false,
            d: false,
            scrollUp: false,
            scrollDown: false
        };
    }

    #initialize() {
        // camera setup. 
        // perspective camera (field of view, aspect ratio, near clipping, far clipping)
        // clipping planes determine when an object no longer gets redered based on camera distance
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.z = 2 // move the camera back 5 uinits from origin on z axis
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

    window.addEventListener('wheel', (event) => {
    const deltaY = event.deltaY
    deltaY > 0 ? this.keys.scrollDown = true : this.keys.scrollUp = true
    })
    }

    update(deltaTime) {
        // Handle camera movement based on keys
        const moveSpeed = 2.0 // Units per second
        const scrollSpeed = 10.0
        const moveDistance = moveSpeed * deltaTime
        const scrollDistance = scrollSpeed * deltaTime

        if (this.keys.w) {
            this.camera.position.y -= moveDistance // Move up
        }
        if (this.keys.s) {
            this.camera.position.y += moveDistance // Move down
        }
        if (this.keys.a) {
            this.camera.position.x += moveDistance // Move left
        }
        if (this.keys.d) {
            this.camera.position.x -= moveDistance // Move right
        }
        if (this.keys.scrollUp) {
            this.camera.position.z -= scrollDistance // Move forward
        }
        if (this.keys.scrollDown) {
            this.camera.position.z += scrollDistance // Move backwards
        }

        //reset scroll
        this.keys.scrollUp = false
        this.keys.scrollDown = false
    }
}