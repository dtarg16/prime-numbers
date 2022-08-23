import { Injectable } from '@nestjs/common';
import { PrimeCheckerDto } from '../dto/prime-checker.dto';

@Injectable()
export class PrimeCheckerService {
  check(primeCheckerDto: PrimeCheckerDto) {
    return primeCheckerDto.numbers.map((num) => ({
      number: num,
      prime: PrimeCheckerService.isPrime(num),
    }));
  }

  private static isPrime(num: number) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }
}
