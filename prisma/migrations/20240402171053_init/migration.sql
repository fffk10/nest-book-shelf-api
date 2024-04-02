/*
  Warnings:

  - You are about to drop the column `bookId` on the `user_books` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `user_books` table. All the data in the column will be lost.
  - Added the required column `book_id` to the `user_books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `user_books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_books" DROP COLUMN "bookId",
DROP COLUMN "userId",
ADD COLUMN     "book_id" INTEGER NOT NULL,
ADD COLUMN     "user_id" UUID NOT NULL;
