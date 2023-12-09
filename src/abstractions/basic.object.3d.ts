import _ from "lodash";
import { Object3D, Uniform } from "three";
import { addControllers } from "../helpers/gui.controller";
import { TimeUtil } from "../utils/time";

export abstract class UpdatableObject3D {
  // Utils

  abstract objectName: string;

  // Object data (used for clean up)
  mesh: THREE.Mesh | Object3D;
  geometries: THREE.BufferGeometry[] = [];
  materials: (THREE.Material | THREE.ShaderMaterial)[] = [];

  // Uniforms
  uniforms: Record<
    string,
    | Uniform
    | { value: number; options?: { min: number; max: number; steps: number } }
  > = {};

  // abstract methods
  abstract set(): void;
  abstract resize(): void;
  abstract update(data: { delta: number; elapsed: number }): void;

  constructor() {
    TimeUtil.on("update", (data: { delta: number; elapsed: number }) => {
      if (!this.uniforms.uTime) {
        this.uniforms.uTime = { value: 0 };
      }
      this.uniforms.uTime.value += data.delta * 0.01;
      // Update uTime for all the materials if any
      this.materials?.forEach((material) => {
        if (material.uniforms?.uTime) {
          material.uniforms.uTime.value += data.delta * 0.0001;
        }
      });

      if (_.isEmpty(this.materials) || _.isNil(this.update)) return;
      this.update(data);
    });
  }

  setUniformControllers = () => {
    if (_.isEmpty(this.uniforms)) return;

    _.forEach(this.uniforms, (val, uniformKey) => {
      if (uniformKey === "uTime") return;
      const controllerName = this.getControllerName(uniformKey);
      addControllers(
        this.objectName ?? "unknown",
        controllerName,
        (val) => {
          this.uniforms[uniformKey].value = val;
        },
        val.value,
        val.options || {}
      );
    });
  };

  protected getControllerName = (str: string) => {
    const secondChar = str.charAt(1).toLocaleLowerCase();
    const rest = str.slice(2);
    return `${secondChar}${rest}`;
  };
}
