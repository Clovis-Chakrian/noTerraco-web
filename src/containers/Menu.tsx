import DishesCard from "../components/DishesCard";
import MainDishesCard from "../components/MainDishesCard";
import ExtraPortionCard from "../components/ExtraPortionCard";
import PetsCard from "../components/PetsCard";
import WineCard from "../components/WinesCard";

export const Appetizers = () => {
  return(
    <DishesCard />
  );
}

export const Salads = () => {
  return(
    <DishesCard/>
  );
}

export const MainDishes = () => {
  return(
    <MainDishesCard />
  )
}

export const Drinks = () => {
  return(
    <DishesCard />
  );
}

export const Desserts = () => {
  return(
    <DishesCard />
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
    <PetsCard />
  );
}

export const Wines = () => {
  return(
    <WineCard />
  );
}