import '../styles/components/productCard.css';
import exp from '../images/eramosQuatro.jpg';
import { IoPersonSharp, IoPeopleSharp } from 'react-icons/io5';

interface IProductCardProps {
  productName: string,
  description: string,
  imageUrl: string,
  price: number,
  availability: boolean,
  priceForTwo: number,
}

const ProductCard: React.FC<IProductCardProps> = ({
  productName,
  description,
  imageUrl,
  price,
  availability,
  priceForTwo,
}) => {
  return (
    <div className='card' style={{ display: availability ? 'flex' : 'none' }}>
      <div className="img-container">
        <img className='img' src={imageUrl} alt={productName} />
      </div>
      <div className="product-info">
        <p className='label'>{productName}</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat felis metus, quis elementum libero iaculis ac. Curabitur vestibulum facilisis purus. Vestibulum et volutpat mi
        </p>
        <div className="price-div">
          <div>
            <IoPersonSharp style={{ fill: '#00A284' }} />
          </div>

          <p className="price">
            R${price}
          </p>
          <div>
            <IoPeopleSharp style={{ fill: '#00A284' }} />
          </div>

          <p className="price">R${priceForTwo}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;