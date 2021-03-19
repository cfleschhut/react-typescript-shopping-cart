import React from "react";
import CartItem from "../CartItem/CartItem";
import { CartItemType } from "../App";
import { Wrapper } from "./Cart.styles";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <h2>Your shopping cart</h2>
      {cartItems.length ? (
        <div>
          {cartItems.map((item) => (
            <CartItem />
          ))}
        </div>
      ) : (
        <div>No items in cart</div>
      )}
    </Wrapper>
  );
};

export default Cart;
