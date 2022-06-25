export interface IDishes {
  id?: String,
  imageURL: String,
  name: String,
  type: String,
  description: String,
  price: Number,
}

export interface IMainDishes {
  id?: String,
  imageURL: String,
  name: String,
  description: String,
  price: Number,
  priceForTwo: Number
}

export interface IExtraPortion {
  id?: String,
  name: String,
  price: String,
}

export interface IPets {
  id?: String,
  name: String,
  description: String,
  price: String,
}

export interface IWine {
  id?: String,
  country: String,
  imageURL: String,
  name: String,
  glassPrice: Number,
  bottlePrice: Number
}