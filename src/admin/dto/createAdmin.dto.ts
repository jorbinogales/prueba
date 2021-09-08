import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';



export class CreateAdminDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: 'string', description: 'id_azure', default: 'swager123'})
    id_azure: string;

    @IsString()
    @ApiProperty({ type: 'string', description: 'name', default: 'swagger'})
    name: string;
    
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({ type: 'email', description: 'email', default: 'swagger@gmail.com'})
    email: string;

    @IsString()
    @ApiProperty({ type: 'string', description: 'avatar', default: 'swagger.png'})
    avatar: string;
    
}

