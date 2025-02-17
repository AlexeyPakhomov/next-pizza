import { Container, Filters, Title, TopBar } from '@/components/shared';
import { ProductsGroupList } from '@/components/shared/products-group-list';

export default function Home() {
  return (
    <>
      <Container>
        <Title text="Все пиццы" size="lg" className="font-bold mb-5" />
      </Container>

      <TopBar />

      <Container>
        <div className="flex gap-[60px] py-5">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex flex-col gap-16">
            <ProductsGroupList
              title={'Пиццы'}
              items={[
                {
                  id: 1,
                  name: 'Кола-барбекю',
                  price: 670,
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                  items: [{ price: 670 }],
                },
                {
                  id: 2,
                  name: 'Кола-барбекю',
                  price: 670,
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                  items: [{ price: 670 }],
                },
                {
                  id: 3,
                  name: 'Кола-барбекю',
                  price: 670,
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                  items: [{ price: 670 }],
                },
                {
                  id: 4,
                  name: 'Кола-барбекю',
                  price: 670,
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                  items: [{ price: 670 }],
                },
                {
                  id: 5,
                  name: 'Кола-барбекю',
                  price: 670,
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                  items: [{ price: 670 }],
                },
                {
                  id: 6,
                  name: 'Кола-барбекю',
                  price: 670,
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                  items: [{ price: 670 }],
                },
              ]}
              categoryId={1}
            />
            <ProductsGroupList
              title={'Комбо'}
              items={[
                {
                  id: 1,
                  name: 'Кола-барбекю',
                  price: 670,
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                  items: [{ price: 670 }],
                },
                {
                  id: 2,
                  name: 'Кола-барбекю',
                  price: 670,
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                  items: [{ price: 670 }],
                },
                {
                  id: 3,
                  name: 'Кола-барбекю',
                  price: 670,
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                  items: [{ price: 670 }],
                },
                {
                  id: 4,
                  name: 'Кола-барбекю',
                  price: 670,
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                  items: [{ price: 670 }],
                },
                {
                  id: 5,
                  name: 'Кола-барбекю',
                  price: 670,
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                  items: [{ price: 670 }],
                },
                {
                  id: 6,
                  name: 'Кола-барбекю',
                  price: 670,
                  imageUrl:
                    'https://media.dodostatic.net/image/r:584x584/11ef9050501f3fa690a64053f5f07626.avif',
                  items: [{ price: 670 }],
                },
              ]}
              categoryId={2}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
