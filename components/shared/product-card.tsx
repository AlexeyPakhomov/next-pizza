import Link from 'next/link';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({ className, id, name, price, imageUrl }) => {
  return (
    <Link href={`/product/${id}`}>
      <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px] mb-3">
        <img src={imageUrl} alt={name} className="w-[215px] h-[215px]" />
      </div>

      <Title text={name} size="sm" className="mb-1 font-bold" />

      <p className="text-sm text-gray-400 mb-4">
        Пряная говядина, пикантная пепперони, острые колбаски чоризо, соус кола-барбекю, моцарелла и
        фирменный томатный соус
      </p>

      <div className="flex justify-between items-center ">
        <span className="text-[20px]">
          {' '}
          от <b>{price} ₽</b>
        </span>

        <Button variant="secondary" className="text-base font-bold">
          <Plus size={20} className="mr-1" /> Добавить
        </Button>
      </div>
    </Link>
  );
};
