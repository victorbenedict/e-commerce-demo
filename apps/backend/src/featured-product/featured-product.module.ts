import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/product/entities/product.entity';
import { ProductService } from 'src/product/product.service';
import { FeaturedProduct } from './entities/featured-product.entity';
import { FeaturedProductController } from './featured-product.controller';
import { FeaturedProductService } from './featured-product.service';

@Module({
  imports: [TypeOrmModule.forFeature([FeaturedProduct, Product])],
  controllers: [FeaturedProductController],
  providers: [FeaturedProductService, ProductService],
})
export class FeaturedProductModule {}
