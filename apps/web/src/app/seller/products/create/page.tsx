import General from '@/components/products/General';
import Inventory from '@/components/products/Inventory';
import Media from '@/components/products/Media';
import Seo from '@/components/products/Seo';
import Status from '@/components/products/Status';
import { Button } from '@repo/ui/components/base/button';
import { Separator } from '@repo/ui/components/base/separator';

export default function CreateProducts() {
  return (
    <>
      <h3 className="text-3xl font-bold">Create a new product</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 space-y-4">
          <General />
          <Media />
          <Seo />
        </div>
        <div className="col-span-1 space-y-4">
          <Status />
          <Inventory />
        </div>
      </div>
      <Separator />
      <div className="flex justify-between pb-4">
        <Button variant={'outline'}>Cancel</Button>
        <Button>Save</Button>
      </div>
    </>
  );
}
