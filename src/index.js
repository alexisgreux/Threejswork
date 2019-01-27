import './css/style.styl'
import wallpaperTextureSource from './images/textures/wallpaper.jpg'
import Vaisseau from '../src/js/Spaceship'
import Belt from '../src/js/belt'
import Ennemy from '../src/js/ennemy'
import Ball from '../src/js/ball'

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
 * Scene2
 */
const scene2 = new THREE.Object3D()
scene.add(scene2)
//

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 2000)
camera.position.z = 5

scene.add(camera)
//

/**
 * Music
 */

let listener = new THREE.AudioListener();
camera.add( listener );

// create a global audio source
let sound = new THREE.Audio( listener );

// load a sound and set it as the Audio object's buffer
let audioLoader = new THREE.AudioLoader();
audioLoader.load( '/crimsonFlames.mp3', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( true );
	sound.setVolume( 0.5 );
	sound.play();
});


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
 * Importation 3D  
 */

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

/**
 * Ennemy
 */
const ennemy = new Ennemy
({
    textureLoader: textureLoader,
    cursor: cursor
})
scene.add(ennemy.container)

/**
 * Ball
 */
const ball = new Ball
({
    textureLoader: textureLoader,
    cursor: cursor
})
scene.add(ball.container)

 //
//
//

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