import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { InventoryService } from './inventory.service';
import { Roles } from 'src/auth/decorator/role.decorator';
import { EUserRole } from 'src/constants/types';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post()
  @Roles(EUserRole.ADMIN)
  create(@Body() createInventoryDto: CreateInventoryDto) {
    return this.inventoryService.create(createInventoryDto);
  }

  @Get()
  @Roles(EUserRole.ADMIN)
  findAll() {
    return this.inventoryService.findAll();
  }

  @Get(':id')
  @Roles(EUserRole.ADMIN)
  findOne(@Param('id') id: string) {
    return this.inventoryService.findOne(id);
  }

  @Get('product/:id')
  @Roles(EUserRole.ADMIN)
  findByProductId(@Param('id') id: string) {
    return this.inventoryService.findByProductId(id);
  }

  @Get('seller/:id')
  @Roles(EUserRole.ADMIN)
  findBySellerId(@Param('id') id: string) {
    return this.inventoryService.findBySellerId(id);
  }

  @Patch(':id')
  @Roles(EUserRole.ADMIN)
  update(
    @Param('id') id: string,
    @Body() updateInventoryDto: UpdateInventoryDto,
  ) {
    return this.inventoryService.update(id, updateInventoryDto);
  }

  @Delete(':id')
  @Roles(EUserRole.ADMIN)
  remove(@Param('id') id: string) {
    return this.inventoryService.remove(id);
  }
}
