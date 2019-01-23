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
            new THREE.CylinderBufferGeometry(0.3,2,1,3),
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
            if(0.25 < this.cursor.x && this.spaceShip.rotation.z < 0.6)
            {                
                this.spaceShip.rotation.z += 0.04   
            }

            else if (this.cursor.x < -0.25 && this.spaceShip.rotation.z > -0.6) {
                this.spaceShip.rotation.z -= 0.04
            }

            //Axe Y
            if(0.25 < this.cursor.y && this.spaceShip.rotation.x < 0.6)
            {                
                this.spaceShip.rotation.x += 0.03   
            }

            else if (this.cursor.y < -0.25 && this.spaceShip.rotation.x > -0.6) {
                this.spaceShip.rotation.x -= 0.03
            }

            // if(event.clientX >=1)
            // {
            //     this.spaceShip.rotation.z = this.spaceShip.rotation.z -=0.01 
            // }

            // if(event.clientX <1)
            // {
            //     this.spaceShip.rotation.z -= 0.03
            // }
            // else
            // {
            //     this.spaceShip.rotation.z = this.spaceShip.rotation.z += 0.01
            // }
            //Axe Y
            // console.log(_event.clientY /innerHeight)
            // if(event.clientY >=0)
            // {
            //     this.spaceShip.rotation.x += 0.01
            // }
        })
        // window.addEventListener("mousemove", (_event)=>
        // {
        //     if(event.clientY = 1){ 
        //     this.spaceShip.rotation.y -= 0.01
        //     }
        // })

    }
}
