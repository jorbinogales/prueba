import { AdminEntity } from "src/admin/entities/admin.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateCategoryDto } from "../dto/createCategory.dto";
import { UpdateCategoryDto } from "../dto/updateCategory.dto";
import { CategoryEntity } from "../entities/category.entity";

@EntityRepository(CategoryEntity)
export class CategoryRepository extends Repository<CategoryEntity>{
    


    /* CREATE CATEGORY DTO */
    async createCategory(createCategoryDto: CreateCategoryDto, user: AdminEntity): Promise<any> {
        const { name } = createCategoryDto;
        const category = this.create({
                name: name,
                created_by: user,
        });
        await this.save(category);
        return {
            statusCode: 200,
        };
    }
    
    /* UPDATE CATEGORY DTO */
    async updateCategory(
        category: CategoryEntity,
        updateCategoryDto: UpdateCategoryDto,
        user: AdminEntity): Promise<any> {
            const { name } = updateCategoryDto;
            category.name = name;
            category.updated_by = user;
            category.updated_at = new Date();
            this.save(category);
            return {
                statusCode: 200,
            }
    }

        
    /* DELETED CATEGORY DTO */
    async deletedCategory(category: CategoryEntity, user: AdminEntity): Promise<any> {
            category.deleted_by = user;
            category.deleted_at = new Date();
            this.save(category);
            return {
                statusCode: 200,
            }
    }


    /* Uget all category */
    async getAll(): Promise<any> {
        return await this.find({
            where: { deleted_at: null },
        });
    }

    /* CHECK A CATEGORY */
    async check(id: string): Promise<any>{
        const category = await this.findOne({
            where: {
                id: id,
                deleted_at: null,
            },
            relations: ['created_by', 'updated_by']
        });
        return category;
    }

}