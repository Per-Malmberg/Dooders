export class Identity {
  static _lastNumber: number = new Date().getTime();
  static newId(): number {
    let nextSeed: number = new Date().getTime();
    while (nextSeed === this._lastNumber) nextSeed = new Date().getTime();

    return nextSeed;
  }
}
