import { Component, OnInit} from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


@Component({
  selector: 'app-three-d-models',
  templateUrl: './three-d-models.component.html',
  styleUrls: ['./three-d-models.component.css']
})
export class ThreeDModelsComponent implements OnInit {
  constructor() {

  }

  ngOnInit(): void {
    this.setSecen();
  }

  private setSecen():void{
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 3
    camera.position.y = 1
    const canvas1 = document.getElementById('vesselCanvas') as HTMLCanvasElement
    const renderer = new THREE.WebGLRenderer({canvas : canvas1});
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.addEventListener('change', render)
    const light = new THREE.HemisphereLight(0xffeeb1, 0x080820, 2);
    const loader = new GLTFLoader();
	
    renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);

    loader.load('assets/3dModels/Vesselv2.glb',GLTF, XHR);
    let root:any
    function GLTF(GLTF:any){
      root = GLTF.scene;
      root.scale.set(0.14,0.14,0.14);
      scene.add(root);
    }
    function XHR(xhr:any){
      console.log('XHR ->', (xhr.loader / xhr.total) * 100)
    }

    scene.add(light);

    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      if(root?.rotation?.y){
         root.rotation.y += 0.01;
      }

    };
    renderer.render(scene, camera);
    function render() {
      renderer.render(scene, camera)
    }
    animate();
  }

}
