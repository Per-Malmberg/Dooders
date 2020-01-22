import Brain from "./brain";

let mutationRate = 0.15;
let mutationAmount = 0.1;

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
    let position = Math.floor(Math.random() * firstParent.Genotype.length);
    let child = new Brain();
    for (let i = 0; i < firstParent.Genotype.length; i++) {
      child.Genotype[i] =
        i < position ? firstParent.Genotype[i] : secondParent.Genotype[i];
    }
    return child;
  };

  mutate = (child: Brain): Brain => {
    if (Math.random() > mutationRate) {
      return;
    }
    let position = Math.floor(Math.random() * child.Genotype.length);
    child.Genotype[position] += (Math.random() * 2 - 1) * mutationAmount;
  };
}
