import { MenuContent } from '@/components';
import { IProduct } from '@/types';
import styles from './page.module.css';

export const revalidate = 10;

export default async function Menu() {
  const response = await fetch('https://noterracorestaurante.herokuapp.com/products');
  const products: IProduct[] = await response.json();

  return (
    <>
      <MenuContent
        dishes={products}
      />
    </>
  );
};