import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.124/build/three.module.js"

import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js"
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/loaders/GLTFLoader.js"
var renderer, camera, scene, controls

const addCarModel = () => {
  const loader = new GLTFLoader()
  loader.load("../assets/f1-car/scene.gltf", (gltf) => {
    scene.add(gltf.scene)
    renderer.render(scene, camera)
    animate()
  })
}

const resizeCanvasToDisplaySize = () => {
  const canvas = renderer.domElement
  const width = canvas.clientWidth
  const height = canvas.clientHeight
  if (canvas.width !== width || canvas.height !== height) {
    renderer.setSize(width, height, false)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }
}

const animate = () => {
  resizeCanvasToDisplaySize()
  controls.update()
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}

const init = () => {
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x181817) // same as page background

  // apply renderer to canvas
  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("canvas"),
  })
  // create camera (no need to define aspect ratio, default to canvas ratio)
  camera = new THREE.PerspectiveCamera(35, 2, 2, 1000)
  camera.rotation.y = (60 / 180) * Math.PI
  camera.position.x = 13
  camera.position.y = 3
  camera.position.z = 3

  controls = new OrbitControls(camera, renderer.domElement)
  controls.target.set(0, 0, -6)
  controls.autoRotate = true // turn this guy to true for a spinning camera
  controls.autoRotateSpeed = 3

  // add lighting
  const ambientLight = new THREE.AmbientLight(0x404040, 2)
  const light1 = new THREE.PointLight(0xffffff, 2, 0)
  light1.position.set(200, 100, 300)
  scene.add(ambientLight)
  scene.add(light1)

  addCarModel()
}

init()
