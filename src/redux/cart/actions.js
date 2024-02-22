import {
  ADD_TO_CART,
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
  REMOVE_PRODUCT,
  RESET_CART,
} from "./actionTypes";

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
}

export function removeProduct(product) {
  return {
    type: REMOVE_PRODUCT,
    payload: product,
  };
}

export function incrementQuantity(product) {
  return {
    type: INCREMENT_QUANTITY,
    payload: product,
  };
}

export function decrementQuantity(product) {
  return {
    type: DECREMENT_QUANTITY,
    payload: product,
  };
}

export function restCart() {
  return {
    type: RESET_CART,
  };
}
