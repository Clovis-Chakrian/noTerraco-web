"use client";
import styles from './header.module.css';
import Image from "next/image";
import { IoRestaurant, IoMenu } from 'react-icons/io5';
import { IoIosRestaurant } from 'react-icons/io';
import { useState } from 'react';
import Link from 'next/link';
import { IHeader } from '@/types';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={isOpen ? styles.headerOpen : styles.header}>
      <div className={isOpen ? styles.logoDivOpen : styles.logoDiv}>
        <Image src={'/logo.png'} alt="logo do restaurante No Terraço" width={133.2} height={75}/>

        <div className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
          <IoMenu size={32} color={'#006b57'} />
        </div>
      </div>

      <nav className={isOpen ? styles.navOpen : styles.nav}>
        <ul>
          <li>
            <Link className='subtitle' href={'/menu'}>
              Cardápio
            </Link>
          </li>
          <li>
            <a className='subtitle' href="/#localization">
              Contato
            </a>
          </li>
          <li>
            <a className='subtitle' href="/#aboutUs">
              Sobre nós
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const MenuHeader: React.FC<IHeader> = ({
  onChangeSelectedType,
  selectedType
}) => {
  const types = ["Entradinhas", "Saladas, vegetarianos & veganos", "Principais", "Bebidas", "Sobremesas", "Porções extras", "Pets", "Vinhos"];
  const [isOpen, setIsOpen] = useState(false);



  return (
    <header className={isOpen ? styles.headerOpenMenu : styles.header}>
      <div className={isOpen ? styles.logoDivOpen : styles.logoDivMenu}>
        <Link href={'/'}>
          <Image src={'/logo.png'} alt="logo do restaurante No Terraço" width={133.2} height={75} className={styles.logoImage}/>
        </Link>

        <div className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
          {
            isOpen ?
              <IoRestaurant size={28} color={'#006b57'} />
              :
              <IoIosRestaurant size={32} color={'#006b57'} />
          }
        </div>
      </div>

      <nav className={isOpen ? styles.navOpen : styles.nav}>
        <ul>
          {
            types.map(type => {
              return (
                <li key={type} onClick={() => {
                  onChangeSelectedType(type);
                }} className={`subtitle ${type === selectedType ? 'selectedType' : ''}`}>{type}</li>
              );
            })
          }
        </ul>
      </nav>
    </header>
  );
}

export { Header, MenuHeader };