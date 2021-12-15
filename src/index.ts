import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";

const canvas: any = document.getElementById("renderCanvas");
const engine: Engine = new Engine(canvas, true);
const scene: Scene = new Scene(engine);

engine.runRenderLoop(() => scene.render());