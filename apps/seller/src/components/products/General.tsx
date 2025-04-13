import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/components/base/card';
import { Input } from '@repo/ui/components/base/input';
import { Label } from '@repo/ui/components/base/label';
import { Textarea } from '@repo/ui/components/base/textarea';
import InputContainer from '../IntputContainer';
import { CategoryComboBox } from './basic/CategoryComboBox';
import { TaxComboBox } from './basic/TaxComboBox';

export default function General() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>General</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <InputContainer>
          <Label htmlFor="name">Name</Label>
          <Input type="name" id="name" placeholder="Name" className="w-full" />
        </InputContainer>
        <div className="grid grid-cols-3 gap-4">
          <InputContainer>
            <Label htmlFor="sku">SKU</Label>
            <Input type="text" id="sku" placeholder="SKU" />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="price">Price</Label>
            <div className="flex justify-between items-center border rounded-md focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]">
              <Input
                type="number"
                id="price"
                placeholder="Price"
                className="text-right no-spinner border-none focus-visible:border-transparent focus-visible:ring-0"
              />
              <span className="text-sm text-right text-muted-foreground pr-2">USD</span>
            </div>
          </InputContainer>
          <InputContainer>
            <Label htmlFor="weight">Weight</Label>
            <div className="flex justify-between items-center border rounded-md focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]">
              <Input
                type="number"
                id="weight"
                min={0}
                placeholder="Weight"
                className="text-right no-spinner border-none focus-visible:border-transparent focus-visible:ring-0"
              />
              <span className="text-sm text-right text-muted-foreground pr-2">KG</span>
            </div>
          </InputContainer>
        </div>
        <InputContainer>
          <Label htmlFor="category">Category</Label>
          <CategoryComboBox />
        </InputContainer>

        <InputContainer>
          <Label htmlFor="tax">Tax class</Label>
          <TaxComboBox />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="productDescription">Description</Label>
          <Textarea
            id="productDescription"
            placeholder="Product description..."
            className="aspect-2/1"
          />
        </InputContainer>
      </CardContent>
    </Card>
  );
}
