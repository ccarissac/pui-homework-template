import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import GIF from 'gif.js';
// image credits
    //flare image: https://opengameart.org/content/flare-effect-blender
    //smoke image: https://opengameart.org/content/flare-effect-blender

//code references: 
//https://stackoverflow.com/questions/21710049/animated-gif-as-texture-in-three-js
//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
//Smoke Effect code: https://www.youtube.com/watch?v=otavCmIuEhY
//https://www.hongkiat.com/blog/on-click-animated-gif/
//GIF.js https://jnordberg.github.io/gif.js/

    let clock = new THREE.Clock(); //keep track of time
    let delta = 0; //will store getDetla value (amt of time passed since clock updated)

    //CAMERA
    const camera = new THREE.PerspectiveCamera (
        75, window.innerWidth / window.innerHeight, 
        1, 
        1500
    );
    camera.position.z = 1000;

    //SCENE
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog (0xc0f0ff, 0.0015); //color, near

    //RENDERER
    const renderer = new THREE.WebGLRenderer ( {antialias: true} );
    renderer.setPixelRatio (window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.domElement.id = "smoke-3d";
    console.log("Renderer ID:", renderer.domElement.id);

    //LIGHT - no shadows

    const light = new THREE.HemisphereLight ( 0xd6e6ff, 0xa38c08, 1);
    scene.add( light ); 

    //GIF TEXTURE
    // Load GIF texture
    // const textureLoader = new THREE.TextureLoader();
    // const gifUrl = '../Memories/test-memory.gif'; // Replace with the actual path to your GIF
    // const gifTexture = textureLoader.load(gifUrl);

    //ORBIT CONTROLS
    const controls = new OrbitControls(camera, renderer.domElement);
    const raycaster = new THREE.Raycaster(); //mouse click events
    const mouse = new THREE.Vector2();

    // document.querySelector("#smoke-3d").addEventListener('click', onClick, false);
    document.addEventListener('DOMContentLoaded', (event) => {
        const smoke3DElement = document.querySelector("#smoke-3d");
        
        if (smoke3DElement) {
            smoke3DElement.addEventListener('click', onClick, false);
        } else {
            console.error("Element with ID 'smoke-3d' not found.");
        }
    });

    function onClick(event) {
        // calculate mouse position in normalized device coordinates (-1 to +1)
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
        // update camera and mouse position
        raycaster.setFromCamera(mouse, camera);
    
        // calculate objects intersecting the picking ray
        const intersects = raycaster.intersectObjects(smokeParticles);
    
        if (intersects.length > 0) {
            // Log the position of clicked smoke
            console.log('Selected Smoke Element Position:', intersects[0].object.position);
            // playGifAtCursor(event.clientX, event.clientY);

            displayPopup();

        }
    }

    

    // function playGifAtCursor(gifUrl) {
    //     // Set the position of the GIF container based on the cursor position
    //     const gifContainer = document.createElement('div');
    //     gifContainer.style.position = 'absolute';
    //     gifContainer.style.left = event.clientX + 'px';
    //     gifContainer.style.top = event.clientY + 'px';
    //     document.body.appendChild(gifContainer);
    //     console.log(gifUrl);
    
    //     // Create a new GIF instance
    //     const gifInstance = new GIF({
    //         workers: 2,
    //         quality: 10,
    //     });
    
    //     // Load the GIF URL
    //     gifInstance.load(gifUrl);
    
    //     // Append the GIF container to the DOM
    //     gifContainer.appendChild(gifInstance.renderer.domElement);
    
    //     // Play the GIF
    //     gifInstance.play();
    
    //     // Remove the GIF container after the GIF has played
    //     gifInstance.on('finished', function () {
    //         document.body.removeChild(gifContainer);
    //     });
    // }

    //POPUP WINDOW
    function displayPopup() {
        const popupTemplate = document.querySelector(".popup-template");
        if (!popup) return;
        const popupElement = popupTemplate.content.cloneNode(true);
        
        // Append the popup to the body
        document.body.appendChild(popupElement);

        const btnDelete = document.querySelector(".memory-remove");
        console.log("delete");
        btnDelete.addEventListener("click", () => {
            document.body.removeChild(popupElement);
      })
    }

    //SMOKE TEXTURE
    const smokeTexture = new THREE.TextureLoader().load("/materials/smoke_02.png");
    smokeTexture.encoding = THREE.sRGBEncoding;
    const smokeGeometry = new THREE.PlaneGeometry(300,300); //set size of plane
    
    //LambertMaterial for non-shiny surfaces
    const smokeMaterial = new THREE.MeshLambertMaterial ({
        map: smokeTexture, 
        emissive: 0x222222, 
        opacity: 0.15, 
        transparent: true
    });

    let smokeParticles = []; //empty to put smoke textures into

    for (let i=0; i<98; i++) {
        let smokeElement = new THREE.Mesh (smokeGeometry, smokeMaterial);
        smokeElement.scale.set(2, 2, 2); // set scale to x, y, z, to double

        //position smoke textures at random x, y, z positions
        smokeElement.position.set(Math.random() * 1000-500, Math.random()*1000 - 500, Math.random() * 1000-100);

        smokeElement.rotation.z = Math.random() *360;

        scene.add(smokeElement);
        smokeParticles.push(smokeElement);
    }

    window.addEventListener ("resize", onWindowResize);

    function onWindowResize() {
        camera.aspect=window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize ( window.innerWidth, window.innerHeight );
    }

    function animate() {

        requestAnimationFrame( animate );
        delta = clock.getDelta();

        for (let i=0; i<smokeParticles.length; i++) { 
            smokeParticles[i].rotation.z +=(delta * 0.12);
        }
        renderer.render (scene, camera);
    }

    animate();