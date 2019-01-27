import * as THREE from 'three'

import{MTLLoader, OBJLoader} from 'three-obj-mtl-loader'
import ennemyObject from '../assets/ennemy.obj'
import ennemyMaterials from '../assets/ennemy.mtl'


export default class Ennemy
{
    constructor(_options)
    {
        this.container = new THREE.Object3D()


        this.textureLoader = _options.textureLoader
        this.cursor = _options.cursor


        const mtlLoader = new MTLLoader()
        const objLoader = new OBJLoader()

        mtlLoader.load(ennemyMaterials, (materials) =>
        {
            materials.preload()
            objLoader.setMaterials(materials)
            objLoader.load(ennemyObject, (object) =>
            {
                object.scale.x = 60
                object.scale.y = 60
                object.scale.z = 60

                object.position.z -= 100
                object.position.y += 10
        
                function rotateObject(object, degreeX = 0, degreeY = 0, degreeZ = 0)
                {
                    object.rotateX(THREE.Math.degToRad(degreeX))
                    object.rotateY(THREE.Math.degToRad(degreeY))
                    object.rotateZ(THREE.Math.degToRad(degreeZ))
                }
                rotateObject(object, 0, -110, 0)
                this.container.add(object)
            })
        })


        this.setEnnemy()
    }

    setEnnemy()
    {
        
        const loop = () =>{
            //Position
            window.addEventListener("mousemove", (_event) =>
            {

                //Axe X
                //Position vers la droite
                if(0.25 <= this.cursor.x && this.container.position.x <= 15)
                {                
                    // this.container.rotation.z += 0.06
                    this.container.position.x += 2
                }

                //Position vers la gauche
                else if ( -0.25 >= this.cursor.x  && this.container.position.x > -15) 
                {
                    // this.container.rotation.z -= 0.06
                    this.container.position.x -= 2

                }   
            })
        }
        loop()
        


    }






}

