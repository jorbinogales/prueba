import { BadRequestException, Logger } from "@nestjs/common";
import { AdminEntity } from "src/admin/entities/admin.entity";
import { EntityRepository, Repository } from "typeorm";
import { RoleEntity } from "../entities/role.entity";

@EntityRepository(RoleEntity)
export class RoleRepository extends Repository<RoleEntity> {

    /* store */
    async store(role: number,
        admin: AdminEntity): Promise<any> {
        try {
            const newRole = this.create({
                role: role,
                admin_id: admin,
            })
            await this.save(newRole);
            return {
                statusCode: 200,
            }
        } catch {
            throw new BadRequestException;
        }
    }
}