import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Util } from './util/util';

const mongoURI = (process.env['MONGO_PROD_URL'] || 'mongodb://prod-db:9UuX0WPAmBweFR7zfDuRWJAXntoPRj65ozwh1HPnVaQmCuzwWtXbAYHKjKfBkLjDUwsKNzhU8aRyzvKw8hnPeQ%3D%3D@prod-db.mongo.cosmos.azure.com:10255/sample?ssl=true&replicaSet=globaldb');

@Module({
  imports: [MongooseModule.forRoot(mongoURI, {
    connectionName: 'users',
    retryAttempts: 3
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
