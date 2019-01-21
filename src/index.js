import './css/style.styl'
import grassTextureSource from './images/grass.jpg'
import wallTextureSource from './images/textures/house/wall.jpg'
import roofTextureSource from './images/textures/house/roof.jpg'
import bushTextureSource from './images/textures/house/bush.jpg'
import spaceTextureSource from './images/textures/wallpaper.jpg'

import * as THREE from 'three'

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

const spaceTexture = textureLoader.load(spaceTextureSource)
const grassTexture = textureLoader.load(grassTextureSource)
const wallTexture = textureLoader.load(wallTextureSource)
const roofTexture = textureLoader.load(roofTextureSource)
const bushTexture = textureLoader.load(bushTextureSource)

grassTexture.wrapS = THREE.RepeatWrapping
grassTexture.wrapT = THREE.RepeatWrapping
grassTexture.repeat.x = 2
grassTexture.repeat.y = 2

wallTexture.wrapS = THREE.RepeatWrapping
wallTexture.wrapT = THREE.RepeatWrapping
wallTexture.repeat.x = 2
wallTexture.repeat.y = 2

roofTexture.wrapS = THREE.RepeatWrapping
roofTexture.wrapT = THREE.RepeatWrapping
roofTexture.repeat.x = 4
roofTexture.repeat.y = 4

spaceTexture.wrapS = THREE.RepeatWrapping
spaceTexture.wrapT = THREE.RepeatWrapping
spaceTexture.repeat.x = 1
spaceTexture.repeat.y = 1


/**
 * Wallpaper
//  */
// const space = new THREE.Mesh(
//     new THREE.SphereGeometry(6),
//     new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, map : grassTexture })
//     )
    
//     scene.add(space)
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

/**
 * Scene
 */
const scene = new THREE.Scene()

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100)
camera.position.z = 3
scene.add(camera)





/**
 * House
 */
const house = new THREE.Object3D()
scene.add(house)

/**
 * Wallpaper
 */
const wallpaper = new THREE.Mesh(
    new THREE.SphereGeometry(50,50),
    new THREE.MeshStandardMaterial({side:THREE.DoubleSide, map:spaceTexture})
)
house.add(wallpaper)



/**
 * Spaceship
 */
const spaceShip = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1,1,1),
    new THREE.MeshStandardMaterial({color:0xf0000})
)
house.add(spaceShip)

/**
 * Bullet
 */
const bullet = new THREE.Mesh(
    new THREE.BoxGeometry(0.05,0.05,1),
    new THREE.MeshStandardMaterial({color:0xf0152})

)
house.add(bullet)
bullet.position.x = 1

 


// bullet.position.z -= 2

/**
 * Lights
 */
const doorLight = new THREE.PointLight()
doorLight.position.x = - 1.02
doorLight.castShadow = true
house.add(doorLight)

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

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

/**
 * Loop
 */
const loop = () =>
{
    window.requestAnimationFrame(loop)

    //Bullet
    window.addEventListener("keydown", (_event) =>
{
    window.requestAnimationFrame(loop)

        if(event.keyCode == 32   )
        {
            bullet.position.z -= 0.05
        }
        // else(bullet.position == -5){
        //     bullet.position -= 0.05
        // }
})

    //Update camera
    camera.position.x = cursor.x * 3
    camera.position.y = - cursor.y * 3
    // camera.lookAt(new THREE.Vector3())

    // Renderer
    renderer.render(scene, camera)
}
loop()
















// // Hot
// if(module.hot)
// {
//     module.hot.accept()

//     module.hot.dispose(() =>
//     {
//         console.log('dispose')
//     })
// }