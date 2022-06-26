export interface IDishes {
  id?: string,
  imageURL: string,
  name: string,
  type?: string,
  description: string,
  price: Number,
}

export interface IMainDishes {
  id?: string,
  imageURL: string,
  name: string,
  subtype?: string,
  description: string,
  price: Number,
  priceForTwo: Number
}

export interface IExtraPortion {
  id?: string,
  name: string,
  price: string,
}

export interface IPets {
  id?: string,
  name: string,
  description: string,
  price: number,
}

export interface IWine {
  id?: string,
  country?: string,
  imageURL: string,
  name: string,
  glassPrice: Number,
  bottlePrice: Number
}