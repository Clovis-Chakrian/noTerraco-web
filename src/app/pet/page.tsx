import { Header, DisheCard, Footer } from '@/components';
import { IProduct } from '@/types';
import styles from './page.module.css';

export default async function Pet() {
  const response = await fetch('https://noterracorestaurante.herokuapp.com/products');
  const menuPet: IProduct[] = (await response.json() as IProduct[]).filter(product => product.type === 'Pets');

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Header />
      </header>
      <section className={styles.content}>
        {
          menuPet.map(item => {
            return item.availability ?
              <DisheCard
                description={item.description ? item.description : ""}
                imageUrl={item.imageUrl ? item.imageUrl : ""}
                name={item.name ? item.name : ""}
                price={item.price ? item.price : ""}
                key={item.id}
              />
              :
              <></>
          })
        }
      </section>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </main>
  );
}