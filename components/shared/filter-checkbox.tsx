import { Checkbox } from '../ui';

export interface FilterCheckboxProps {
  text: string;
  value: string;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  text,
  value,
  onCheckedChange,
  checked,
}) => {
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        className="w-6 h-6 rounded-[8px]"
        id={`checkbox - ${value}`}
        onCheckedChange={onCheckedChange}
        checked={checked}
      />
      <label htmlFor={`checkbox - ${value}`}>{text}</label>
    </div>
  );
};
