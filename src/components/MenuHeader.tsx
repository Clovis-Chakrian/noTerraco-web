import { IoRestaurant } from 'react-icons/io5';
import logo from '../images/logo.png';
import { IoIosRestaurant } from 'react-icons/io';

interface IMenuHeader {
  setProductType: React.Dispatch<React.SetStateAction<string>>
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
}

const MenuHeader: React.FC<IMenuHeader> = ({
  setProductType,
  setIsOpen,
  isOpen
}) => {
  const types = ['Entradinhas', 'Saladas, vegetarianos & veganos', 'Principais', 'Bebidas', 'Sobremesas', 'Porções extras', "Pets"];

  return(
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
              <li key={type} onClick={() => setProductType(type)}>{type}</li>
            );
          })}
        </ul>
      </header>
  )
};

export default MenuHeader;