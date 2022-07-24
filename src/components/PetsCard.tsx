import { IPets } from '../@types/products';
import '../styles/components/extraPortionCard.css';

const PetsCard: React.FC<IPets> = ({
  description,
  name,
  price
}) => {
  return(
    <div className="extra-portion-card">
      <div className="pets-content">
        <p className="label">{name}</p>
        <p className="description">{description}</p>
      </div>

      <p className="price">R${price}</p>
    </div>
  );
};

export default PetsCard;