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
            function shoot(){
                console.log("shoot")
            }
            setInterval(shoot, 5000)
        }
        loop()
        


    }






}

