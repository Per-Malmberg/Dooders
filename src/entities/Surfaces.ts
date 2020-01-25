import { DObject } from "./DObject";
import P5 from "p5";

export enum SurfaceType {
  WILL_KILL_DOODERS_IF,
  WALKABLE,
  RUNNABLE
}
export abstract class Surface extends DObject {
  _surfaceType: SurfaceType;

  constructor(p5: P5, surfaceType: SurfaceType) {
    super(p5);
    this._surfaceType = surfaceType;
  }
}

export class Grass extends Surface {}

export class Water extends Surface {}

export class Dirt extends Surface {}

export class Tarmac extends Surface {}

export class Stones extends Surface {}
