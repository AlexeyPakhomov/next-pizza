import { cn } from '@/lib/utils';
import { Categories } from './categories';
import { Container } from './container';
import { SortPopup } from './sort-popup';

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('sticky top-0 bg-white shadow-lg shadow-black/5 py-5 z-10', className)}>
      <Container className="flex justify-between items-center ">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
