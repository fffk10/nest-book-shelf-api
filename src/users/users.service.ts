import { PrismaService } from '@/src/prisma/prisma.service';
import { User, Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(where: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({ where });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }
}
