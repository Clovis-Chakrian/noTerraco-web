import imageExample from '../images/eramosQuatro.jpg';
import '../styles/components/winesCard.css';

const WineCard = () => {
  return (
    <div className='wines-card'>
      <div className='wines-image-container'>
        <img src={imageExample} className='wines-image' />
      </div>

      <p className='label'>nome do vinho</p>
      <div className='wines-price-div'>
        <p className='price'>Preço da garrafa</p>
        <p className='price'>Preço da taça</p>
      </div>
    </div>
  );
};

export default WineCard;