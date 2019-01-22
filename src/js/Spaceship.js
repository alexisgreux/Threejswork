import spaceShipTextureSource from '../images/textures/spaceShip.jpg'
import * as THREE from 'three'




export default class Vaisseau{
    constructor(_options){
        // this.container = new THREE.Object3D()
        
        this.textureLoader = _options.textureLoader
        
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
            console.log(_event.clientX / innerHeight)
            if(event.clientX>=0)
            {
                this.spaceShip.rotation.z -= 0.01
            }
            if(event.clientX =1)
            {
                this.spaceShip.rotation.z += 0.01
            }
        })
        // window.addEventListener("mousemove", (_event)=>
        // {
        //     if(event.clientY = 1){ 
        //     this.spaceShip.rotation.y -= 0.01
        //     }
        // })

    }
}

console.log('coucou')