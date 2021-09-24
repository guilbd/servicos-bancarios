import { Test, TestingModule } from '@nestjs/testing';
import { ContaCorrenteController } from './conta-corrente.controller';
import { ContaCorrenteService } from './conta-corrente.service';

describe('ContaCorrenteController', () => {
  let controller: ContaCorrenteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContaCorrenteController],
      providers: [ContaCorrenteService],
    }).compile();

    controller = module.get<ContaCorrenteController>(ContaCorrenteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
