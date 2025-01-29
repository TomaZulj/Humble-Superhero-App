export declare class AppService {
    private superheroes;
    addSuperhero(name: string, superpower: string, humilityScore: number): void;
    getSuperheroes(): {
        name: string;
        superpower: string;
        humilityScore: number;
    }[];
}
