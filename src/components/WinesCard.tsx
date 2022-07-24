import { IWine } from '../@types/products';
import { FaWineBottle, FaWineGlass } from 'react-icons/fa';
import '../styles/components/winesCard.css';

const WineCard: React.FC<IWine> = ({
  bottlePrice,
  glassPrice,
  imageUrl,
  name,
  availability,
  show,
  handleClick
}) => {
  return (
    <div className='wines-card' style={{ display: availability && show ? 'flex' : 'none' }}>
      <div className='wines-image-container' onClick={handleClick}>
        <img src={imageUrl} alt={name} className='wines-image' />
      </div>

      <div className="wine-content">
        <p className='label wine-name'>{name}</p>
        <div className='wines-price-div'>
          <FaWineBottle style={{ fill: '#00A284' }} />
          <p className='price'>R${bottlePrice}</p>
          <FaWineGlass style={{ fill: '#00A284' }} />
          <p className='price'>R${glassPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default WineCard;