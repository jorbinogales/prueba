
import { RoleEntity } from "src/role/entities/role.entity";
import { Column, PrimaryGeneratedColumn, UpdateDateColumn, Entity, CreateDateColumn, OneToMany } from "typeorm";

@Entity('admin')
export class AdminEntity{
    @PrimaryGeneratedColumn()
    id: string;

    @Column({type: 'varchar', length: '255', nullable: false})
    id_azure: string;
    
    @Column({ type: 'varchar', length: '255', nullable: true})
    name: string;

    @Column({ type: 'varchar', length: '255', nullable: false, unique: true})
    email: string;

    @Column({ type: 'varchar', length: '255', nullable: true})
    avatar: string;

    @OneToMany(() => RoleEntity, role => role.admin_id)
    roles: RoleEntity[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    deleted_at: Date;

}