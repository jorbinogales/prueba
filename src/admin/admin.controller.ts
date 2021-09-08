import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AdminService } from './admin.service';
import { AdminEntity } from './entities/admin.entity';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) { }
    
    @MessagePattern({ cmd: 'admin_get' })
    async login(data: any): Promise<AdminEntity>{
        const { id_azure } = data;
        return await this.adminService.findIdAzure(id_azure);
    }

    @MessagePattern({ cmd: 'admin_get_id' })
    async get(data: any) {
        const { id } = data;
        return await this.adminService.findId(id);
    }
      
    @MessagePattern({ cmd: 'admin_store' })
    async store(data: any) {
        const { createUserDto } = data;
        return await this.adminService.createUser(createUserDto);
    }

 
}