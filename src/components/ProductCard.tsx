import '../styles/components/productCard.css';
import { IoPersonSharp, IoPeopleSharp } from 'react-icons/io5';

interface IProductCardProps {
  productName: string,
  description: string,
  imageUrl: string,
  price: number,
  availability: boolean,
  priceForTwo: number,
  productType: string
  show?: boolean
}

const ProductCard: React.FC<IProductCardProps> = ({
  productName,
  description,
  imageUrl,
  price,
  availability,
  priceForTwo,
  productType,
  show
}) => {
  return (
    <div className='card' style={{ display: availability && show ? 'flex' : 'none' }}>
      <div className="img-container">
        <img className='img' src={imageUrl} alt={productName} />
      </div>
      <div className="product-info">
        <p className='label'>{productName}</p>
        <p className="description">
          {description}
        </p>
        <div className="price-div">
          <div style={{ display: (productType !== 'Principais') || (productType === 'Principais' && productName === 'Paella nordestina') ? 'none' : 'flex' }}>
            <IoPersonSharp style={{ fill: '#00A284' }} />
          </div>

          <p className="price">
            R${price}
          </p>
          <div style={{ display: (productType !== 'Principais') || (productType === 'Principais' && productName === 'Paella nordestina') ? 'none' : 'flex' }}>
            <IoPeopleSharp style={{ fill: '#00A284' }} />
          </div>

          <p style={{ display: (productType !== 'Principais') || (productType === 'Principais' && productName === 'Paella nordestina')  ? 'none' : 'flex' }} className="price">R${priceForTwo}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;