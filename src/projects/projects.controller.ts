import { Controller } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Crud, CrudController } from "@nestjsx/crud";
import { Project } from './entities/project.entity';

@Crud({
  model: {
    type: Project,
  },
  query: {
    join: {
      skills: {
        eager: true,
        allow:["firstName"]
      },
    }
  }
})
@Controller('projects')
export class ProjectsController implements CrudController<Project>{
  constructor(public service: ProjectsService) {}

  
}
