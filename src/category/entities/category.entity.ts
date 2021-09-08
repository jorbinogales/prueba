
import { AdminEntity } from "src/admin/entities/admin.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('category')
export class CategoryEntity{
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ type: 'text', nullable: false })
    name: string;

    @ManyToOne(() => AdminEntity, admin => admin.id)
    @JoinColumn({ name: 'created_by' })
    created_by: AdminEntity;

    @ManyToOne(() => AdminEntity, admin => admin.id)
    @JoinColumn({ name: 'updated_by' })
    updated_by: AdminEntity;

    @ManyToOne(() => AdminEntity, admin => admin.id)
    @JoinColumn({ name: 'deleted_by' })
    deleted_by: AdminEntity;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    deleted_at: Date;

}