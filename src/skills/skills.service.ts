import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './entities/skill.entity';

@Injectable()
export class SkillsService {

  constructor(
    @InjectRepository(Skill)
    private skillRepository: Repository<Skill>,
  ) {}

  create(createSkillDto: CreateSkillDto) {
    return this.skillRepository.save({
      firstName: createSkillDto.name,
      isActive: createSkillDto.isActive
    })
  }

  findAll(): Promise<Skill[]> {
    return this.skillRepository.find();
  }

  findOne(id: number):Promise<Skill | null> {
    return this.skillRepository.findOneBy({id,isActive:true});
  }

  update(id: number, updateSkillDto: UpdateSkillDto) {
    return this.skillRepository.update({
      id
    },{
        firstName:updateSkillDto.name,
        isActive:updateSkillDto.isActive
    });
  }

  remove(id: number): Promise<DeleteResult> {
    return this.skillRepository.delete(id);
  }
}
