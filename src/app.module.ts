import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserManagementModule } from './user-management/user-management.module';
import config from './config/keys';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI, {
      connectionName: 'users',
      retryAttempts: 3,
    }),
    UserManagementModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
