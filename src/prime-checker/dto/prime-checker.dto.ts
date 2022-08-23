import { ArrayNotEmpty, IsArray, IsInt, IsNotEmpty } from 'class-validator';

export class PrimeCheckerDto {
  @IsNotEmpty()
  @ArrayNotEmpty()
  @IsArray()
  @IsInt({ each: true })
  numbers: number[];
}
