import * as THREE from "three";

class GlobalUtilCls {
  scene = new THREE.Scene();
  constructor() {
    this.scene.background = new THREE.Color("gray");
  }
  canvas;

  init(canvas) {
    this.canvas = canvas;
  }
}

export const GlobalUtil = new GlobalUtilCls();
