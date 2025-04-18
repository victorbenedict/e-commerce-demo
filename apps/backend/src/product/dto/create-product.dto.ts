import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'Seller ID is required.' })
  sellerId: string;

  @IsNotEmpty({ message: 'Name is required.' })
  name: string;

  @IsNotEmpty({ message: 'SKU is required.' })
  sku: string;
}
