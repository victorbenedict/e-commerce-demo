import { Seeder } from '@jorgebodega/typeorm-seeding';
import { FeaturedProduct } from 'src/featured-product/entities/featured-product.entity';
import { Product } from 'src/product/entities/product.entity'; // adjust path if needed
import { DataSource } from 'typeorm';

export default class FeaturedProductsSeeder extends Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const featuredRepo = dataSource.getRepository(FeaturedProduct);
    const count = await featuredRepo.count();

    if (count > 0) return;

    const products = await dataSource.getRepository(Product).find();

    const featuredProducts = products.map((product) => ({
      productId: product.id,
      sellerId: product.sellerId,
    }));

    await featuredRepo.insert(featuredProducts);
  }
}
