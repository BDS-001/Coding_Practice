import * as THREE from 'three'

export default class Renderer {
    constructor() {
        this.renderer = this.#initialize()
    }

    #initialize() {
        // Create renderer
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        
        // Add to DOM
        document.getElementById('app').appendChild(renderer.domElement)
        
        // Setup window resize handler
        this.#setupResizeHandler(renderer)
        
        return renderer
    }

    #setupResizeHandler(renderer) {
        window.addEventListener('resize', () => {
            this.onResize && this.onResize()
            
            // Update renderer size
            renderer.setSize(window.innerWidth, window.innerHeight)
        })
    }

    // Method to set resize callback
    setResizeCallback(callback) {
        this.onResize = callback
    }

    // Render method
    render(scene, camera) {
        this.renderer.render(scene, camera)
    }
}