import { IExtraPortion } from '@/types';
import styles from './extraPortionCard.module.css';

const ExtraPortionCard: React.FC<IExtraPortion> = ({
  name,
  price
}) => {
  return (
    <div className={styles.extraPortionCardContainer}>
      <p className="productTitle">{name}</p>
      <p className="productPrice">R${price}</p>
    </div>
  );
};

export default ExtraPortionCard;