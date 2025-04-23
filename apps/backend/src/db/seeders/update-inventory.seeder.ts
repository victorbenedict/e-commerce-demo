import { Seeder } from '@jorgebodega/typeorm-seeding';
import { DataSource } from 'typeorm';
import { Inventory } from 'src/inventory/entities/inventory.entity';

export default class InventorySeeder extends Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const inventoryRepo = dataSource.getRepository(Inventory);
    const inventories = await inventoryRepo.find();

    for (const item of inventories) {
      if (item.quantity === 0) {
        item.quantity = Math.floor(Math.random() * 100) + 1;
      }
    }

    await inventoryRepo.save(inventories);
  }
}
