import '../styles/pages/menu.css';
import Footer from '../components/Footer';
import MenuHeader from '../components/MenuHeader';
import { useState } from 'react';
import {
  Appetizers,
  Desserts,
  Drinks,
  ExtraPortion,
  MainDishes,
  Pets,
  Salads,
  Wines
} from '../containers/Menu';

function Home() {
  const [productType, setProductType] = useState('Entradinhas');
  const [isOpen, setIsOpen] = useState<boolean>(false);

function handleRenderProducts(product: string) {
  switch (product) {
    case "Entradinhas":
      return <Appetizers/>
    case "Saladas, vegetarianos & veganos":
      return <Salads/>
    case "Principais":
      return <MainDishes/>
    case "Bebidas":
      return <Drinks/>
    case "Sobremesas":
      return <Desserts/>
    case "Porções extras":
      return <ExtraPortion/>
    case "Pets":
      return <Pets/>
    case "Vinhos":
      return <Wines/>
    default:
      return <Appetizers/>
  }
}

  return (
    <div id='container'>
      <MenuHeader 
      setProductType={setProductType}
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      />
      <div className={`content ${isOpen ? 'open' : ''} ${productType === 'Porções extras' ? 'start' : ''}`}>
        <p className='subtitle'>
          {productType}
        </p>
          {handleRenderProducts(productType)}
      </div>
      <Footer/>     
    </div>
  );
};

export default Home;