import { Injectable } from '@nestjs/common';
import { CreateContaCorrenteDto } from './dto/create-conta-corrente.dto';
import { UpdateContaCorrenteDto } from './dto/update-conta-corrente.dto';

export type Conta = {
  cpf: number;
  nome: string;
  nrConta: number;
  saldo: number;
  data: number;
};

const contas: Conta[] = [
  {
    cpf: 12345678910,
    nome: 'Gabigol',
    nrConta: 24,
    saldo: 100000,
    data: 23092021,
  },
];

@Injectable()
export class ContaCorrenteService {
  create(conta: CreateContaCorrenteDto) {
    return contas.push(conta);
  }

  findAll() {
    return contas;
  }

  findOne(data: number) {
    const contaData = contas.filter((conta) => conta.data === data);
    console.log(contaData);
    return contaData;
  }

  update(cpf: number, createContaCorrenteDto: CreateContaCorrenteDto) {
    const contaData = contas.findIndex((conta) => conta.cpf === cpf);
    const updateConta: Conta = {
      cpf,
      ...createContaCorrenteDto,
    };
    contas[contaData] = updateConta;
    return updateConta;
  }

  remove(cpf: number) {
    const index = contas.findIndex((conta) => conta.cpf === cpf);
    delete contas[index];

    return `CPF ${cpf} removido contaCorrente`;
  }
}
