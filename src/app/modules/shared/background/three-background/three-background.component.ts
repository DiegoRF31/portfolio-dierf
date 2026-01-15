import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

import * as THREE from 'three';

@Component({
  selector: 'app-three-background',
  standalone: true,
  template: '',
  styleUrls: ['./three-background.component.css']
})
export class ThreeBackgroundComponent
  implements AfterViewInit, OnDestroy {

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private mesh!: THREE.Mesh;
  private material!: THREE.MeshBasicMaterial;
  private frameId!: number;
  private geometry!: THREE.PlaneGeometry;
  private time = 0;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.initScene();
    this.animate();
  }

  updateWaves() {
    const position = this.geometry.attributes.position;
    const vertex = new THREE.Vector3();

    for (let i = 0; i < position.count; i++) {
      vertex.fromBufferAttribute(position, i);

      const wave1 =
        Math.sin(vertex.x * 0.05 + this.time) * 2.8;

      const wave2 =
        Math.sin(vertex.x * 0.15 + this.time * 0.6) * 1.4;

      const waveDepth =
        Math.cos(vertex.y * 0.08 + this.time * 0.4) * 1.2;

      position.setZ(i, wave1 + wave2 + waveDepth);
    }

    position.needsUpdate = true;
  }

  updateColorFromTheme() {
    const cssColor = getComputedStyle(document.body)
      .getPropertyValue('--wave-color')
      .trim();

    if (cssColor) {
      this.material.color.set(cssColor);
    }
  }

  initScene() {

    const width = window.innerWidth;
    const height = window.innerHeight;
    const cssColor = getComputedStyle(document.body)
      .getPropertyValue('--wave-color')
      .trim();

    this.material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(cssColor || '#0FC2C0'),
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    this.camera.position.set(0, 25, 45);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });

    this.renderer.setSize(width, height);
    this.el.nativeElement.appendChild(this.renderer.domElement);

    this.geometry = new THREE.PlaneGeometry(
      500,
      40,
      200,
      40
    );

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.rotation.x = -Math.PI / 2;
    this.mesh.position.y = -18;

    this.scene.add(this.mesh);

    const topMesh = this.mesh.clone();
    topMesh.position.y = 28;
    topMesh.rotation.x = Math.PI / 2.5;
    this.scene.add(topMesh);

    window.addEventListener('resize', this.onResize);
  }

  animate = () => {
    this.frameId = requestAnimationFrame(this.animate);

    this.time += 0.008;
    this.updateWaves();
    this.updateColorFromTheme();
    this.renderer.render(this.scene, this.camera);
  };

  onResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  };

  ngOnDestroy() {
    cancelAnimationFrame(this.frameId);
    this.renderer.dispose();
    window.removeEventListener('resize', this.onResize);
  }
}