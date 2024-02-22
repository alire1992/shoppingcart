import {
  ADD_TO_CART,
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
  REMOVE_PRODUCT,
  RESET_CART,
} from "./actionTypes";

const initialState = {
  cart: localStorage.getItem("shopping-cart")
    ? JSON.parse(localStorage.getItem("shopping-cart"))
    : [],
};

const updateStorage = (cart) => {
  localStorage.setItem("shopping-cart", JSON.stringify(cart));
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const isExist = state.cart.find((p) => p.id === action.payload.id)
        ? true
        : false;
      state.cart = isExist
        ? state.cart.map((p) =>
            p.id === action.payload.id ? { ...p, quantity: p.quantity + 1 } : p
          )
        : [...state.cart, { ...action.payload, quantity: 1 }];
      updateStorage(state.cart);
      return {
        ...state,
        cart: state.cart,
      };
    case INCREMENT_QUANTITY:
      state.cart = state.cart.map((p) =>
        p.id === action.payload.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      updateStorage(state.cart);
      return {
        ...state,
        cart: state.cart,
      };
    case DECREMENT_QUANTITY:
      state.cart =
        action.payload.quantity > 1
          ? state.cart.map((p) =>
              p.id === action.payload.id
                ? { ...p, quantity: p.quantity - 1 }
                : p
            )
          : state.cart;
      updateStorage(state.cart);
      return {
        ...state,
        cart: state.cart,
      };
    case REMOVE_PRODUCT:
      state.cart = state.cart.filter((p) => p.id !== action.payload.id);
      localStorage.setItem("shopping-cart", JSON.stringify(state.cart));
      return {
        ...state,
        cart: state.cart,
      };
    case RESET_CART:
      updateStorage([]);
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
