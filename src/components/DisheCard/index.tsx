import styles from './disheCard.module.css';
import Image from 'next/image';
import { IDisheCard } from '@/types';

const DisheCard: React.FC<IDisheCard> = ({
  description,
  imageUrl,
  name,
  price
}) => {
  return (
    <div className={styles.disheCardContainer}>
      <div className={styles.imageContainer}>
        <Image priority className={styles.image} src={imageUrl} width={130} height={130} alt={name} />

        <div className={styles.descriptionContainer}>
          <p className='productTitle'>{name}</p>

          <p className='productDescription'>{description}</p>
        </div>
      </div>

      <div className={styles.priceContainer}>
        <p className='productPrice'>R${price}</p>
      </div>
    </div>
  );
};

export default DisheCard;