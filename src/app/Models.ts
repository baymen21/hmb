export interface User {
    id:number,
    nom:string,
    prenom:string,
    tel:string,
    adresse:string
}

export interface Employer {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string
}
export interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string
}

export interface Post {
  userId:number,
  id:number,
  title:string,
  body:string,
}

export interface Todo {
  userId:number,
  id:number,
  title:string,
  completed:string,
}

export interface Provider {
  id:number,
  name:string,
  address:string,
  email:string
}

export interface Article {
  id?:number,
  label:string,
  price:number,
  picture:string,
  provider? : Provider
}
