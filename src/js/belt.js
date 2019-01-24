import * as THREE from 'three'

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
        this.belt = {}
        this.belt.geometry = new THREE.Geometry()

        for(let i = 0; i < 2000; i++)
        {
            const vertice = new THREE.Vector3()

            const angle = Math.random() * Math.PI * 2
            const distance = 1.5 + Math.random() * 1.5

            vertice.x = Math.sin(angle) * distance
            vertice.y = (Math.random() - 0.5) * 0.2
            vertice.z = Math.cos(angle) * distance

            this.belt.geometry.vertices.push(vertice)
        }

        // this.belt.material = new THREE.PointsMaterial({
        //     size: 0.01,
        //     sizeAttenuation: true,
        //     map: this.textureLoader.load(rockDiffuseAlphaSource),
        //     transparent:true
        // })
        // this.belt.points = new THREE.Points(this.belt.geometry, this.belt.material)
        // this.container.add(this.belt.points)
    }
}