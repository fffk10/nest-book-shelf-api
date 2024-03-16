import { Module } from '@nestjs/common';
import { BooksController } from 'src/books/books.controller';
import { BooksService } from 'src/books/books.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [BooksController],
  providers: [BooksService, PrismaService],
})
export class BooksModule {}
