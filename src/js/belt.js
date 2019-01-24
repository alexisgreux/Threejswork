import * as THREE from 'three'
import starsTextureSource from '../images/textures/planet/stars.jpg'

export default class Belt
{
    constructor(_options)
    {
        this.textureLoader = _options.textureLoader

        this.container = new THREE.Object3D()
        this.setBelt()

    }

    setBelt()
    {
        
        console.log('coucou')
        // this.container.rotation.x += 0.05
        // this.container.position.y -= 100
        // this.container.position.z += 10
        // this.container.rotation.x += 6
        // this.container.rotation.z += 1
        this.belt = {}
        this.belt.geometry = new THREE.Geometry()

        for(let i = 0; i < 500000; i++)
        {
            this.belt
            const vertice = new THREE.Vector3()

            const angle = Math.random() * Math.PI *5
            const distance = Math.random() * 1000

            vertice.x = Math.sin(angle) * distance *50
            vertice.y = (Math.random() - 0.5) * 500
            vertice.z = Math.cos(angle) * distance *50 

            this.belt.geometry.vertices.push(vertice)
        }

        this.belt.material = new THREE.PointsMaterial({
            size: 1,
            sizeAttenuation: true,
            map: this.textureLoader.load(starsTextureSource),
            transparent:true
        })
        this.belt.points = new THREE.Points(this.belt.geometry, this.belt.material)
        this.container.add(this.belt.points)

        /**
        * loop
        */
        const loop = () =>
        {
            //Belt rotating
            this.container.position.z += 3
            window.requestAnimationFrame(loop)

        }
        loop()
        //
    }
}      

