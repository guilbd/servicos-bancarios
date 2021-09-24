import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContaCorrenteModule } from './conta-corrente/conta-corrente.module';

@Module({
  imports: [ContaCorrenteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
