import DishesCard from "../components/DishesCard";
import MainDishesCard from "../components/MainDishesCard";
import ExtraPortionCard from "../components/ExtraPortionCard";
import PetsCard from "../components/PetsCard";
import WineCard from "../components/WinesCard";
/*
const [menu, setMenu] = useState([]);
async function loadMenu() {
  await api.get('/products', {
    params: {
      type: productType,
      name: ''
    }
  }).then(res => {
    setMenu(res.data);
    console.log(menu);
  }).catch(err => {
    console.log(err);
    alert('Houve um erro ao buscar o cardápio. Por favor recarregue a página');
  });
};
*/
export const Appetizers = () => {
  return(
    <DishesCard
      description="asdgfsfgsgsdfadfawfrfbdfbsga"
      imageURL="https://ik.imagekit.io/noterraco/pratos/marco_pollo_2"
      name="Teste"
      price={39}
      type=""
    />
  );
}

export const Salads = () => {
  return(
    <DishesCard
      description="asdgfsfgsgsdfadfawfrfbdfbsga"
      imageURL="https://ik.imagekit.io/noterraco/pratos/marco_pollo_2"
      name="Teste"
      price={39}
      type=""
    />
  );
}

export const MainDishes = () => {
  return(
    <MainDishesCard
    description="asfasfasfasfasfasfasfasfasfasf"
    imageURL="https://ik.imagekit.io/noterraco/pratos/marco_pollo_2"
    name="Teste"
    price={39}
    priceForTwo={95}
    />
  )
}

export const Drinks = () => {
  return(
    <DishesCard
      description="asdgfsfgsgsdfadfawfrfbdfbsga"
      imageURL="https://ik.imagekit.io/noterraco/pratos/marco_pollo_2"
      name="Teste"
      price={39}
      type=""
    />
  );
}

export const Desserts = () => {
  return(
    <DishesCard
      description="asdgfsfgsgsdfadfawfrfbdfbsga"
      imageURL="https://ik.imagekit.io/noterraco/pratos/marco_pollo_2"
      name="Teste"
      price={39}
      type=""
    />
  );
}

export const ExtraPortion = () => {
  return(
    <ExtraPortionCard 
    name="Massa"
    price={21}
    availability={true}
    />
  );
}

export const Pets = () => {
  return(
    <PetsCard 
    description="a~slkidhfaoshipqidf"
    name="dfpiafspijfpoqjf"
    price={9}
    />
  );
}

export const Wines = () => {
  return(
    <WineCard
      bottlePrice={54}
      glassPrice={26}
      imageURL="https://ik.imagekit.io/noterraco/pratos/marco_pollo_2"
      name="Osadia"
    />
  );
}