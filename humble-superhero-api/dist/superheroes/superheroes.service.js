"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperheroesService = exports.Superhero = void 0;
class Superhero {
    constructor(name, superpower, humilityScore) {
        this.name = name;
        this.superpower = superpower;
        this.humilityScore = humilityScore;
    }
}
exports.Superhero = Superhero;
class SuperheroesService {
    constructor() {
        this.superheroes = [];
    }
    addSuperhero(name, superpower, humilityScore) {
        const newSuperhero = new Superhero(name, superpower, humilityScore);
        this.superheroes.push(newSuperhero);
        return newSuperhero;
    }
    getSuperheroes() {
        return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
    }
}
exports.SuperheroesService = SuperheroesService;
//# sourceMappingURL=superheroes.service.js.map