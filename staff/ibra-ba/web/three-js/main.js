// create scene

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)


const geometry = new THREE.BoxGeometry(1, 1, 1)

const loader = new THREE.TextureLoader();

const materials = [
    new THREE.MeshBasicMaterial({ map: loader.load("textures/smiley.png") }),
    new THREE.MeshBasicMaterial({ map: loader.load("textures/radiation.png") }),
    new THREE.MeshBasicMaterial({ map: loader.load("textures/radiation.png") }),
    new THREE.MeshBasicMaterial({ map: loader.load("textures/radiation.png") }),
    new THREE.MeshBasicMaterial({ map: loader.load("textures/radiation.png") }),
    new THREE.MeshBasicMaterial({ map: loader.load("textures/radiation.png") }),

];

const cube = new THREE.Mesh(geometry, materials)

scene.add(cube)

camera.position.z = 5

// key events

const step = .2

document.onkeydown = event => {
    const { key } = event

    //console.log(key)

    if (key === 'ArrowUp')
        cube.rotation.x += step
    else if (key === 'ArrowDown')
        cube.rotation.x -= step
    else if (key === 'ArrowLeft')
        cube.rotation.y -= step
    else if (key === 'ArrowRight')
        cube.rotation.y += step
    else if (key === 'PageUp')
        cube.position.y += step
    else if (key === 'PageDown')
        cube.position.y -= step
}

// render scene

function animate() {
    requestAnimationFrame(animate)

    //cube.rotation.x += 0.02
    cube.rotation.y += 0.01

    renderer.render(scene, camera)
}

animate()