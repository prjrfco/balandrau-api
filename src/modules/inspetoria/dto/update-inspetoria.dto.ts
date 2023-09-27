import { PartialType } from '@nestjs/mapped-types';
import { CreateInspetoriaDto } from './create-inspetoria.dto';

export class UpdateInspetoriaDto extends PartialType(CreateInspetoriaDto) {}
