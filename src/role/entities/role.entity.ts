import { AdminEntity } from "src/admin/entities/admin.entity";
import { Column, PrimaryGeneratedColumn, UpdateDateColumn, Entity, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Roles } from "../model/role.model";

@Entity('role')
export class RoleEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => AdminEntity, admin => admin.id)
    @JoinColumn({ name: 'admin_id'})
    admin_id: AdminEntity;

    @Column({ type: 'enum', enum: Roles, default: 1 })
    role: Roles;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    deleted_at: Date;

}