import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/components/base/card';
import RadioGroup, { TRadioGroupOptions } from './RadioGroup';
import InputContainer from '../IntputContainer';
import { Label } from '@repo/ui/components/base/label';
import { Input } from '@repo/ui/components/base/input';

//TODO: value might be a boolean
const manageStockOptions: TRadioGroupOptions[] = [
  { id: 'manageStockOptions1', value: 'no', label: 'No' },
  { id: 'manageStockOptions2', value: 'yes', label: 'Yes' },
];

const stockVisibilityOptions: TRadioGroupOptions[] = [
  { id: 'stockVisibilityOptions1', value: 'no', label: 'No' },
  { id: 'stockVisibilityOptions2', value: 'yes', label: 'Yes' },
];

export default function Status() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Status</CardTitle>
      </CardHeader>
      <CardContent className="grid divide-y gap-4">
        <RadioGroup
          title="Status"
          options={manageStockOptions}
          defaultValueIndex={1}
          className="pb-4"
        />
        <RadioGroup
          title="Visibility"
          options={stockVisibilityOptions}
          defaultValueIndex={1}
          className="pb-4"
        />
        <InputContainer>
          <Label htmlFor="quantity">Quantity</Label>
          <Input type="number" min="0" id="quantity" placeholder="Quantity" className="w-full" />
        </InputContainer>
      </CardContent>
    </Card>
  );
}
