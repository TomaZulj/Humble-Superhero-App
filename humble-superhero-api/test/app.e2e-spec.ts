import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/superheroes (POST) - valid data', () => {
    return request(app.getHttpServer())
      .post('/superheroes')
      .send({ name: 'Batman', superpower: 'Intelligence', humilityScore: 8 })
      .expect(201);
  });

  it('/superheroes (POST) - invalid humilityScore', () => {
    return request(app.getHttpServer())
      .post('/superheroes')
      .send({ name: 'Batman', superpower: 'Intelligence', humilityScore: 11 })
      .expect(400);
  });
});
