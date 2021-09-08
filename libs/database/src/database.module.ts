import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from './database.service';

const ENV = process.env.NODE_ENV;
@Module({
    imports: [
      ConfigModule.forRoot({
            envFilePath: `.env`,
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            useClass: DatabaseService,
            inject: [DatabaseService]
        })
    ],
    providers: [DatabaseService],
    exports: [DatabaseService],
})
export class DatabaseLibraryModule {}
