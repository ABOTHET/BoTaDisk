import { Allow, IsEmail, IsNotEmpty, IsNumber, IsString, Max, Min, MinLength } from "class-validator";

export class CreateAccountDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  password: string;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  surname: string;
  @IsNumber()
  @IsNotEmpty()
  @Min(12)
  @Max(100)
  age: number;
}
