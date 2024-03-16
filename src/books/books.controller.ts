import { Controller, Get, Post, Body } from '@nestjs/common';
import { Book } from '@prisma/client';
import { BooksService } from 'src/books/books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async findAll(): Promise<Book[] | null> {
    return this.booksService.findAll();
  }

  @Post()
  async craete(
    @Body() book: { title: string; author: string; isbn: string },
  ): Promise<Book> {
    const { title, author, isbn } = book;
    return this.booksService.create({
      title,
      author,
      isbn,
    });
  }
}
