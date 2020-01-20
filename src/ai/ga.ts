import Brain from "./brain";

export default class Ga {
  evolve = (): Brain[] => {
    return null;
  };

  tournament = (pop: Brain[]): Brain => {
    let selected = new Array<Brain>();
    for (let i = 0; i < pop.length * 0.4; i++) {
      let index = Math.floor(Math.random() * pop.length);
      selected.push(pop[index]);
    }
    return selected.reduce((x, y) => (x.Fitness > y.Fitness ? x : y));
  };
}
