import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users/users.service';
import { UserSchema } from './users/schemas/user.schema';
import { MechanikerConstant } from 'src/util/MechanikerConstant';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: MechanikerConstant.USER_COLLECTION_NAME, schema: UserSchema }],
      'users',
    ),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [MongooseModule],
})
export class UserManagementModule {}
