import { Test, TestingModule } from '@nestjs/testing';
import { FeaturedProductService } from './featured-product.service';

describe('FeaturedProductService', () => {
  let service: FeaturedProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeaturedProductService],
    }).compile();

    service = module.get<FeaturedProductService>(FeaturedProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
