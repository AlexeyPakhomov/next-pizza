import { cn } from '@/lib/utils';
import { Container } from './container';
import Image from 'next/image';
import { Button } from '../ui';
import { ArrowRight, ShoppingBasket, User } from 'lucide-react';

interface Props {
  classname?: string;
}

export const Header: React.FC<Props> = ({ classname }) => {
  return (
    <header className={cn('border border-b mb-10', classname)}>
      <Container className="flex justify-between items-center py-8">
        {/*Левая часть */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
            <p className="text-sm text-gray-400 leading-3 ">вкусней уже некуда</p>
          </div>
        </div>
        {/*Правая часть */}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Войти
          </Button>

          <Button className="group relative">
            <p className="font-bold">520 ₽</p>
            <span className="h-full w-[1px] bg-white/30 mx-3"></span>
            <div className=" flex items-center gap-1 transition duration-500 group-hover:opacity-0">
              <ShoppingBasket size={16} />
              <p className="font-bold">3</p>
            </div>
            <ArrowRight
              size={20}
              className="absolute right-4 transition duration-500 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
            />
          </Button>
        </div>
      </Container>
    </header>
  );
};
