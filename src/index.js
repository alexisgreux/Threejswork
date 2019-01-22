import './css/style.styl'
import spaceTextureSource from './images/textures/spaceShip.jpg'
import wallpaperTextureSource from './images/textures/wallpaper.jpg'
import * as THREE from 'three'
import Vaisseau from '../src/js/Spaceship'


/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

const spaceTexture = textureLoader.load(spaceTextureSource)
const wallpaperTexture = textureLoader.load(wallpaperTextureSource)


spaceTexture.wrapS = THREE.RepeatWrapping
spaceTexture.wrapT = THREE.RepeatWrapping
spaceTexture.repeat.x = 1
spaceTexture.repeat.y = 1
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
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100)
camera.position.z = 3
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
    new THREE.SphereGeometry(50,50),
    new THREE.MeshStandardMaterial({ side:THREE.DoubleSide, map:wallpaperTexture})
)
scene2.add(wallpaper)
//

/**
 * Vaisseau
 */
const vaisseau = new Vaisseau({
    textureLoader: textureLoader
})
scene.add(vaisseau.spaceShip)
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
// const doorLight = new THREE.PointLight()
// doorLight.position.x = - 1.02
// doorLight.castShadow = true
// scene.add(doorLight)

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



    //Update camera
    camera.position.x = cursor.x * 3
    camera.position.y = - cursor.y * 3
    // camera.lookAt(new THREE.Vector3())

    // Renderer
    renderer.render(scene, camera)
}
loop()
//