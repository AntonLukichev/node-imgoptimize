import {
  Controller,
  Get,
  Param,
  Query,
} from '@nestjs/common';
import {IImg} from './interfaces/img.interface';

@Controller('img')
export class ImgController {
  @Get(':uri')
  findOne(
    @Param('uri') uri: string,
    @Query() query: IImg
  ): string {
    console.log('query: ', query);
    return `This action returns img ${uri}
    
    ${JSON.stringify(query)}`;
  }
}
