import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminEntity } from 'src/admin/entities/admin.entity';
import { RoleRepository } from './repository/role.repository';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(RoleRepository)
        private readonly roleRepository: RoleRepository,
    ) { }
    
    /* STORE */
    async store(role: number, user: AdminEntity): Promise<any> {
        return await this.roleRepository.store(role, user);
    }
}
