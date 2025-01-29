import { Controller, Post, Get, Body } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  addSuperhero(@Body() createSuperheroDto: CreateSuperheroDto): any {
    const { name, superpower, humilityScore } = createSuperheroDto;
    return this.superheroesService.addSuperhero(
      name,
      superpower,
      humilityScore,
    );
  }

  @Get()
  getSuperheroes(): any {
    return this.superheroesService.getSuperheroes();
  }
}
