import P5 from "p5";
import { Identity } from "../utils/Identity";

export class DObject implements Renderable {
  _id: number;
  _pos: P5.Vector;

  constructor(private _p5: P5) {
    this._id = Identity.newId();
    this._pos = new P5.Vector();
  }

  render(p5in: P5) {
    const p5 = p5in; // just for convenience

    p5.push(); // Boom

    p5.translate(this._pos);
    p5.noStroke();
    p5.fill("blue");
    p5.ellipse(0, 0, 10);

    p5.pop();
  }
}

export interface Renderable {
  render(p5: P5);
}

export class EatableObject {
  constructor(
    private _startAmount,
    private _regenerate: number,
    private _regenerateSpeed,
    private _energyPerHarvest: number
  ) {}
}

export class AppleTree extends EatableObject {
  constructor(p5: P5) {
    super(0, 5, 1, 1);
  }
}
