import * as THREE from 'three';

let camera, scene, renderer;
let player, enemy;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Player (RoboCat)
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    player = new THREE.Mesh(geometry, material);
    scene.add(player);

    // Enemy (RoboMouse)
    const enemyGeometry = new THREE.BoxGeometry();
    const enemyMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    enemy = new THREE.Mesh(enemyGeometry, enemyMaterial);
    enemy.position.set(2, 0, -5);
    scene.add(enemy);

    camera.position.z = 5;

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

init();