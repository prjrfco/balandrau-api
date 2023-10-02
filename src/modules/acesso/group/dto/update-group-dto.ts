import { IsOptional } from "class-validator";

export class UpdateGroupDto {
  @IsOptional()
  name: string;

  @IsOptional()
  role: string[];
}
