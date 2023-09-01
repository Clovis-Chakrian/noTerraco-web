import { IProduct } from "./api"

interface IDisheCard {
  name: string,
  price: string,
  description: string
  imageUrl: string
}

interface IMainDisheCard {
  name: string,
  price: string,
  priceForTwo: string,
  description: string
  imageUrl: string
}

interface IWineCard {
  name: string,
  price: string,
  priceForTwo: string,
  imageUrl: string
}

interface IExtraPortion {
  name: string,
  price: string,
}

interface IHeader {
  onChangeSelectedType: (type: string) => void;
  selectedType: string
}

interface IMenuContent {
  dishes: IProduct[]
}

export {
  IDisheCard,
  IMainDisheCard,
  IWineCard,
  IExtraPortion,
  IHeader,
  IMenuContent
}