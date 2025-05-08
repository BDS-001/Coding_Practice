import * as THREE from 'three'

export default class Objects {
    constructor(scene) {
        // Store the scene reference
        this.scene = scene
        
        // Initialize objects collection
        this.objects = {}
        
        // Create initial objects
        this.createCube()
        this.createFloor()
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
    
    createFloor() {
        // Create a floor plane
        // Parameters: width, height (of the plane)
        const geometry = new THREE.PlaneGeometry(10, 10)
        
        // Create material with a distinct color
        const material = new THREE.MeshBasicMaterial({ 
            color: 0x808080,  // Gray color
            side: THREE.DoubleSide  // Render both sides of the plane
        })
        
        // Create the mesh combining geometry and material
        const floor = new THREE.Mesh(geometry, material)
        
        // Rotate the floor to be horizontal (by default planes are vertical)
        floor.rotation.x = Math.PI / 2  // Rotate 90 degrees around X axis
        
        // Position the floor slightly below the cube
        floor.position.y = -1
        
        // Add to scene
        this.scene.add(floor)
        
        // Store reference
        this.objects.floor = floor
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