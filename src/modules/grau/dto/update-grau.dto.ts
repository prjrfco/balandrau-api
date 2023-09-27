import { PartialType } from '@nestjs/mapped-types';
import { CreateGrauDto } from './create-grau.dto';

export class UpdateGrauDto extends PartialType(CreateGrauDto) {}
