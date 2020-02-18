import { Test, TestingModule } from '@nestjs/testing';
import { ImgController } from './img.controller';

describe('Img Controller', () => {
  let controller: ImgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImgController],
    }).compile();

    controller = module.get<ImgController>(ImgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
