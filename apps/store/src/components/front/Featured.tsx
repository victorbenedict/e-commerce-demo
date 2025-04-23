import { Card, CardContent } from '@repo/ui/components/base/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@repo/ui/components/base/carousel';

type TProduct = {
  id: string;
  sellerId: string;
  name: string;
  sku: string;
};

export default async function Featured() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/featured-product/complete`);
  if (!res.ok) {
    console.error(`Failed to fetch featured products: ${res.statusText}`);
    return <div>Failed to load products.</div>;
  }
  const parsedResponse = await res.json();
  const products: TProduct[] = parsedResponse.data || [];

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
          {products.map((item, index: number) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
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
