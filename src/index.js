import './css/style.styl'
import wallpaperTextureSource from './images/textures/wallpaper.jpg'
import Vaisseau from '../src/js/Spaceship'
import Belt from '../src/js/belt'


import * as THREE from 'three'







/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const wallpaperTexture = textureLoader.load(wallpaperTextureSource)
//

/**
 * Sizes
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

//Update sizes
window.addEventListener('resize', () =>
{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    
    //Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()


    //Update renderer
    renderer.setSize(sizes.width, sizes.height)
})
//

/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (_event) =>
{
    cursor.x = _event.clientX / sizes.width - 0.5
    cursor.y = _event.clientY / sizes.height - 0.5
})
//

/**
 * Scene
 */
const scene = new THREE.Scene()
//

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 2000)
camera.position.z = 5
scene.add(camera)
//

/**
 * Scene2
 */
const scene2 = new THREE.Object3D()
scene.add(scene2)
//

/**
 * Wallpaper
 */
const wallpaper = new THREE.Mesh(
    new THREE.SphereGeometry(1000, 1000),
    new THREE.MeshStandardMaterial({ side:THREE.DoubleSide, map:wallpaperTexture})
)
scene2.add(wallpaper)
//

/**
 * Vaisseau
 */
const vaisseau = new Vaisseau
({
    textureLoader: textureLoader,
    cursor: cursor
})
scene.add(vaisseau.container)

/**
 * Belt
 */
const belt = new Belt
({
    textureLoader: textureLoader,
})
scene.add(belt.container)



//

// /**
//  * Bullet
//  */
// const bullet = new THREE.Mesh(
//     new THREE.BoxGeometry(0.05,0.05,1),
//     new THREE.MeshStandardMaterial({color:0xf0152})

// )
// scene2.add(bullet)
// bullet.position.x = 1

//      //Bullet
//      window.addEventListener("keydown", (_event) =>
//      {
//          if(event.keyCode == 32)
//          {
//              bullet.position.z == 2
//          }
//          const reachPoint = bullet.position.z -= 1 
//          if(bullet.position.z == reachPoint)
//          {
//              console.log('spaceShip.remove(bullet)')
//          }
//      })


// // bullet.position.z -= 2


// //


/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0x555555)
scene.add(ambientLight)

const sunLight = new THREE.DirectionalLight(0xffffff, 0.6)
sunLight.position.x = 1
sunLight.position.y = 1
sunLight.position.z = 1
sunLight.castShadow = true
sunLight.shadow.camera.top = 1.20
sunLight.shadow.camera.right = 1.20
sunLight.shadow.camera.bottom = - 1.20
sunLight.shadow.camera.left = - 1.20
scene.add(sunLight)
//

/**
 * Importation Spaceship
 */
// import spaceShipObject from './assets/CartoonRocket.obj'
// import spaceShipMaterials from './assets/CartoonRocket.mtl'




/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)
//

/**
 * Loop
 */
const loop = () =>
{ 
    window.requestAnimationFrame(loop)
    vaisseau.cursor = cursor
    
    // //Update camera
    camera.position.x = cursor.x * 50
    camera.position.y = - cursor.y * 50
    
    // Renderer
    renderer.render(scene, camera)
}
loop()
//