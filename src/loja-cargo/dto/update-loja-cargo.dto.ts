import { PartialType } from '@nestjs/mapped-types';
import { CreateLojaCargoDto } from './create-loja-cargo.dto';

export class UpdateLojaCargoDto extends PartialType(CreateLojaCargoDto) {}
