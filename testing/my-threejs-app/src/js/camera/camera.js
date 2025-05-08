import * as THREE from 'three'

export default class Camera {
    
    constructor(canvas) {
        this.canvas = canvas
        this.camera
        this.keys = {
            w: false,
            a: false,
            s: false,
            d: false,
        };
        this.moveSpeed = 4
        this.isLocked = false

        this.#initialize()
    }

    #initialize() {
        // camera setup. 
        // perspective camera (field of view, aspect ratio, near clipping, far clipping)
        // clipping planes determine when an object no longer gets redered based on camera distance
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.set(0, 1.5, 3)
        this.camera = camera

        // setup listeners
        this.#setupKeyListeners()
        this.#setupPointerLock()
    }

    #setupKeyListeners() {
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

    #setupPointerLock() {
        this.canvas.addEventListener('click', () => {
            if (!this.isLocked) {
                this.canvas.requestPointerLock();
            }
        });

        document.addEventListener('pointerlockchange', () => {
            console.log(this.isLocked)
            document.pointerLockElement === this.canvas ? this.isLocked = true : this.isLocked = false
        })
    }

    update(deltaTime) {
        // Handle camera movement based on keys
        const moveDistance = this.moveSpeed * deltaTime

        if (this.keys.w) {
            this.camera.position.z -= moveDistance // Move forward
        }
        if (this.keys.s) {
            this.camera.position.z += moveDistance // Move back
        }
        if (this.keys.a) {
            this.camera.position.x -= moveDistance // Move left
        }
        if (this.keys.d) {
            this.camera.position.x += moveDistance // Move right
        }
    }
}