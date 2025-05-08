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
        
        // Replace isLocked with mouseDown
        this.mouseDown = false
        
        // Add variables to track mouse position
        this.mouseX = 0
        this.mouseY = 0
        
        this.rotationX = 0
        this.rotationY = 0
        this.mouseSensitivity = 1
        this.mouseDeltaX = 0
        this.mouseDeltaY = 0
        
        this.boundMouseMoveHandler = this.#handleMouseMove.bind(this)
        
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
        this.#setupMouseControls() // Replace pointer lock with mouse controls
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

    // Replace setupPointerLock with setupMouseControls
    #setupMouseControls() {
        // Mouse down event (start tracking)
        this.canvas.addEventListener('mousedown', (event) => {
            if (event.button === 0) { // Left mouse button
                this.mouseDown = true
                document.addEventListener('mousemove', this.boundMouseMoveHandler)
            }
        })
        
        // Mouse up event (stop tracking)
        document.addEventListener('mouseup', (event) => {
            if (event.button === 0) { // Left mouse button
                this.mouseDown = false
                document.removeEventListener('mousemove', this.boundMouseMoveHandler)

                this.mouseX = 0
                this.mouseY = 0
            }
        })
        
        // Prevent context menu on right-click
        document.addEventListener('contextmenu', (event) => {
            event.preventDefault()
        })
    }

    #handleMouseMove(event) {
        if (!this.mouseDown) return
        
        // Calculate delta from mouse movement
        const newMouseX = event.clientX
        const newMouseY = event.clientY
        
        // If we have previous values, calculate delta
        if (this.mouseX !== 0 && this.mouseY !== 0) {
            this.mouseDeltaX = newMouseX - this.mouseX
            this.mouseDeltaY = newMouseY - this.mouseY
        }
        
        // Update stored position
        this.mouseX = newMouseX
        this.mouseY = newMouseY
    }
    
    update(deltaTime) {
        // Handle camera movement based on keys
        const moveDirection = new THREE.Vector3(0, 0, 0)
        
        if (this.keys.w) moveDirection.z -= 1  // Forward is negative Z
        if (this.keys.s) moveDirection.z += 1  // Back is positive Z
        if (this.keys.a) moveDirection.x -= 1  // Left is negative X
        if (this.keys.d) moveDirection.x += 1  // Right is positive X
        
        if (moveDirection.x !== 0 && moveDirection.z !== 0) {
            moveDirection.normalize()
        }
        
        const moveDistance = this.moveSpeed * deltaTime
        
        // Convert movement to camera's local space
        if (moveDirection.length() > 0) {
            // Get forward and right vectors from camera quaternion
            const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion)
            forward.y = 0  // Keep movement on horizontal plane
            forward.normalize()
            
            const right = new THREE.Vector3(1, 0, 0).applyQuaternion(this.camera.quaternion)
            right.y = 0  // Keep movement on horizontal plane
            right.normalize()
            
            // Calculate movement vector
            const movement = new THREE.Vector3()
            
            // Add forward/backward component
            if (moveDirection.z !== 0) {
                movement.add(forward.clone().multiplyScalar(-moveDirection.z * moveDistance))
            }
            
            // Add left/right component
            if (moveDirection.x !== 0) {
                movement.add(right.clone().multiplyScalar(moveDirection.x * moveDistance))
            }
            
            // Apply movement
            this.camera.position.add(movement)
        }
        
        // Mouse movement update - only when mouse is down
        if (this.mouseDown) {
            // Apply horizontal rotation (y-axis)
            this.rotationY -= this.mouseDeltaX * this.mouseSensitivity * deltaTime
            
            // Apply vertical rotation (x-axis) with limits
            this.rotationX -= this.mouseDeltaY * this.mouseSensitivity * deltaTime
            this.rotationX = Math.max(-Math.PI/3, Math.min(Math.PI/3, this.rotationX))
            
            // Apply rotation to camera
            this.camera.rotation.order = 'YXZ'
            this.camera.rotation.x = this.rotationX
            this.camera.rotation.y = this.rotationY
            
            // Reset deltas after applying
            this.mouseDeltaX = 0
            this.mouseDeltaY = 0
        }
    }
}