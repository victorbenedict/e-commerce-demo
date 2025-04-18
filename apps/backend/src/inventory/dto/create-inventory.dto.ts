import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateInventoryDto {
  @IsNotEmpty({ message: 'Seller ID is required.' })
  sellerId: string;

  @IsNotEmpty({ message: 'Product ID is required.' })
  productId: string;

  @IsOptional()
  @IsNumber()
  quantity?: number;
}
