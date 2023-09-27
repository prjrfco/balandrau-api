import { PartialType } from '@nestjs/mapped-types';
import { CreateIrmaoDto } from './create-irmao.dto';

export class UpdateIrmaoDto extends PartialType(CreateIrmaoDto) {}
