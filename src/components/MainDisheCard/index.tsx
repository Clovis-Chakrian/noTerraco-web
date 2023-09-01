import styles from './mainDisheCard.module.css';
import Image from 'next/image';
import { IoPersonSharp, IoPeopleSharp } from 'react-icons/io5';
import { IMainDisheCard } from '@/types';

const MainDisheCard: React.FC<IMainDisheCard> = ({
  description,
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

          <p className='productDescription'>{description}</p>
        </div>
      </div>

      <div className={styles.priceContainer}>
        <div className='priceDiv'>
          <IoPersonSharp color={'#00A284'} />
          <p className='productPrice'>R${price}</p>
        </div>

        <div className='priceDiv'>
          <IoPeopleSharp color={'#00A284'} />
          <p className='productPrice'>R${priceForTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default MainDisheCard;