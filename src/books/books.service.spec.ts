import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from 'src/books/books.service';
import { prismaMock } from 'singleton';

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

  it('findByAll success.', async () => {
    // ==== expected ==== //
    const expected = [
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

    // ==== mock ==== //
    prismaMock.book.findMany.mockResolvedValue(expected);

    // ==== assert ==== //
    await expect(service.findAll()).resolves.toEqual([
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
    ]);
  });
});
