import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContaCorrenteService } from './conta-corrente.service';
import { CreateContaCorrenteDto } from './dto/create-conta-corrente.dto';
import { UpdateContaCorrenteDto } from './dto/update-conta-corrente.dto';

@Controller('conta-corrente')
export class ContaCorrenteController {
  constructor(private readonly contaCorrenteService: ContaCorrenteService) {}

  @Post()
  create(@Body() createContaCorrenteDto: CreateContaCorrenteDto) {
    return this.contaCorrenteService.create(createContaCorrenteDto);
  }

  @Get()
  findAll() {
    return this.contaCorrenteService.findAll();
  }

  @Get(':data')
  findOne(@Param('data') data: number) {
    return this.contaCorrenteService.findOne(data);
  }

  @Patch(':cpf')
  update(
    @Param('cpf') cpf: number,
    @Body() createContaCorrenteDto: CreateContaCorrenteDto,
  ) {
    return this.contaCorrenteService.update(+cpf, createContaCorrenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contaCorrenteService.remove(+id);
  }
}
