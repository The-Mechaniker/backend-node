import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { MechanikerConstant } from 'src/util/MechanikerConstant';

@Injectable()
export class UsersService {
  constructor(@InjectModel(MechanikerConstant.USER_COLLECTION_NAME) private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
