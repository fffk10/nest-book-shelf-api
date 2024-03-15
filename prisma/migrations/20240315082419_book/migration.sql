-- CreateTable
CREATE TABLE "books" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "isbn" VARCHAR(20) NOT NULL,
    "publisher" TEXT,
    "published_date" TEXT,
    "description" TEXT,
    "cover_image" TEXT,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);
