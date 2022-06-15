import ImageExample from '../images/eramosQuatro.jpg';
import '../styles/components/mainDishesCard.css'

const MainDishesCard = () => {
  return (
    <div className='main-dishes-card'>
      <div className='main-dishes-image-container'>
        <img src={ImageExample} alt="imagem do prato" className='main-dishes-image' />
      </div>

      <div className='main-dishes-content'>
        <p className='label'>Nome do prato</p>
        <p className='description'>Descrição</p>
        <div className='main-dishes-price-div'>
          <p className='price'>Preço para um</p>
          <p className='price'>Preço para dois</p>
        </div>
      </div>
    </div>
  );
};

export default MainDishesCard;