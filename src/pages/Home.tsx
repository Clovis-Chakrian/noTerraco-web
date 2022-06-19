import MainDishesCard from "../components/MainDishesCard";
import PetsCard from "../components/PetsCard";
import WineCard from "../components/WinesCard";
import { 
Appetizers,
Desserts,
Drinks,
ExtraPortion,
MainDishes,
Pets,
Salads,
Wines
} from "../containers/Menu";


function Home() {
  return(
    <div>
      <Appetizers/>
      <Desserts/>
      <Drinks />
      <ExtraPortion/>
      <MainDishes/>
      <Pets/>
      <Salads/>
      <Wines/>
    </div>
  );
}

export default Home;