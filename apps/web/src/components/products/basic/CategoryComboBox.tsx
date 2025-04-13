import { ComboBox, TComboxBoxOptions } from '../../ComboBox';

const categories: TComboxBoxOptions[] = [
  {
    value: 'brands',
    label: 'Brands',
  },
  {
    value: 'kid',
    label: 'Kid',
  },
  {
    value: 'women',
    label: 'Women',
  },
  {
    value: 'men',
    label: 'Men',
  },
];

export function CategoryComboBox() {
  return <ComboBox label="category" options={categories} />;
}
