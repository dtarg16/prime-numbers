import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrimeCheckerModule } from './prime-checker/prime-checker.module';

@Module({
  imports: [PrimeCheckerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
