import { IWine } from '../@types/products';
import { FaWineBottle, FaWineGlass } from 'react-icons/fa';
import '../styles/components/winesCard.css';

const WineCard: React.FC<IWine> = ({
  bottlePrice,
  glassPrice,
  imageURL,
  name,
}) => {
  return (
    <div className='wines-card'>
      <div className='wines-image-container'>
        <img src={imageURL} alt={name} className='wines-image' />
      </div>

      <p className='label'>{name}</p>
      <div className='wines-price-div'>
        <FaWineBottle style={{ fill: '#00A284' }} />
        <p className='price'>R${bottlePrice}</p>
        <FaWineGlass style={{ fill: '#00A284' }} />
        <p className='price'>R${glassPrice}</p>
      </div>
    </div>
  );
};

export default WineCard;