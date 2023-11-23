import { BadRequestException } from '@nestjs/common';

export const handleDBErrors = (error: any) => {
  if (error.code === 'P2002') {
    throw new BadRequestException(
      `El ${error.meta.target[0]} ya existe pruebe con otro`,
    );
  } else {
    // throw new InternalServerErrorException('Please check server logs');
    console.log(error);
    throw new BadRequestException(error.response.message);
  }
};
