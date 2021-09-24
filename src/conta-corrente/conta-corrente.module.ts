import { Module } from '@nestjs/common';
import { ContaCorrenteService } from './conta-corrente.service';
import { ContaCorrenteController } from './conta-corrente.controller';

@Module({
  controllers: [ContaCorrenteController],
  providers: [ContaCorrenteService]
})
export class ContaCorrenteModule {}
