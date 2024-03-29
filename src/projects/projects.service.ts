import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectsService extends TypeOrmCrudService<Project>{
  
  constructor(
    @InjectRepository(Project)
    projectRepository: Repository<Project>,
  ) {
    super(projectRepository)
  }


}
