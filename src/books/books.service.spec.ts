import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from 'src/books/books.service';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksService],
    }).compile();

    service = module.get<BooksService>(BooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // it('findByAll success.', async () => {
  //   // ==== expected ==== //
  //   const expected = [
  //     {
  //       id: 1,
  //       title: 'Book 1',
  //       author: 'Author 1',
  //       isbn: '978-1234567890',
  //     },
  //     {
  //       id: 2,
  //       title: 'Book 2',
  //       author: 'Author 2',
  //       isbn: '978-0987654321',
  //     },
  //   ];

  //   // ==== exec ==== //
  //   const result = await service.findAll();

  //   // ==== assert ==== //
  //   expect(result).toBe(expected);
  // });
});
