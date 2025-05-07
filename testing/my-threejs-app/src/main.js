import './style.css'
import * as THREE from 'three'
import Stats from 'stats.js'

// initialize stats
const stats = new Stats()
stats.showPanel(0) // panel 0 is the fps counter
document.body.appendChild(stats.dom)

// create the scene, where objects get stored
const scene = new THREE.Scene()

// camera setup. 
// perspective camera (field of view, aspect ratio, near clipping, far clipping)
// clipping planes determine when an object no longer gets redered based on camera distance
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 2 // move the camera back 5 uinits from origin on z axis

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

  const rotationSpeed = 1
  cube.rotation.x += rotationSpeed * deltatime;
  cube.rotation.y += rotationSpeed * deltatime;

  renderer.render(scene, camera)

  //end stats measureing for this frame
  stats.end()
}

animate()