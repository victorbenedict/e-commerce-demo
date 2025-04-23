import { IsNotEmpty } from 'class-validator';

export class CreateFeaturedProductDto {
  @IsNotEmpty({ message: 'Product ID is required.' })
  productId: string;

  @IsNotEmpty({ message: 'Seller ID is required.' })
  sellerId: string;
  s;
}
