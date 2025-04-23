import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FeaturedProductService } from './featured-product.service';
import { CreateFeaturedProductDto } from './dto/create-featured-product.dto';
import { UpdateFeaturedProductDto } from './dto/update-featured-product.dto';
import { Roles } from 'src/auth/decorator/role.decorator';
import { EUserRole } from 'src/constants/types';
import { Public } from 'src/auth/decorator/public.decorator';

@Controller('featured-product')
export class FeaturedProductController {
  constructor(
    private readonly featuredProductService: FeaturedProductService,
  ) {}

  @Post()
  @Roles(EUserRole.ADMIN)
  create(@Body() createFeaturedProductDto: CreateFeaturedProductDto) {
    return this.featuredProductService.create(createFeaturedProductDto);
  }

  @Get()
  @Public()
  findAll() {
    return this.featuredProductService.findAll();
  }

  @Get('complete')
  @Public()
  findAllComplete() {
    return this.featuredProductService.findAllComplete();
  }

  @Get(':id')
  @Public()
  findOne(@Param('id') id: string) {
    return this.featuredProductService.findOne(+id);
  }

  @Patch(':id')
  @Roles(EUserRole.ADMIN)
  update(
    @Param('id') id: string,
    @Body() updateFeaturedProductDto: UpdateFeaturedProductDto,
  ) {
    return this.featuredProductService.update(+id, updateFeaturedProductDto);
  }

  @Delete(':id')
  @Roles(EUserRole.ADMIN)
  remove(@Param('id') id: string) {
    return this.featuredProductService.remove(+id);
  }
}
