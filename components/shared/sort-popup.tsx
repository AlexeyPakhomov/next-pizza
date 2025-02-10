import { cn } from '@/lib/utils';
import { ArrowUpDown } from 'lucide-react';

interface Props {
  className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        'inline-flex items-center bg-gray-50 gap-1 h-[52px] rounded-2xl cursor-pointer',
        className,
      )}>
      <ArrowUpDown size={16} />
      <b>Сортировка:</b>
      <span className="text-primary">Популярное</span>
    </div>
  );
};
