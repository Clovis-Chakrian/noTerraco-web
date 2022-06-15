import '../styles/components/extraPortionCard.css';

const PetsCard = () => {
  return(
    <div className="extra-portion-card">
      <div className="pets-content">
        <p className="label">Nome</p>
        <p className="description">Descrição</p>
      </div>

      <p className="price">Preço</p>
    </div>
  );
};

export default PetsCard;