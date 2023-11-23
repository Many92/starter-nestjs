import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(4, {
    message: 'Debe contener mínimo 4 caracteres',
  })
  username: string;
  @MinLength(6, {
    message: 'Debe contener mínimo 6 caracteres',
  })
  @MaxLength(50, {
    message: 'El maximo de caracteres es 50',
  })
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'La contraseña debe tener una Mayúscula,una minúscula y números',
  })
  password: string;
  @IsEmail()
  email: string | null;
  @IsString()
  avatar: string | null;
  @IsBoolean()
  activo: boolean | null;
  @IsArray()
  roles: string[];
}
