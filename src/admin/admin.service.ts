import {  BadGatewayException, NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, map, Observable } from 'rxjs';
import { RoleService } from 'src/role/role.service';
import { CreateAdminDto } from './dto/createAdmin.dto';
import { AdminEntity } from './entities/admin.entity';
import { AdminRepository } from './repository/admin.repository';

@Injectable()
export class AdminService {

    constructor(
        @InjectRepository(AdminRepository)
        private readonly adminRepository: AdminRepository,
        private readonly roleService: RoleService,
    ) { }

    /* FIND ID */
    async findId(id: string): Promise<AdminEntity>{
        const user =  await this.adminRepository.findOne({ where: { id }, relations: ['roles'] })
        if(!user){
            throw new NotFoundException(`User with id ${id} not found`);
        }
        return user;
    }


    /* FIND ID AZURE */
    async findIdAzure(id_azure: string) {
        console.log(`id azure ${id_azure} from microservice developer`)
        const user = await this.adminRepository.findOne({ where: { id_azure }, relations: ['roles'] })
        if (user) {
            return user;
        }
        return null;
    }

    /* FIND USER EMAIL */
    async findEmail(email: string) {
        const user = await this.adminRepository.findOne({ where: { email }, relations: ['roles'] })
        if (user) {
            return user;
        }
        return null;
    }

    /* CREATE USER */
    async createUser(CreateAdminDto: CreateAdminDto) {
        try {
            const user = this.adminRepository.create(CreateAdminDto);
            await this.adminRepository.save(user);
            const role = 1;
            await this.roleService.store(role, user);
        } catch {
            throw new BadGatewayException();
        }
    }
    
    /* FIND ALL USER */
    async findAll(): Promise<any[]> {
        return await this.adminRepository.find();
    }

    /* FIND ONE USER */
    findOne(id: any): Observable<AdminEntity>{
        return from(this.adminRepository.findOne({ id })).pipe(
            map((user: AdminEntity) => {
                const { ...result } = user
                return result
            })
        )
    }
}