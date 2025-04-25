import { Button } from '@repo/ui/components/base/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/base/card';

export default function CategorySection() {
  return (
    <div className="self-stretch grid grid-cols-3 gap-4 p-4">
      <Card>
        <CardHeader>
          <CardTitle>Kids&apos; Shoes Collection</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorum ex, quae hic sit
            porro ab vel? Possimus delectus cum autem consequatur adipisci animi officiis sint id
            sapiente, rem quasi!
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button>Shop for Kids</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Women&apos;s Shoes Collection</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis deserunt
            architecto molestias asperiores consequuntur possimus voluptatem dolores sint in
            explicabo.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button>Shop for Women</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Men&apos;s Shoes Collection</CardTitle>
          <CardDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam sequi debitis officia
            sit ad ea saepe voluptate fugiat temporibus vel facilis nemo, similique maxime quam?
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button>Shop for Men</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
