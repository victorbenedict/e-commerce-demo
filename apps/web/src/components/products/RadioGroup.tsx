import { Label } from '@repo/ui/components/base/label';
import {
  RadioGroup as RadioGroupContainer,
  RadioGroupItem,
} from '@repo/ui/components/base/radio-group';

export type TRadioGroupOptions = {
  id: string;
  label: string;
  value: string;
};

export default function RadioGroup({
  className,
  defaultValueIndex = 0,
  title,
  options,
}: {
  className?: string;
  defaultValueIndex?: number;
  title?: string;
  options: TRadioGroupOptions[];
}) {
  return (
    <RadioGroupContainer defaultValue={options[defaultValueIndex]?.value} className={className}>
      {title && <Label>{title}</Label>}
      {options.map((option, index) => {
        return (
          <div key={index} className="flex items-center space-x-2">
            <RadioGroupItem value={option.value} id={option.id} className="hover:cursor-pointer" />
            <Label htmlFor={option.id} className="hover:cursor-pointer">
              {option.label}
            </Label>
          </div>
        );
      })}
    </RadioGroupContainer>
  );
}
