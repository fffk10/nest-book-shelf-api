import { User } from '@prisma/client';
import { UsersService } from './users.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/:email')
  async findByEmail(@Param('email') email: string): Promise<User | null> {
    return this.usersService.findByEmail({ email: email });
  }

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return this.usersService.createUser(user);
  }
}
