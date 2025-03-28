import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { config } from './config/config';
import { AnimalModule } from './app/animal/animal.module';
import { AnimalSightingModule } from './app/animal-sighting/animal-sighting.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    MongooseModule.forRoot(config().mongodb.database.connectionString),
    AnimalModule,
    AnimalSightingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
