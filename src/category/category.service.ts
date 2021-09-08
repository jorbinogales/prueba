import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminEntity } from 'src/admin/entities/admin.entity';
import { CreateCategoryDto } from './dto/createCategory.dto';
import { UpdateCategoryDto } from './dto/updateCategory.dto';
import { CategoryEntity } from './entities/category.entity';
import { CategoryRepository } from './repository/category.repository';

@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(CategoryRepository)
        private readonly categoryRepository: CategoryRepository,
    ) {}

    /* CREATE A CATEGORY */
    async store(CreateCategoryDto: CreateCategoryDto, userData: AdminEntity): Promise<any> {
        return await this.categoryRepository.createCategory(CreateCategoryDto, userData);
    }


     /* GET A CATEGORY */
    async get(id: string): Promise<CategoryEntity>{
        return await this.check(id);
    }


     /* UPDATE A CATEGORY */
    async update(
        category: CategoryEntity,
        updateCategoryDto: UpdateCategoryDto,
        userData: AdminEntity): Promise<any> {
        return this.categoryRepository
            .updateCategory(
                category,
                updateCategoryDto,
                userData);
    }


     /* DELETE A CATEGORY*/
    async delete(
        category: CategoryEntity,
        userData: AdminEntity): Promise<CategoryEntity> {
        return this.categoryRepository.deletedCategory(
            category,
            userData);
    };


    /* GET ALL CATEOGRY */
    async all(): Promise<CategoryEntity[]> {
        return await this.categoryRepository.getAll();
    }

    /* CHECK CATEOGRY STATUS*/
    async check(id: string): Promise<CategoryEntity> {
        return await this.categoryRepository.check(id);
    }

}
