import { Seeder } from '@jorgebodega/typeorm-seeding';
import { Product } from 'src/product/entities/product.entity';
import { DataSource } from 'typeorm';

export default class ProductsSeeder extends Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const repo = dataSource.getRepository(Product);
    const count = await repo.count();

    if (count > 0) return;
    const products: Partial<Product>[] = [
      {
        sellerId: '2c58980d-fec3-4cd0-b531-fb22da315434',
        name: 'Neodymium',
        sku: 'META-NEO-001',
      },
      {
        sellerId: '2c58980d-fec3-4cd0-b531-fb22da315434',
        name: 'Dysprosium',
        sku: 'META-DYS-001',
      },
      {
        sellerId: '87a5b015-d5f1-4831-a203-3d63e2298b9c',
        name: 'Spot',
        sku: 'SPT-2025-001',
      },
      {
        sellerId: '87a5b015-d5f1-4831-a203-3d63e2298b9c',
        name: 'Stretch',
        sku: 'STR-2025-001',
      },
      {
        sellerId: '87a5b015-d5f1-4831-a203-3d63e2298b9c',
        name: 'Orbit',
        sku: 'ORB-2025-001',
      },
    ];

    await dataSource.getRepository(Product).insert(products);
  }
}
