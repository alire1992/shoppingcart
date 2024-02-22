import { SET_PRODUCTS } from "./actionTypes";

export function getProducts() {
  return {
    type: SET_PRODUCTS,
    payload: [
      {
        id: 1,
        name: "Samsung galexy S21 FE 5G",
        describtion: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`,
        image:
          "https://dkstatics-public.digikala.com/digikala-products/4af1bad23ab1945fa5cef6a333792196e0fe850e_1688899754.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        price: 700,
      },
      {
        id: 2,
        name: "Samsung galexy S20 FE 5G",
        describtion: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`,
        image:
          "https://dkstatics-public.digikala.com/digikala-products/5c04ad72a663336a186fe65f9a538728737634e0_1656428287.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        price: 550,
      },
      {
        id: 3,
        name: "Samsung galexy A73 5G",
        describtion: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`,
        image:
          "https://dkstatics-public.digikala.com/digikala-products/9fd4d980776d3e609ff538fc6b6bfbdd575ee620_1654086460.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        price: 521,
      },
      {
        id: 4,
        name: "Samsung galexy S23 Ultra",
        describtion: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`,
        image:
          "https://dkstatics-public.digikala.com/digikala-products/ebe1b2041a76fda30ce7b8870ddfd627f5affa2a_1675770743.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        price: 1254,
      },
    ],
  };
}
