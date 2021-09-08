import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRepository } from './repository/category.repository';
import { AdminModule } from 'src/admin/admin.module';

@Module({
  imports: [
    AdminModule,
    TypeOrmModule.forFeature([CategoryRepository])
  ],
  providers: [CategoryService],
  controllers: [CategoryController],
  exports: [CategoryService],
})
export class CategoryModule {}
