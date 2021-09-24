import { PartialType } from '@nestjs/mapped-types';
import { CreateContaCorrenteDto } from './create-conta-corrente.dto';

export class UpdateContaCorrenteDto extends PartialType(
  CreateContaCorrenteDto,
) {}
