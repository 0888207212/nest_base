import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'rooms' })
export class RoomEntity  extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    roomName: string;

    @Column()
    address: string;

    @Column()
    img: string;
    
    @Column()
    price: string;

    @Column()
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}