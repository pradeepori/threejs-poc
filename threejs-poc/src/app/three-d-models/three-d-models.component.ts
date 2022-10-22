import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from 'three/examples/jsm/libs/stats.module'
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
    const renderer = new THREE.WebGLRenderer();
    const light = new THREE.HemisphereLight(0xffeeb1, 0x080820, 2);
    const loader = new GLTFLoader();
	
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    loader.load('3dModels/engine2.glb',GLTF, XHR);
    let root:any
    function GLTF(GLTF:any){
      root = GLTF.scene;
      root.scale.set(0.12,0.12,0.12);
      scene.add(root);
      console.log(GLTF)
    }
    function XHR(xhr:any){
      console.log('XHR ->', (xhr.loader / xhr.total) * 100)
    }

    scene.add(light);

    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    camera.position.z = 5;
    renderer.render(scene, camera);
    animate();
  }

}
