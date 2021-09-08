import { Controller, NotFoundException } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { create } from 'domain';
import { CategoryService } from './category.service';
import { CategoryEntity } from './entities/category.entity';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    /* POST A CATEGORY MICROSERVICE [ ONLY ADMIN ] */
    @MessagePattern({ cmd: 'category_store' })
    async store(data: any): Promise<any>{
        const { createCategoryDto, user } = data;
        return await this.categoryService.store(createCategoryDto, user);
    }

    /* GET ALL CATEGORY MICROSERVICE */
    @MessagePattern({ cmd: 'category_index' })
    async index(): Promise<CategoryEntity[]>{
        return await this.categoryService.all();
    }

    /* GET A CATEGORY MICROSERVICE */
    @MessagePattern({ cmd: 'category_get' })
    async get(data: any): Promise<CategoryEntity>{
        const { id } = data
        return await this.categoryService.get(id);
    }

    /* UPDATE A CATEGORY MICROSERVICE */
    @MessagePattern({ cmd: 'category_update' })
    async update(data: any): Promise<any>{
        const { updateCategoryDto, category, user } = data
        return await this.categoryService.update(category, updateCategoryDto, user);
    }

    /* UPDATE A CATEGORY MICROSERVICE */
    @MessagePattern({ cmd: 'category_delete' })
    async delete(data: any): Promise<any>{
        const { category, user } = data
        return await this.categoryService.delete(category, user);
    }
 
}
