import * as THREE from 'three'
import ballTextureSource from '../images/textures/ball.jpg'

export default class Ball
{
    constructor(_options)
    {
        this.container = new THREE.Object3D()

        this.textureLoader = _options.textureLoader
        this.cursor = _options.cursor


        this.setBall()
    }
    setBall()
    {

        const tab =  [20, -20]
        function getRandomInt() {
            return Math.floor(Math.random() * 1.99) 
        }
        console.log(tab[getRandomInt()])
        

        

        const loop = () =>{
            //Position
            window.addEventListener("mousemove", (_event) =>
            {

                //Axe X
                //Position vers la droite
                if(0.25 <= this.cursor.x && this.container.position.x <= 15)
                {                
                    // this.ball.rotation.z += 0.06
                    this.container.position.x += 2
                }

                //Position vers la gauche
                else if ( -0.25 >= this.cursor.x  && this.container.position.x > -15) 
                {
                    // this.ball.rotation.z -= 0.06
                    this.container.position.x -= 2

                }   
                
        const ball = new THREE.Mesh(
            new THREE.SphereBufferGeometry(20,20),
            new THREE.MeshBasicMaterial({ map: this.textureLoader.load(ballTextureSource)})
            )
            ball.position.z = -100
            ball.position.x = tab[getRandomInt()]
            setInterval(this.ball, 2000)
            this.container.add(ball)
            this.container.position.z += 2
            })


            


        }
        loop()
    }
    
}
