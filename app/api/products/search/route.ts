import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('query') || '';

  const products = await prisma.product.findMany({
    where: {
      //name: query, // Таким образом поиск со строгим сравнением + регистр
      name: {
        contains: query, // поиск не строгий, а включая query
        mode: 'insensitive', // не чуствителен к регистру
      },
    },
    take: 5, // Ограничиваем кол-во выводящих единиц
  });

  return NextResponse.json(products);
}
