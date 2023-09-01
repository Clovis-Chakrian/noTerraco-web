"use client";
import styles from './menuContent.module.css';
import dynamic from 'next/dynamic';
import {
  MenuHeader,
  DisheCard,
  Footer
} from "@/components";
import { io } from 'socket.io-client';
import { IMenuContent, IProduct } from '@/types';
import { useState } from 'react';

const MainDisheCard = dynamic(() => import('@/components').then((components) => components.MainDisheCard));
const WineCard = dynamic(() => import('@/components').then((components) => components.WineCard));
const ExtraPortionCard = dynamic(() => import('@/components').then((components) => components.ExtraPortionCard));

const socket = io('http://192.168.0.49:3333/');
const MenuContent: React.FC<IMenuContent> = ({ dishes }) => {
  const [updatedDishes, setUpdatedDishes] = useState(dishes);
  socket.once('update', async () => {
    const response = await fetch('http://192.168.0.49:3333/products');
    const products: IProduct[] = await response.json();

    setUpdatedDishes(products);
    setFilteredProducts(products.filter(dishe => dishe.type.includes(selectedType)))
  });

  const [selectedType, setSelectedType] = useState('Entradinhas');
  const [filteredProducts, setFilteredProducts] = useState(updatedDishes.filter(dishe => dishe.type.includes(selectedType)));
  // drinks: ['Sem álcool', 'Cervejas', 'Whiskies', 'Drinks da casa', 'Outras bebidas'],
  function filterProducts(type: string) {
    setFilteredProducts(updatedDishes.filter(dishe => dishe.type.includes(type)))
  }

  function renderProducts(type: string, subtype?: string) {
    switch (type) {
      case 'Entradinhas':
        return (
          <>
            <section className={styles.menuSection}>
              <header className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>Entradinhas</h3>
              </header>
              {
                filteredProducts.map(dishe => {
                  if (dishe.availability) {
                    return <DisheCard
                      key={dishe.id}
                      description={dishe.description ? dishe.description : '.'}
                      imageUrl={dishe.imageUrl ? dishe.imageUrl : 'https://ik.imagekit.io/noterraco/pratos/tornedor_caboclo_sonhador_1'}
                      name={dishe.name}
                      price={dishe.price}
                    />
                  } else {
                    return <></>
                  }
                })
              }
            </section>
          </>
        );

      case 'Saladas, vegetarianos & veganos':
        return (
          <>
            <section className={styles.menuSection}>
              <header className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>Saladas, vegetarianos & veganos</h3>
              </header>

              {
                filteredProducts.map(dishe => {
                  if (dishe.availability) {
                    return <DisheCard
                      key={dishe.id}
                      description={dishe.description ? dishe.description : '.'}
                      imageUrl={dishe.imageUrl ? dishe.imageUrl : 'https://ik.imagekit.io/noterraco/pratos/tornedor_caboclo_sonhador_1'}
                      name={dishe.name}
                      price={dishe.price}
                    />
                  } else {
                    return <></>
                  }
                })
              }
            </section>
          </>
        );

      case 'Principais':
        return (
          <>
            <section className={styles.menuSection}>
              <header className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>Especial do fim de semana</h3>
              </header>

              {
                filteredProducts.map(dishe => {
                  if (dishe.availability && dishe.subtype === 'Especial') {
                    return <DisheCard
                      key={dishe.id}
                      description={dishe.description ? dishe.description : '.'}
                      imageUrl={dishe.imageUrl ? dishe.imageUrl : 'https://ik.imagekit.io/noterraco/pratos/tornedor_caboclo_sonhador_1'}
                      name={dishe.name}
                      price={dishe.price}
                    />
                  } else {
                    return <></>
                  }
                })
              }
            </section>

            <section className={styles.menuSection}>
              <header className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>Executivo</h3>
              </header>

              {
                filteredProducts.map(dishe => {
                  if (dishe.availability && dishe.subtype === 'Executivo') {
                    return <DisheCard
                      key={dishe.id}
                      description={dishe.description ? dishe.description : '.'}
                      imageUrl={dishe.imageUrl ? dishe.imageUrl : 'https://ik.imagekit.io/noterraco/pratos/tornedor_caboclo_sonhador_1'}
                      name={dishe.name}
                      price={dishe.price}
                    />
                  } else {
                    return <></>
                  }
                })
              }
            </section>

            <section className={styles.menuSection}>
              <header className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>Apenas para dois</h3>
              </header>

              {
                filteredProducts.map(dishe => {
                  if (dishe.availability && dishe.subtype === 'Apenas para dois') {
                    return <DisheCard
                      key={dishe.id}
                      description={dishe.description ? dishe.description : '.'}
                      imageUrl={dishe.imageUrl ? dishe.imageUrl : 'https://ik.imagekit.io/noterraco/pratos/tornedor_caboclo_sonhador_1'}
                      name={dishe.name}
                      price={dishe.price}
                    />
                  } else {
                    return <></>
                  }
                })
              }
            </section>

            <section className={styles.menuSection}>
              <header className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>Outros</h3>
              </header>

              {
                filteredProducts.map(dishe => {
                  if (dishe.availability && dishe.subtype === 'Outros') {
                    return <MainDisheCard
                      key={dishe.id}
                      description={dishe.description ? dishe.description : '.'}
                      imageUrl={dishe.imageUrl ? dishe.imageUrl : 'https://ik.imagekit.io/noterraco/pratos/tornedor_caboclo_sonhador_1'}
                      name={dishe.name}
                      price={dishe.price}
                      priceForTwo={dishe.priceForTwo ? dishe.priceForTwo : '00'}
                    />
                  } else {
                    return <></>
                  }
                })
              }
            </section>
          </>
        );

      case 'Bebidas':
        return (
          <>
            <section className={styles.menuSection}>
              <header className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>Sem álcool</h3>
              </header>

              {
                filteredProducts.map(dishe => {
                  if (dishe.availability && dishe.subtype === 'Sem álcool') {
                    return <DisheCard
                      key={dishe.id}
                      description={dishe.description ? dishe.description : '.'}
                      imageUrl={dishe.imageUrl ? dishe.imageUrl : 'https://ik.imagekit.io/noterraco/pratos/tornedor_caboclo_sonhador_1'}
                      name={dishe.name}
                      price={dishe.price}
                    />
                  } else {
                    return <></>
                  }
                })
              }
            </section>

            <section className={styles.menuSection}>
              <header className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>Drinks da casa</h3>
              </header>

              {
                filteredProducts.map(dishe => {
                  if (dishe.availability && dishe.subtype === 'Drinks da casa') {
                    return <DisheCard
                      key={dishe.id}
                      description={dishe.description ? dishe.description : '.'}
                      imageUrl={dishe.imageUrl ? dishe.imageUrl : 'https://ik.imagekit.io/noterraco/pratos/tornedor_caboclo_sonhador_1'}
                      name={dishe.name}
                      price={dishe.price}
                    />
                  } else {
                    return <></>
                  }
                })
              }
            </section>

            <section className={styles.menuSection}>
              <header className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>Cervejas</h3>
              </header>

              {
                filteredProducts.map(dishe => {
                  if (dishe.availability && dishe.subtype === 'Cervejas') {
                    return <DisheCard
                      key={dishe.id}
                      description={dishe.description ? dishe.description : '.'}
                      imageUrl={dishe.imageUrl ? dishe.imageUrl : 'https://ik.imagekit.io/noterraco/pratos/tornedor_caboclo_sonhador_1'}
                      name={dishe.name}
                      price={dishe.price}
                    />
                  } else {
                    return <></>
                  }
                })
              }
            </section>

            <section className={styles.menuSection}>
              <header className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>Whiskies</h3>
              </header>

              {
                filteredProducts.map(dishe => {
                  if (dishe.availability && dishe.subtype === 'Whiskies') {
                    return <DisheCard
                      key={dishe.id}
                      description={dishe.description ? dishe.description : '.'}
                      imageUrl={dishe.imageUrl ? dishe.imageUrl : 'https://ik.imagekit.io/noterraco/pratos/tornedor_caboclo_sonhador_1'}
                      name={dishe.name}
                      price={dishe.price}
                    />
                  } else {
                    return <></>
                  }
                })
              }
            </section>

            <section className={styles.menuSection}>
              <header className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>Outras bebidas</h3>
              </header>

              {
                filteredProducts.map(dishe => {
                  if (dishe.availability && dishe.subtype === 'Outras bebidas') {
                    return <MainDisheCard
                      key={dishe.id}
                      description={dishe.description ? dishe.description : '.'}
                      imageUrl={dishe.imageUrl ? dishe.imageUrl : 'https://ik.imagekit.io/noterraco/pratos/tornedor_caboclo_sonhador_1'}
                      name={dishe.name}
                      price={dishe.price}
                      priceForTwo={dishe.priceForTwo ? dishe.priceForTwo : '00'}
                    />
                  } else {
                    return <></>
                  }
                })
              }
            </section>
          </>
        );

      case 'Sobremesas':
        return (
          <>
            <section className={styles.menuSection}>
              <header className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>Sobremesas</h3>
              </header>
              {
                filteredProducts.map(dishe => {
                  if (dishe.availability) {
                    return <DisheCard
                      key={dishe.id}
                      description={dishe.description ? dishe.description : '.'}
                      imageUrl={dishe.imageUrl ? dishe.imageUrl : 'https://ik.imagekit.io/noterraco/pratos/tornedor_caboclo_sonhador_1'}
                      name={dishe.name}
                      price={dishe.price}
                    />
                  } else {
                    return <></>
                  }
                })
              }
            </section>
          </>
        );

      case 'Porções extras':
        return (
          <>
            <section className={styles.menuSection}>
              <header className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>Porções extras</h3>
              </header>
              {
                filteredProducts.map(dishe => {
                  if (dishe.availability) {
                    return <ExtraPortionCard
                      key={dishe.id}
                      name={dishe.name}
                      price={dishe.price}
                    />
                  } else {
                    return <></>
                  }
                })
              }
            </section>
          </>
        );
        break

      case 'Pets':
        return (
          <>
            <section className={styles.menuSection}>
              <header className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>Pets</h3>
              </header>
              {
                filteredProducts.map(dishe => {
                  if (dishe.availability) {
                    return <DisheCard
                      key={dishe.id}
                      description={dishe.description ? dishe.description : '.'}
                      imageUrl={dishe.imageUrl ? dishe.imageUrl : 'https://ik.imagekit.io/noterraco/pratos/tornedor_caboclo_sonhador_1'}
                      name={dishe.name}
                      price={dishe.price}
                    />
                  } else {
                    return <></>
                  }
                })
              }
            </section>
          </>
        );
        break

      case 'Vinhos':
        return (
          <>
            <section className={styles.menuSection}>
              <header className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>Argentina</h3>
              </header>

              {
                filteredProducts.map(dishe => {
                  if (dishe.availability && dishe.subtype === 'Argentina') {
                    return <WineCard
                      key={dishe.id}
                      imageUrl={dishe.imageUrl ? dishe.imageUrl : 'https://ik.imagekit.io/noterraco/pratos/tornedor_caboclo_sonhador_1'}
                      name={dishe.name}
                      price={dishe.price}
                      priceForTwo={dishe.priceForTwo ? dishe.priceForTwo : '00'}
                    />
                  } else {
                    return <></>
                  }
                })
              }
            </section>

            <section className={styles.menuSection}>
              <header className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>Chile</h3>
              </header>

              {
                filteredProducts.map(dishe => {
                  if (dishe.availability && dishe.subtype === 'Chile') {
                    return <WineCard
                      key={dishe.id}
                      imageUrl={dishe.imageUrl ? dishe.imageUrl : 'https://ik.imagekit.io/noterraco/pratos/tornedor_caboclo_sonhador_1'}
                      name={dishe.name}
                      price={dishe.price}
                      priceForTwo={dishe.priceForTwo ? dishe.priceForTwo : '00'}
                    />
                  } else {
                    return <></>
                  }
                })
              }
            </section>

            <section className={styles.menuSection}>
              <header className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>Itália</h3>
              </header>

              {
                filteredProducts.map(dishe => {
                  if (dishe.availability && dishe.subtype === 'Itália') {
                    return <WineCard
                      key={dishe.id}
                      imageUrl={dishe.imageUrl ? dishe.imageUrl : 'https://ik.imagekit.io/noterraco/pratos/tornedor_caboclo_sonhador_1'}
                      name={dishe.name}
                      price={dishe.price}
                      priceForTwo={dishe.priceForTwo ? dishe.priceForTwo : '00'}
                    />
                  } else {
                    return <></>
                  }
                })
              }
            </section>

            <section className={styles.menuSection}>
              <header className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>Portugal</h3>
              </header>

              {
                filteredProducts.map(dishe => {
                  if (dishe.availability && dishe.subtype === 'Portugal') {
                    return <WineCard
                      key={dishe.id}
                      imageUrl={dishe.imageUrl ? dishe.imageUrl : 'https://ik.imagekit.io/noterraco/pratos/tornedor_caboclo_sonhador_1'}
                      name={dishe.name}
                      price={dishe.price}
                      priceForTwo={dishe.priceForTwo ? dishe.priceForTwo : '00'}
                    />
                  } else {
                    return <></>
                  }
                })
              }
            </section>
          </>
        );
        break

      default:

        break
    }
  }

  return (
    <div>
      <MenuHeader
        onChangeSelectedType={(type) => {
          setSelectedType(type)
          filterProducts(type)
        }}
        selectedType={selectedType}
      />

      <main className={styles.main}>
        {
          renderProducts(selectedType)
        }
      </main>

      <Footer />
    </div>
  );
};

export default MenuContent;