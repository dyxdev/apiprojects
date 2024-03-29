import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
} from "typeorm"
import { Skill } from "../../skills/entities/skill.entity"

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name:string

    @Column()
    body:string

    @ManyToMany(() => Skill,{
        cascade:true
    })
    @JoinTable()
    skills: Skill[]
}