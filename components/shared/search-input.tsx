'use client';
import { useClickAway, useDebounce } from 'react-use';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { Api } from '@/services/api-client';
import { Product } from '@prisma/client';

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const ref = useRef(null);
  const [focused, setFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);

  useClickAway(ref, () => {
    clearSearch();
  });

  useDebounce(
    () => {
      Api.products.search(searchQuery).then((products) => setProducts(products));
    },
    100,
    [searchQuery],
  );

  function clearSearch() {
    setFocused(false);
    setSearchQuery('');
    setProducts([]);
  }

  return (
    <>
      {focused && <div className="fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30"></div>}
      <div className={cn('flex flex-1 relative h-11 z-30', className)} ref={ref}>
        <Search
          size={20}
          className="absolute top-1/2 translate-y-[-50%] left-3   text-gray-400"></Search>
        <input
          type="text"
          placeholder="Найти пиццу..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          className="w-full pl-11 rounded-2xl outline-none bg-gray-100  "
        />

        {products.length > 0 && (
          <div
            className={cn(
              'absolute w-full bg-white rounded-xl top-14 py-2 shadow-md transition-all duration-200 invisible opacity-0 z-30',
              focused && 'visible opacity-100 top-12',
            )}>
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="flex items-center gap-3 px-3 py-2 w-full hover:bg-primary/10">
                <img src={product.imageUrl} alt={product.name} className="rounded-sm w-8 h-8" />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
