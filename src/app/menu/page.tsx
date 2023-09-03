import { MenuContent } from '@/components';
import { IProduct } from '@/types';
import styles from './page.module.css';

export const revalidate = 10;

async function getData() {
  const res = await fetch('https://noterracorestaurante.herokuapp.com/products')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Menu() {
  //const response = await fetch('https://noterracorestaurante.herokuapp.com/products');
  const products: IProduct[] = await getData();

  return (
    <>
      <MenuContent
        dishes={products}
      />
    </>
  );
};