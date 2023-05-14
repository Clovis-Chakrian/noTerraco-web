//import { useState } from 'react';
import logo from '../images/logo.png';
import '../styles/pages/menu.css';
import ProductCard from '../components/ProductCard';
import { IoRestaurant, IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5';
import { IoIosRestaurant } from 'react-icons/io';
import { useEffect, useState } from 'react';
import api from '../services/api'
import ExtraPortionCard from '../components/ExtraPortionCard';
import { IWine } from '../@types/products';
import WineCard from '../components/WinesCard';

interface IMenu {
  id: number,
  name: string,
  type: string,
  subtype: string,
  description: string,
  imageUrl: string,
  price: number,
  availability: boolean,
  priceForTwo: number,
}

function Menu() {
  const types = ['Entradinhas', 'Saladas, vegetarianos & veganos', 'Principais', 'Bebidas', 'Sobremesas', 'Porções extras', "Pets", "Vinhos"];
  const [productType, setProductType] = useState('Entradinhas');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menu, setMenu] = useState([]);
  const [isOverlay, setIsOverlay] = useState<boolean>(false)
  const [overlayImg, setOverlayImg] = useState<string>('');

  async function loadMenu() {
    if (productType === 'Vinhos') {
      await api.get('/wines').then(res => {
        setMenu(res.data);
        console.log(menu);
      }).catch(err => {
        console.log(err);
        alert('Houve um erro ao buscar o cardápio. Por favor recarregue a página');
      })
    } else {
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
  };

  useEffect(() => {
    loadMenu()
  }, [productType]);

  function handleSetType(type: string) {
    setProductType(type);
    setIsOpen(false);
  };

  return (
    <>
      <div className="overlay" style={{ display: isOverlay ? 'flex' : 'none' }} onClick={() => setIsOverlay(false)}>
        <img src={overlayImg} alt="produto selecionado" className='overlay-image' />
        <p className='cross'>X</p>
      </div>
      <div id='container' >
        <header className={isOpen ? 'open' : ''}>
          <div className='header-mobile'>
            <h1>
              <img className='logo' src={logo} alt="logo do Terraço" />
            </h1>
            <div className={`icon ${isOpen ? 'icon-open' : ''}`}>
              <div>
                <IoIosRestaurant size={32} onClick={() => setIsOpen(!isOpen)} style={{ fill: '#00A284' }} />
                <p style={{ fontSize: 12, color: '#00A284', fontWeight: 'bold' }}>Menu</p>
              </div>
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

          {productType === 'Bebidas' ?
            <div className='drinks-div'>
              <h4>Bebidas não alcoólicas</h4>
              <div className='content margin-off'>
                {menu.map((item: IMenu) => {
                  return (
                    <ProductCard
                      handleClick={() => {
                        setIsOverlay(true);
                        setOverlayImg(item.imageUrl)
                      }}
                      key={item.id}
                      productName={item.name}
                      imageUrl={item.imageUrl}
                      description={item.description}
                      price={item.price}
                      priceForTwo={item.priceForTwo}
                      availability={item.availability}
                      productType={item.type}
                      show={item.subtype === 'Sem álcool' ? true : false}
                    />
                  )
                })}
              </div>

              <h4>Cervejas</h4>
              <div className='content margin-off'>
                {menu.map((item: IMenu) => {
                  return (
                    <ProductCard
                      handleClick={() => {
                        setIsOverlay(true);
                        setOverlayImg(item.imageUrl)
                      }}
                      key={item.id}
                      productName={item.name}
                      imageUrl={item.imageUrl}
                      description={item.description}
                      price={item.price}
                      priceForTwo={item.priceForTwo}
                      availability={item.availability}
                      productType={item.type}
                      show={item.subtype === 'Cervejas' ? true : false}
                    />
                  )
                })}
              </div>

              <h4>Whiskies</h4>
              <div className='content margin-off'>
                {menu.map((item: IMenu) => {
                  return (
                    <ProductCard
                      handleClick={() => {
                        setIsOverlay(true);
                        setOverlayImg(item.imageUrl)
                      }}
                      key={item.id}
                      productName={item.name}
                      imageUrl={item.imageUrl}
                      description={item.description}
                      price={item.price}
                      priceForTwo={item.priceForTwo}
                      availability={item.availability}
                      productType={item.type}
                      show={item.subtype === 'Whiskies' ? true : false}
                    />
                  )
                })}
              </div>

              <h4>Outras bebidas</h4>
              <div className='content margin-off'>
                {menu.map((item: IMenu) => {
                  return (
                    <ProductCard
                      handleClick={() => {
                        setIsOverlay(true);
                        setOverlayImg(item.imageUrl)
                      }}
                      key={item.id}
                      productName={item.name}
                      imageUrl={item.imageUrl}
                      description={item.description}
                      price={item.price}
                      priceForTwo={item.priceForTwo}
                      availability={item.availability}
                      productType={item.type}
                      show={item.subtype === 'Outras bebidas' ? true : false}
                    />
                  )
                })}
              </div>
            </div>
            : productType === 'Principais' ?
              <div>
                {/*<h4>{Date().includes('Sun') || Date().includes('Sat') ? 'Especial do fim de semana' : 'Executivo'}</h4>*/}



                {/*<h4>Outros pratos principais</h4>*/}
                <div className='content margin-off'>
                  <ProductCard
                        handleClick={() => {
                          setIsOverlay(true);
                          setOverlayImg("https://ik.imagekit.io/noterraco/blackrub_2MmneovFX.jpeg?updatedAt=1684023301868")
                        }}
                        key={'maes'}
                        productName={'Especial do fim de semana'}
                        imageUrl={"https://ik.imagekit.io/noterraco/blackrub_2MmneovFX.jpeg?updatedAt=1684023301868"}
                        description={"Bife de chorizo ao Black Rub na manteiga de mostarda amora e mel defumada. Acompanha maionese de batata com chimichurri, e farofa de ovos com bacon. (Serve 2 pessoas)"}
                        price={145}
                        priceForTwo={0}
                        availability={true}
                        productType={"Principais"}
                        show={true}
                      />
                    
                  {menu.map((item: IMenu) => {
                    return (
                      <ProductCard
                        handleClick={() => {
                          setIsOverlay(true);
                          setOverlayImg(item.imageUrl)
                        }}
                        key={item.id}
                        productName={item.name}
                        imageUrl={item.imageUrl}
                        description={item.description}
                        price={item.price}
                        priceForTwo={item.priceForTwo}
                        availability={item.availability}
                        productType={item.type}
                        show={item.name.includes('Especial') || item.name.includes('Executivo') ? true : false}
                      />
                    )
                  })}

                  {menu.map((item: IMenu) => {
                    console.log(item)
                    return (
                      <ProductCard
                        handleClick={() => {
                          setIsOverlay(true);
                          setOverlayImg(item.imageUrl)
                        }}
                        key={item.id}
                        productName={item.name}
                        imageUrl={item.imageUrl}
                        description={item.description}
                        price={item.price}
                        priceForTwo={item.priceForTwo}
                        availability={item.availability}
                        productType={item.type}
                        show={item.name.includes('Especial') || item.name.includes('Executivo') ? false : true}
                      />
                    )
                  })}
                </div>


              </div>
              : productType === 'Vinhos' ?
                <div className="drinks-div">
                  <h4>Chile</h4>
                  <div className="content margin-off">
                    {menu.map((item: IWine) => {
                      return (
                        <WineCard
                          key={item.id}
                          availability={item.availability}
                          bottlePrice={item.bottlePrice}
                          glassPrice={item.glassPrice}
                          imageUrl={item.imageUrl}
                          handleClick={() => {
                            setIsOverlay(true);
                            setOverlayImg(item.imageUrl)
                          }}
                          name={item.name}
                          country={item.country}
                          show={item.country === 'Chile' ? true : false}
                        />
                      )
                    })}
                  </div>
                  <h4>Itália</h4>
                  <div className="content margin-off">
                    {menu.map((item: IWine) => {
                      return (
                        <WineCard
                          handleClick={() => {
                            setIsOverlay(true);
                            setOverlayImg(item.imageUrl)
                          }}
                          key={item.id}
                          availability={item.availability}
                          bottlePrice={item.bottlePrice}
                          glassPrice={item.glassPrice}
                          imageUrl={item.imageUrl}
                          name={item.name}
                          country={item.country}
                          show={item.country === 'Itália' ? true : false}
                        />
                      )
                    })}
                  </div>
                  <h4>Portugal</h4>
                  <div className="content margin-off">
                    {menu.map((item: IWine) => {
                      return (
                        <WineCard
                          handleClick={() => {
                            setIsOverlay(true);
                            setOverlayImg(item.imageUrl)
                          }}
                          key={item.id}
                          availability={item.availability}
                          bottlePrice={item.bottlePrice}
                          glassPrice={item.glassPrice}
                          imageUrl={item.imageUrl}
                          name={item.name}
                          country={item.country}
                          show={item.country === 'Portugal' ? true : false}
                        />
                      )
                    })}
                  </div>
                </div>
                :
                <></>
          }

          {menu.map((item: IMenu) => {
            return (
              productType !== 'Porções extras' && productType !== 'Pets'
                ?
                productType === 'Bebidas' || productType === 'Principais' || productType === 'Vinhos' ?
                  <></>
                  :
                  <ProductCard
                    handleClick={() => {
                      setIsOverlay(true);
                      setOverlayImg(item.imageUrl)
                    }}
                    key={item.id}
                    productName={item.name}
                    imageUrl={item.imageUrl}
                    description={item.description}
                    price={item.price}
                    priceForTwo={item.priceForTwo}
                    availability={item.availability}
                    productType={item.type}
                    show={true}
                  />
                :
                <>
                  <div>
                    <ExtraPortionCard
                      name={item.name}
                      price={item.price}
                      availability={item.availability}
                    />
                    <p className='label' style={{ color: '#3C2665', display: productType === 'Pets' && item.availability ? 'flex' : 'none', width: 220, marginTop: 4 }}>{item.description}</p>
                  </div>
                </>
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
    </>
  );
};

export default Menu;
