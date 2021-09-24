import { IsNotEmpty } from 'class-validator';

export class CreateContaCorrenteDto {
  @IsNotEmpty()
  cpf: number;
  nome: string;
  nrConta: number;
  saldo: number;
  data: number;
}
