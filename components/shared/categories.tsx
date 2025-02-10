'use client';

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

interface Props {
  className?: string;
}
const categories = [
  { id: 1, name: 'Пиццы' },
  { id: 2, name: 'Комбо' },
  { id: 3, name: 'Закуски' },
  { id: 4, name: 'Коктейли' },
  { id: 5, name: 'Кофе' },
  { id: 6, name: 'Напитки' },
  { id: 7, name: 'Десерты' },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const activeCategoryId = useCategoryStore((state) => state.activeId);

  return (
    <div className={cn('inline-flex bg-gray-50 p-1 gap-1 rounded-2xl', className)}>
      {categories.map((category, index) => (
        <a
          key={index}
          href={`/#${category.name}`}
          className={cn(
            'flex items-center h-11 px-5 rounded-2xl font-medium cursor-pointer font-bold',
            category.id === activeCategoryId && 'bg-white text-primary shadow-md shadow-gray-200',
          )}>
          {category.name}
        </a>
      ))}
    </div>
  );
};
