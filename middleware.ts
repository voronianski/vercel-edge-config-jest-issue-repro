import { get } from '@vercel/edge-config';

export async function middleware() {
  const ukLotusTestPath = (await get('uk_lotus_test_path')) as string;
  console.log(ukLotusTestPath);
}

export const config = {
  matcher: [
    '/((?!api|_next|favicon.ico|vercel.svg).*)'
  ]
};