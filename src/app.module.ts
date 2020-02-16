import { Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserManagementModule } from './user-management/user-management.module';
import config from './config/keys';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI, {
      connectionName: 'users',
      retryAttempts: 3,
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectionFactory: connection => {
        // connection.plugin(require('mongoose-auto-increment'));
        return connection;
      },
    }),
    UserManagementModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: import('@nestjs/common').MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
