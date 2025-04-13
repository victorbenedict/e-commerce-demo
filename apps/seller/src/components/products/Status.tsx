import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/components/base/card';
import RadioGroup, { TRadioGroupOptions } from './RadioGroup';

const statusOptions: TRadioGroupOptions[] = [
  { id: 'statusOptions1', value: 'disabled', label: 'Disabled' },
  { id: 'statusOptions2', value: 'enabled', label: 'Enabled' },
];

const visibilityOptions: TRadioGroupOptions[] = [
  { id: 'visibilityOptions1', value: 'not visible', label: 'Not visible' },
  { id: 'visibilityOptions2', value: 'visible', label: 'Visible' },
];

export default function Status() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Status</CardTitle>
      </CardHeader>
      <CardContent className="grid divide-y gap-4">
        <RadioGroup title="Status" options={statusOptions} className="pb-4" />
        <RadioGroup title="Visibility" options={visibilityOptions} />
      </CardContent>
    </Card>
  );
}
