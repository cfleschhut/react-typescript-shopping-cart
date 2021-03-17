import { useState } from "react";
import { useQuery } from "react-query";
import { Drawer, LinearProgress, Grid, Badge } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Wrapper } from "./App.styles";

export type CartItemType = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  createdAt: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  fetch(
    "https://mockend.com/cfleschhut/react-typescript-shopping-cart/products"
  ).then((res) => res.json());

const App = () => {
  const { isLoading, error, data } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  console.log(data);

  return (
    <div className="App">
      <Drawer></Drawer>
    </div>
  );
};

export default App;
