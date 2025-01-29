import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
export declare class SuperheroesController {
    private readonly superheroesService;
    constructor(superheroesService: SuperheroesService);
    addSuperhero(createSuperheroDto: CreateSuperheroDto): any;
    getSuperheroes(): any;
}
