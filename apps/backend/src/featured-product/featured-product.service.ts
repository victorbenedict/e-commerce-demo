import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/product/entities/product.entity';
import { Repository, In } from 'typeorm';
import { CreateFeaturedProductDto } from './dto/create-featured-product.dto';
import { UpdateFeaturedProductDto } from './dto/update-featured-product.dto';
import { FeaturedProduct } from './entities/featured-product.entity';

@Injectable()
export class FeaturedProductService {
  constructor(
    @InjectRepository(FeaturedProduct)
    private readonly featuredProductRepo: Repository<FeaturedProduct>,
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}
  async create(createFeaturedProductDto: CreateFeaturedProductDto) {
    const featuredProduct = this.featuredProductRepo.create(
      createFeaturedProductDto,
    );

    return await this.featuredProductRepo.save(featuredProduct);
  }

  async findAll(): Promise<FeaturedProduct[]> {
    return await this.featuredProductRepo.find();
  }

  async findAllComplete() {
    const featureProducts = await this.findAll();
    const productIds = featureProducts.map((fp) => fp.productId);
    const matchProducts = await this.productRepo.find({
      where: { id: In(productIds) },
    });

    return featureProducts.map((fp) => {
      const products = matchProducts.find((prod) => prod.id === fp.productId);
      return {
        ...fp,
        name: products?.name,
      };
    });
  }
  async findOne(id: number): Promise<FeaturedProduct | null> {
    return await this.featuredProductRepo.findOne({ where: { id: id } });
  }

  async update(
    id: number,
    updateFeaturedProductDto: UpdateFeaturedProductDto,
  ): Promise<FeaturedProduct | null> {
    await this.featuredProductRepo.update({ id }, updateFeaturedProductDto);

    return this.findOne(id);
  }

  async remove(id: number) {
    const result = await this.featuredProductRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Featured product with ID ${id} not found`);
    }
    return { message: `Featured product with ID ${id} successfully deleted` };
  }
}
