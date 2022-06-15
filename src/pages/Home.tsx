import MainDishesCard from "../components/MainDishesCard";
import PetsCard from "../components/PetsCard";
import WineCard from "../components/WinesCard";


function Home() {
  return(
    <div>
      <MainDishesCard />
      <PetsCard />
      <WineCard/>
    </div>
  );
}

export default Home;