import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { Book } from '@prisma/client';
import { BooksService } from 'src/books/books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('/:id')
  async findById(@Param('id') id: string): Promise<Book | null> {
    return this.booksService.findById({ id: Number(id) });
  }

  @Get()
  async findAll(): Promise<Book[] | null> {
    return this.booksService.findAll();
  }

  @Post()
  async craete(@Body() book: Book): Promise<Book> {
    const { title, author, isbn } = book;
    return this.booksService.create({
      title,
      author,
      isbn,
    });
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() book: Book): Promise<Book> {
    const { title, author, isbn } = book;
    return this.booksService.update({
      where: { id: Number(id) },
      data: { title, author, isbn },
    });
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    this.booksService.delete({ id: Number(id) });
  }
}
