/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateSuperheroDto {
  @IsString()
  name: string;

  @IsString()
  superpower: string;

  @IsInt()
  @Min(1)
  @Max(10)
  humilityScore: number;

  constructor(name: string, superpower: string, humilityScore: number) {
    this.name = name;
    this.superpower = superpower;
    this.humilityScore = humilityScore;
  }
}
