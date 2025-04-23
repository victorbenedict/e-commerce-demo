import { FeaturedProduct } from 'src/featured-product/entities/featured-product.entity';
import { Inventory } from 'src/inventory/entities/inventory.entity';
import { Product } from 'src/product/entities/product.entity';
import { UserProfile } from 'src/user-profile/entities/user-profile.entity';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [UserProfile, Product, Inventory, FeaturedProduct],
  migrations: ['dist/db/migration/*.js'],
});
