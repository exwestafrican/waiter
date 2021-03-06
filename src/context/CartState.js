import React, { useState, useReducer } from "react";
import CartContext from "./cart-context";
import cartReducer from "./cart-reducer";
import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY } from "./cart-actions";
import { LocalStorageCart } from "../utils/shoppingCart";

function CartState(props) {
  const [modalDisplay, setModalDisplay] = useState("none");
  const initialState = {
    cart_item: LocalStorageCart(),
  };

  function addProduct(product) {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  }
  function changeQty(product) {
    dispatch({ type: CHANGE_QUANTITY, payload: product });
  }
  function removeProduct(productID) {
    dispatch({ type: REMOVE_FROM_CART, payload: productID });
  }

  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider
      value={{
        modalDisplay,
        setModalDisplay,
        addProduct,
        removeProduct,
        changeQty,
        cart_item: state.cart_item,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartState;

// {
//     product: "bc042d4b-5d88-47a9-a69c-6b7280a8abd3",
//     quantity: 4,
//   },
