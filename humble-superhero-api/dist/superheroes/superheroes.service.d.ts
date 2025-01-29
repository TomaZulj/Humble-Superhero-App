export declare class Superhero {
    name: string;
    superpower: string;
    humilityScore: number;
    constructor(name: string, superpower: string, humilityScore: number);
}
export declare class SuperheroesService {
    private superheroes;
    addSuperhero(name: string, superpower: string, humilityScore: number): Superhero;
    getSuperheroes(): Superhero[];
}
