// import spaceShipTextureSource from '../images/textures/spaceShip.jpg'
import * as THREE from 'three'

import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader'
import spaceShipObject from '../assets/spaceShip.obj'
import spaceShipMaterials from '../assets/spaceShip.mtl'



export default class Vaisseau{
    constructor(_options){
        this.container = new THREE.Object3D()
        
        this.textureLoader = _options.textureLoader
        this.cursor = _options.cursor


        const mtlLoader = new MTLLoader()
        const objLoader = new OBJLoader()

        mtlLoader.load(spaceShipMaterials, (materials) =>
        {
            materials.preload()
            objLoader.setMaterials(materials)
            objLoader.load(spaceShipObject, (object) =>
            {
                object.scale.x = 8
                object.scale.y = 8
                object.scale.z = 8

                object.position.z -= 50
        
                function rotateObject(object, degreeX = 0, degreeY = 0, degreeZ = 0)
                {
                    object.rotateX(THREE.Math.degToRad(degreeX))
                    object.rotateY(THREE.Math.degToRad(degreeY))
                    object.rotateZ(THREE.Math.degToRad(degreeZ))
                }
                rotateObject(object, 20, 1, 0)
                this.container.add(object)
            })
        })

        this.setspaceShip()
    }
    
    setspaceShip()
    {
     /**
     * Spaceship
     */
 
    
        // this.container.rotation.y = 22
        // this.container.position.z -= 1
        
        //rotation
        window.addEventListener("mousemove", (_event)=>
        {
            //Axe X
            //rotation vers la droite
            if(0.10 < this.cursor.x && this.container.rotation.z < 0.8)
            {                
                this.container.rotation.z += 0.05
                this.container.position.x -= 1
            }
            //rotation vers la gauche
            else if (this.cursor.x < -0.10 && this.container.rotation.z > -0.8) {
                this.container.rotation.z -= 0.05
                this.container.position.x += 1

            }

            //Axe Y
            //rotation vers le haut
            if(0.008 < this.cursor.y && this.container.rotation.x < 0.10)
            {                
                this.container.rotation.x += 0.05
            }
            //rotation vers le bas
            else if (this.cursor.y < -0.008 && this.container.rotation.x > -0.10) {
                this.container.rotation.x -= 0.05
            }
        })
    }
}
