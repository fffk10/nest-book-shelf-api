import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  const books = [
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
    {
      id: 3,
      title: 'Book 3',
      author: 'Author 3',
      isbn: '978-5555555555',
      publisher: 'Publisher 3',
      publishedDate: '2020-12-25',
      description: 'Description 3',
      coverImage: 'cover3.jpg',
    },
  ];

  await Promise.all(
    books.map((book) => {
      return prisma.book.create({
        data: {
          title: book.title,
          author: book.author,
          isbn: book.isbn,
        },
      });
    }),
  );
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
