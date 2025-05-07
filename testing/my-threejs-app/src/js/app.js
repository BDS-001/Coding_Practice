import '.././styles/style.css'
import * as THREE from 'three'
import StatsManager from './stats/stats'
import Camera from './camera/camera'

export default function app() {
    const stats = new StatsManager()
    const camera = new Camera()

    // create the scene, where objects get stored
    const scene = new THREE.Scene()

    // renderer, displays everything will take a scene and camera later
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('app').appendChild(renderer.domElement);

    // render a cube as example
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    //setup deltatime clocl
    let clock = new THREE.Clock()
    let lastTime = 0

    function animate() {
    //begin stats measuring for each frame render
    stats.begin()
    requestAnimationFrame(animate)

    //get delta time so that animation are not dependant on framerate
    const currentTime = clock.getElapsedTime()
    const deltatime = currentTime - lastTime
    lastTime = currentTime

    camera.update(deltatime)
    const rotationSpeed = 1
    cube.rotation.x += rotationSpeed * deltatime;
    cube.rotation.y += rotationSpeed * deltatime;

    renderer.render(scene, camera.camera)

    //end stats measureing for this frame
    stats.end()
    }

    function start() {
        animate()
    }

    return {start}
}