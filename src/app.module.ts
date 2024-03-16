import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { BooksModule } from 'src/books/books.module';

@Module({
  imports: [BooksModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
