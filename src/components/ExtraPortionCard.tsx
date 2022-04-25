import '../styles/components/extraPortionCard.css';

interface IExtraPortionCardProps {
  name: string,
  price: number,
  availability: boolean,
}

const ExtraPortionCard: React.FC<IExtraPortionCardProps> = ({
  name,
  price,
  availability
}) => {
  return (
    <div className="extra-portion-card" style={{ display: availability ? 'flex' : 'none' }}>
      <p className='label'>
        {name}
      </p>

      <p className='price'>
        R${price}
      </p>
    </div>
  )
};

export default ExtraPortionCard;