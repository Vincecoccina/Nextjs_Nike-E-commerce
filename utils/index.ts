import { Link, Product, ProductCart } from "@/types";

export const LINKS: Link[] = [
  { name: "Homepage", link: "/" },
  { name: "Shop", link: "/" },
  { name: "Deals", link: "/" },
  { name: "About", link: "/" },
  { name: "Contact", link: "/" },
];

export const PRODUCTS_CART: ProductCart[] = [
  {
    name: "Chaussure Nike",
    desc: "Sneaker",
    img: "/img/big-shoe2.png",
    price: 120,
    qty: 1,
  },
  {
    name: "Chaussure Nike 2",
    desc: "Sneaker",
    img: "/img/big-shoe1.png",
    price: 100,
    qty: 2,
  },
];

export const PRODUCT : Product[] = [
  {
    name: "Nike Sportswear Tech Fleece",
    desc: "Pantalon de jogging pour Homme",
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3fdbf7f4-2e55-4be2-8eea-816f1da06482/M+NK+TCH+FLEECE+JGGR.png",
    price: 49.99
  },
  {
    name: "Air Jordan 1 Low",
    desc: "Chaussure pour homme",
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cd83452d-3a6c-4742-9129-3693e06a26e2/AIR+JORDAN+1+LOW.png",
    price: 129.99
  },
  {
    name: "Air Jordan 1 Mid",
    desc: "Chaussure pour homme",
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/288a2235-54ce-4f8e-a133-0117cbc381b4/AIR+JORDAN+1+MID.png",
    price: 139.99
  },
  {
    name: "Nike Dri-FIT Pacer",
    desc: "Pull à 1/4 de zip pour Femme",
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/db954233-2f91-4700-bfe7-9b9e16d40d7a/W+NK+DF+PACER+HZ.png",
    price: 39.49
  }
]
