import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY } from "./cart-actions";
import { updateCart } from "../utils/shoppingCart";
function cartReducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const new_state = {
        ...state,
        cart_item: [...state.cart_item, action.payload],
      };
      updateCart(new_state.cart_item);
      return new_state;
    case REMOVE_FROM_CART:
      const removedItemState = {
        ...state,
        cart_item: state.cart_item.filter(
          (product) => product.product !== action.payload
        ),
      };
      updateCart(removedItemState.cart_item);
      return removedItemState;
    case CHANGE_QUANTITY:
      const changedQuantityState = {
        ...state,
        cart_item: state.cart_item.map((product) =>
          product.product == action.payload.product
            ? { ...product, quantity: action.payload.quantity }
            : product
        ),
      };
      updateCart(changedQuantityState.cart_item);
      return changedQuantityState;
    default:
      return state;
  }
}

export default cartReducer;
