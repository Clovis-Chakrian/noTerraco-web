//import { useState } from 'react';
import logo from '../images/logo.png';
import '../styles/pages/menu.css';
import ProductCard from '../components/ProductCard';
import { IoRestaurant, IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5';
import { IoIosRestaurant } from 'react-icons/io';
import { useEffect, useState } from 'react';
import api from '../services/api'
import ExtraPortionCard from '../components/ExtraPortionCard';

interface IMenu {
  id: number,
  name: string,
  type: string,
  description: string,
  imageUrl: string,
  price: number,
  availability: boolean,
  priceForTwo: number,
}

function Menu() {
  const types = ['Entradinhas', 'Saladas, Vegetarianos & Veganos', 'Principais', 'Bebidas', 'Sobremesas', 'Porções extras', "Pets"];
  const [productType, setProductType] = useState('Entradinhas');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menu, setMenu] = useState([]);

  async function loadMenu() {
    await api.get('/products', {
      params: {
        type: productType,
        name: ''
      }
    }).then(res => {
      setMenu(res.data);
      console.log(menu);
    }).catch(err => {
      console.log(err);
      alert('Houve um erro ao buscar o cardápio. Por favor recarregue a página');
    });
  };

  useEffect(() => {
    loadMenu()
  }, [productType]);

  function handleSetType(type: string) {
    setProductType(type);
    setIsOpen(false);
  };

  return (
    <div id='container'>
      <header className={isOpen ? 'open' : ''}>
        <div className='header-mobile'>
          <h1>
            <img className='logo' src={logo} alt="logo do Terraço" />
          </h1>
          <div className={`icon ${isOpen ? 'icon-open' : ''}`}>
            <IoIosRestaurant size={32} onClick={() => setIsOpen(!isOpen)} style={{ fill: '#00A284' }} />
          </div>
          <div className={`icon-x ${isOpen ? 'icon-open' : ''}`}>
            <IoRestaurant size={32} onClick={() => setIsOpen(!isOpen)} style={{ fill: '#00A284' }} />
          </div>
        </div>

        <ul className={`nav-bar ${isOpen ? 'open' : ''}`}>
          {types.map(type => {
            return (
              <li key={type} onClick={() => handleSetType(type)}>{type}</li>
            );
          })}
        </ul>
      </header>
      <div className={`content ${isOpen ? 'open' : ''} ${productType === 'Porções extras' ? 'start' : ''}`}>
        <p className='subtitle'>
          {productType}
        </p>

        {menu.map((item: IMenu) => {
          return (
            productType !== 'Porções extras'
              ?
              <ProductCard
                key={item.id}
                productName={item.name}
                imageUrl={item.imageUrl}
                description={item.description}
                price={item.price}
                priceForTwo={item.priceForTwo}
                availability={item.availability}
                productType={item.type}
              />
              :
              <ExtraPortionCard
                name={item.name}
                price={item.price}
                availability={item.availability}
              />
          )
        })}
      </div>
      <footer>
        <a target="_blank" href={'https://www.instagram.com/noterracorestaurante/'} rel="noreferrer">
          <IoLogoInstagram style={{ fill: '#00A284' }} size={36} />
        </a>
        <a className='wpp-logo' target="_blank" href={'https://api.whatsapp.com/send?phone=5581998469403&text=Olá, gostaria de fazer um pedido'} rel="noreferrer">
          <IoLogoWhatsapp style={{ fill: '#00A284' }} size={36} />
        </a>
        <a target="_blank" href={'https://www.facebook.com/noterracorestaurante/'} rel="noreferrer">
          <IoLogoFacebook style={{ fill: '#00A284' }} size={36} />
        </a>
      </footer>
    </div>
  );
};

export default Menu;