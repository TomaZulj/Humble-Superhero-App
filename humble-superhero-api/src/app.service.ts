export class AppService {
  private superheroes: {
    name: string;
    superpower: string;
    humilityScore: number;
  }[] = [];

  addSuperhero(name: string, superpower: string, humilityScore: number) {
    const superhero = { name, superpower, humilityScore };
    this.superheroes.push(superhero);
  }

  getSuperheroes() {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
