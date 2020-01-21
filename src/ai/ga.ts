import Brain from "./brain";

export default class Ga {
  evolve = (pop: Brain[]): Brain[] => {
    let newPop = new Array<Brain>();
    while (newPop.length !== pop.length) {
      let firstParent = this.tournament(pop);
      let secondParent = this.tournament(pop.filter(x => x !== firstParent));
      let child = this.crossover(firstParent, secondParent);
      child = this.mutate(child);
      newPop.push(child);
    }
    return newPop;
  };

  tournament = (pop: Brain[]): Brain => {
    let selected = new Array<Brain>();
    for (let i = 0; i < pop.length * 0.4; i++) {
      let index = Math.floor(Math.random() * pop.length);
      selected.push(pop[index]);
    }
    return selected.reduce((x, y) => (x.Fitness > y.Fitness ? x : y));
  };

  crossover = (firstParent: Brain, secondParent: Brain): Brain => {
    throw Error("Not implemented");
  };

  mutate = (child: Brain): Brain => {
    throw Error("Not implemented");
  };
}
