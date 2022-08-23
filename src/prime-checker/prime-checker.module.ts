import { Module } from '@nestjs/common';
import { PrimeCheckerService } from './services/prime-checker.service';
import { PrimeCheckerController } from './controllers/prime-checker.controller';

@Module({
  controllers: [PrimeCheckerController],
  providers: [PrimeCheckerService]
})
export class PrimeCheckerModule {}
