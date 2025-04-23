import { Card, CardContent } from '@repo/ui/components/base/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@repo/ui/components/base/carousel';

export default async function Featured() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STORE_URL}/api/getAllFeaturedProducts/`);
  const parsedResponse = await res.json();
  const products = parsedResponse.data || [];

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
          {products.map((item, index) => (
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
