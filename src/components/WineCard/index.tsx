import styles from './wineCard.module.css';
import Image from 'next/image';
import { FaWineBottle, FaWineGlass } from 'react-icons/fa';
import { IWineCard } from '@/types';

const WineCard: React.FC<IWineCard> = ({
  imageUrl,
  name,
  price,
  priceForTwo
}) => {
  return (
    <div className={styles.disheCardContainer}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={imageUrl} width={130} height={130} alt={name} />

        <div className={styles.descriptionContainer}>
          <p className='productTitle'>{name}</p>
        </div>
      </div>

      <div className={styles.priceContainer}>
        <div className='priceDiv'>
          <FaWineGlass color={'#00A284'} />
          <p className='productPrice'>R${price}</p>
        </div>

        <div className='priceDiv'>
          <FaWineBottle color={'#00A284'} />
          <p className='productPrice'>R${priceForTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default WineCard;