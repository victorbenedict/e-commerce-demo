import { Test, TestingModule } from '@nestjs/testing';
import { FeaturedProductController } from './featured-product.controller';
import { FeaturedProductService } from './featured-product.service';

describe('FeaturedProductController', () => {
  let controller: FeaturedProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeaturedProductController],
      providers: [FeaturedProductService],
    }).compile();

    controller = module.get<FeaturedProductController>(FeaturedProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
