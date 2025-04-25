import { Card, CardContent } from '@repo/ui/components/base/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@repo/ui/components/base/carousel';
import Image from 'next/image';

type TProduct = {
  id: string;
  sellerId: string;
  productId: string;
  imageUrl: string;
  name: string;
  sku: string;
};

export default async function Featured() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/featured-product/complete`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    console.error(`Failed to fetch featured products: ${res.statusText}`);
    return <div>Failed to load products.</div>;
  }
  const parsedResponse = await res.json();
  const products: TProduct[] = parsedResponse ?? [];

  return (
    <div className="self-stretch p-4">
      <h3 className="text-2xl font-bold text-center">Top Products</h3>
      <Carousel
        opts={{
          loop: true,
          skipSnaps: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-1">
          {products.map((item) => (
            <CarouselItem key={item.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                    <Image
                      className="h-full w-full"
                      src={item.imageUrl}
                      alt={`${item.name} product`}
                      width={800}
                      height={800}
                    />
                    <span className="text-2xl font-semibold">{item.name}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
