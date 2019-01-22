import * as THREE from 'three'
export default class Vaisseau{
    constructor(){
        /**
         * Spaceship
         */
        this.spaceShip = new THREE.Mesh(
            new THREE.CylinderBufferGeometry(0.3,2,1,3),
            new THREE.MeshStandardMaterial({color:0xf0000, side:THREE.DoubleSide, wireframe:true}),
    
        )
        // spaceShip.rotation.z = 5
        this.spaceShip.rotation.y = 22
        this.spaceShip.position.z -= 1
        
        //rotation
        window.addEventListener("mousemove", (_event)=>
        {
            console.log(Math.round(_event.clientX/ innerHeight))
            if(event.clientX==0){
                this.spaceShip.rotation.z -=0.01
            }

        })

    }
}

console.log('coucou')