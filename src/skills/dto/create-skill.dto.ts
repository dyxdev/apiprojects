import { ApiProperty } from '@nestjs/swagger';
import { IsString, isBoolean } from 'class-validator';

export class CreateSkillDto {
    @ApiProperty({
        name:"name",
        description: "The name of skill"
    })
    @IsString()
    name:string;

    @ApiProperty({
        name:"isActive",
        description: "The skill is active for select"
    })
    isActive: boolean;
}
