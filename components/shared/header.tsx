import { cn } from '@/lib/utils';
import { Container } from './container';
import Image from 'next/image';

interface Props {
  classname?: string;
}

const Header: React.FC<Props> = ({ classname }) => {
  return (
    <header className={cn('border border-b', classname)}>
      <Container>
        <Image src="/logo.png" alt="logo" width={35} height={35} />
      </Container>
    </header>
  );
};

export default Header;
