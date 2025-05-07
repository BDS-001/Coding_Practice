import * as THREE from 'three'

export default class Objects {
    constructor(scene) {
        // Store the scene reference
        this.scene = scene
        
        // Initialize objects collection
        this.objects = {}
        
        // Create initial objects
        this.createCube()
    }
    
    createCube() {
        // Create a simple cube
        const geometry = new THREE.BoxGeometry()
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        const cube = new THREE.Mesh(geometry, material)
        
        // Add to scene
        this.scene.add(cube)
        
        // Store reference for later manipulation
        this.objects.cube = cube
    }
    
    update(deltaTime) {
        // Update all objects as needed
        const rotationSpeed = 1
        
        // Update cube rotation
        if (this.objects.cube) {
            this.objects.cube.rotation.x += rotationSpeed * deltaTime
            this.objects.cube.rotation.y += rotationSpeed * deltaTime
        }
    }
}