import {  Module } from '@nestjs/common';
import { DatabaseLibraryModule } from 'libs/database/src';
import { AppController } from './app.controller';
import { CategoryModule } from './category/category.module';
import { AdminModule } from './admin/admin.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [
    DatabaseLibraryModule,
    CategoryModule,
    AdminModule,
    RoleModule
  ],
  controllers: [AppController],
})
export class AppModule {}
