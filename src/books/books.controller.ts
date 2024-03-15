import { Controller, Get } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get()
  getList() {
    return [
      {
        id: 1,
        title: 'Book 1',
        author: 'Author 1',
        isbn: '978-1234567890',
        publisher: 'Publisher 1',
        publishedDate: '2022-01-01',
        description: 'Description 1',
        coverImage: 'cover1.jpg',
      },
      {
        id: 2,
        title: 'Book 2',
        author: 'Author 2',
        isbn: '978-0987654321',
        publisher: 'Publisher 2',
        publishedDate: '2021-06-15',
        description: 'Description 2',
        coverImage: 'cover2.jpg',
      },
    ];
  }
}
