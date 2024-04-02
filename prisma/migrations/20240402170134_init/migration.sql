-- CreateTable
CREATE TABLE "user_books" (
    "id" SERIAL NOT NULL,
    "userId" UUID NOT NULL,
    "bookId" INTEGER NOT NULL,
    "acquired_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_books_pkey" PRIMARY KEY ("id")
);
