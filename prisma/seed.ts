import { PrismaClient, Book, User } from '@prisma/client';

const prisma = new PrismaClient();
const bookData: Book[] = [
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

const userData: Omit<User, 'id'> = {
  // uuidは自動生成
  username: 'user1',
  email: 'testaddress@example.com',
  password: '$2a$10$X8Nj8DQr3avPHwl1sfuCmuTohE/KEbqkswS7p.cafEiymbn88wHHe', // testtest
};

const doSeed = async () => {
  // booksテーブルにデータを挿入
  const books = [];
  for (const book of bookData) {
    const createBooks = prisma.book.create({
      data: book,
    });
    books.push(createBooks);
  }

  // usersテーブルにデータを挿入
  await prisma.$transaction(books);
  return prisma.user.create({
    data: userData,
  });
};

const main = async () => {
  console.log(`Start seeding ...`);

  await doSeed();

  console.log(`Seeding finished.`);
};

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
