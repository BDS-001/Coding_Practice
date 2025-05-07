import '.././styles/style.css'
import StatsManager from './stats/stats'
import Camera from './camera/camera'
import Scene from './scene/scene'
import Objects from './objects/Objects'
import Renderer from './renderer/renderer'
import Clock from './utils/clock'

export default function app() {
    // Initialize core components
    const stats = new StatsManager()
    const camera = new Camera()
    const scene = new Scene()
    const objects = new Objects(scene.scene)
    const renderer = new Renderer()
    const clock = new Clock()
    
    // Set up resize handler to update camera aspect ratio
    renderer.setResizeCallback(() => {
        camera.camera.aspect = window.innerWidth / window.innerHeight
        camera.camera.updateProjectionMatrix()
    })

    function animate() {
        // Begin stats measuring for each frame render
        stats.begin()
        requestAnimationFrame(animate)

        // Get delta time so that animations are not dependent on framerate
        const deltaTime = clock.getDeltaTime()

        // Update all components
        camera.update(deltaTime)
        objects.update(deltaTime)

        // Render the scene
        renderer.render(scene.scene, camera.camera)

        // End stats measuring for this frame
        stats.end()
    }

    function start() {
        animate()
    }

    return { start }
}