import { Controller, Post, Body } from '@nestjs/common';
import { PrimeCheckerService } from '../services/prime-checker.service';
import { PrimeCheckerDto } from '../dto/prime-checker.dto';

@Controller('primecheck')
export class PrimeCheckerController {
  constructor(private readonly primeCheckerService: PrimeCheckerService) {}

  @Post()
  check(@Body() primeCheckerDto: PrimeCheckerDto) {
    return this.primeCheckerService.check(primeCheckerDto);
  }
}
