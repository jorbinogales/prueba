import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminRepository } from './repository/admin.repository';
import { RoleModule } from 'src/role/role.module';

@Module({
  imports: [
    RoleModule,
    TypeOrmModule.forFeature([AdminRepository]),
  ],
  providers: [AdminService],
  controllers: [AdminController]
})
export class AdminModule {}
