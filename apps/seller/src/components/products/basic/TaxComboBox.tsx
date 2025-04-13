import { ComboBox, TComboxBoxOptions } from '../../ComboBox';

const taxes: TComboxBoxOptions[] = [
  {
    value: '',
    label: 'None',
  },
  {
    value: 'taxable',
    label: 'Taxable Goods',
  },
];

export function TaxComboBox() {
  return <ComboBox label="tax" options={taxes} />;
}
