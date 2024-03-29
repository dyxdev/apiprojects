import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Skill {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstName: string;

    @Column({ default: true })
    isActive: boolean;
}
