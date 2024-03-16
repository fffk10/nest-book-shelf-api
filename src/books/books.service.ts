import { Injectable } from '@nestjs/common';
import { Book, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async findById(where: Prisma.BookWhereUniqueInput): Promise<Book | null> {
    return this.prisma.book.findUnique({ where });
  }

  async findAll(): Promise<Book[] | null> {
    const result = await this.prisma.book.findMany({
      orderBy: { id: 'asc' },
    });

    return result;
  }

  async create(data: Prisma.BookCreateInput): Promise<Book> {
    return this.prisma.book.create({ data });
  }

  async update(params: {
    where: Prisma.BookWhereUniqueInput;
    data: Prisma.BookUpdateInput;
  }): Promise<Book> {
    const { data, where } = params;
    return this.prisma.book.update({ data, where });
  }

  async delete(where: Prisma.BookWhereUniqueInput) {
    return this.prisma.book.delete({ where });
  }
}
