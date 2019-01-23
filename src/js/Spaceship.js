import spaceShipTextureSource from '../images/textures/spaceShip.jpg'
import * as THREE from 'three'




export default class Vaisseau{
    constructor(_options){
        // this.container = new THREE.Object3D()
        
        this.textureLoader = _options.textureLoader
        this.cursor = _options.cursor
        
        this.setspaceShip()
    }
    
    setspaceShip()
    {
     /**
     * Spaceship
     */
        this.spaceShip = {}
        this.spaceShip = new THREE.Mesh(
            new THREE.CylinderBufferGeometry(0.3, 2, 1, 3),
            new THREE.MeshStandardMaterial({
                map: this.textureLoader.load(spaceShipTextureSource),
                side:THREE.DoubleSide, 
            }),
        )
    
        this.spaceShip.rotation.y = 22
        this.spaceShip.position.z -= 1
        
        //rotation
        window.addEventListener("mousemove", (_event)=>
        {
            //Axe X
            //rotation vers la droite
            if(0.22 < this.cursor.x && this.spaceShip.rotation.z < 0.8)
            {                
                this.spaceShip.rotation.z += 0.05 
            }
            //rotation vers la gauche
            else if (this.cursor.x < -0.22 && this.spaceShip.rotation.z > -0.8) {
                this.spaceShip.rotation.z -= 0.05
            }

            //Axe Y
            //rotation vers le haut
            if(0.008 < this.cursor.y && this.spaceShip.rotation.x < 0.25)
            {                
                this.spaceShip.rotation.x += 0.04
            }
            //rotation vers le bas
            else if (this.cursor.y < -0.008 && this.spaceShip.rotation.x > -0.25) {
                this.spaceShip.rotation.x -= 0.04
            }
        })
    }
}
