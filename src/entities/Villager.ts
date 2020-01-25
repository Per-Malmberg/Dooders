import { Dooder } from "./Dooders";
import Brain from "../ai/brain";

export class DooderWithBrain extends Dooder {
  public Brain: Brain;
}

export default class Villager extends DooderWithBrain {}
