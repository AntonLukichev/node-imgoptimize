import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImgController } from './img/img.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    ImgController
  ],
  providers: [AppService],
})
export class AppModule {}
