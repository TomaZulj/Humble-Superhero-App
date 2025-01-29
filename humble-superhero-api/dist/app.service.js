"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
class AppService {
    constructor() {
        this.superheroes = [];
    }
    addSuperhero(name, superpower, humilityScore) {
        const superhero = { name, superpower, humilityScore };
        this.superheroes.push(superhero);
    }
    getSuperheroes() {
        return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
    }
}
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map