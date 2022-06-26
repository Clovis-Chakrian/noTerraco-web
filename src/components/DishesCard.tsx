import ImageExample from '../images/eramosQuatro.jpg';
import '../styles/components/mainDishesCard.css'
import { IDishes } from '../@types/products';

const DishesCard: React.FC<IDishes> = ({
  name,
  description,
  imageURL,
  price,
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
          <p className='price'>R${price}</p>
        </div>
      </div>
    </div>
  );
};

export default DishesCard;