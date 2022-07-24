import { IMainDishes } from '../@types/products';
import { IoPersonSharp, IoPeopleSharp } from 'react-icons/io5';
import '../styles/components/mainDishesCard.css'

const MainDishesCard: React.FC<IMainDishes> = ({
  description,
  imageURL,
  name,
  price,
  priceForTwo
}) => {
  return (
    <div className='main-dishes-card'>
      <div className='main-dishes-image-container'>
        <img src={imageURL} alt="imagem do prato" className='main-dishes-image' />
      </div>

      <div className='main-dishes-content'>
        <p className='label'>{name}</p>
        <p className='description'>{description}</p>
        <div className='main-dishes-price-div'>
          <IoPersonSharp style={{ fill: '#00A284' }} />
          <p className='price'>R${price}</p>
          <IoPeopleSharp style={{ fill: '#00A284' }} />
          <p className='price'>R${priceForTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default MainDishesCard;