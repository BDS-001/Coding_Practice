import '.././styles/style.css'
import * as THREE from 'three'
import StatsManager from './stats/stats'

export default function app() {
    const stats = new StatsManager()
    
    // create the scene, where objects get stored
    const scene = new THREE.Scene()

    // camera setup. 
    // perspective camera (field of view, aspect ratio, near clipping, far clipping)
    // clipping planes determine when an object no longer gets redered based on camera distance
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 2 // move the camera back 5 uinits from origin on z axis

    // Set up keyboard controls
    const keys = {
    w: false,
    a: false,
    s: false,
    d: false,
    scrollUp: false,
    scrollDown: false
    };

    // Add event listeners for key presses
    window.addEventListener('keydown', (event) => {
    if (event.key in keys) {
        keys[event.key] = true;
    }
    });

    window.addEventListener('keyup', (event) => {
    if (event.key in keys) {
        keys[event.key] = false;
    }
    });

    window.addEventListener('wheel', (event) => {
    const deltaY = event.deltaY
    deltaY > 0 ? keys.scrollDown = true : keys.scrollUp = true

    })

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

    // Handle camera movement based on keys
    const moveSpeed = 2.0 // Units per second
    const moveDistance = moveSpeed * deltatime

    if (keys.w) {
        camera.position.y += moveDistance // Move up
    }
    if (keys.s) {
        camera.position.y -= moveDistance // Move down
    }
    if (keys.a) {
        camera.position.x -= moveDistance // Move left
    }
    if (keys.d) {
        camera.position.x += moveDistance // Move right
    }
    if (keys.scrollUp) {
        camera.position.z -= moveDistance // Move forward
    }
    if (keys.scrollDown) {
        camera.position.z += moveDistance // Move backwards
    }

    keys.scrollUp = false
    keys.scrollDown = false

    const rotationSpeed = 1
    cube.rotation.x += rotationSpeed * deltatime;
    cube.rotation.y += rotationSpeed * deltatime;

    renderer.render(scene, camera)

    //end stats measureing for this frame
    stats.end()
    }

    function start() {
        animate()
    }

    return {start}
}