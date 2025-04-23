import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { Inventory } from './entities/inventory.entity';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Inventory)
    private readonly inventoryRepository: Repository<Inventory>,
  ) {}

  async create(createInventoryDto: CreateInventoryDto) {
    const inventory = this.inventoryRepository.create(createInventoryDto);

    return await this.inventoryRepository.save(inventory);
  }

  async findAll(): Promise<Inventory[]> {
    return await this.inventoryRepository.find();
  }

  async findOne(id: string): Promise<Inventory | null> {
    return await this.inventoryRepository.findOne({ where: { id } });
  }

  async findByProductId(id: string): Promise<Inventory[] | null> {
    return await this.inventoryRepository.find({ where: { productId: id } });
  }

  async findBySellerId(id: string): Promise<Inventory[] | null> {
    return await this.inventoryRepository.find({ where: { sellerId: id } });
  }

  async update(
    id: string,
    updateInventoryDto: UpdateInventoryDto,
  ): Promise<Inventory | null> {
    await this.inventoryRepository.update({ id }, updateInventoryDto);

    return this.findOne(id);
  }

  async remove(id: string) {
    const result = await this.inventoryRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Inventory item with ID ${id} not found`);
    }
    return { message: `Inventory item with ID ${id} successfully deleted` };
  }
}
