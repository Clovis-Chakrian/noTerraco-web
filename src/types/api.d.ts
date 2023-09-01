interface IProduct {
  id: string,
  name: string,
  type: string,
  availability: string,
  subtype?: string,
  description?: string,
  imageUrl?: string,
  price: string,
  priceForTwo?: string
}

export {
  IProduct
}