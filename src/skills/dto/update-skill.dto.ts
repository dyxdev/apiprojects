import { PartialType } from '@nestjs/mapped-types';
import { CreateSkillDto } from './create-skill.dto';
import { IsInt } from 'class-validator';

export class UpdateSkillDto extends PartialType(CreateSkillDto) {
    @IsInt()
    id:number
}
