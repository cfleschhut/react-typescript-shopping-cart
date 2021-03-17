import { useState } from "react";
import { useQuery } from "react-query";
import { Drawer, LinearProgress, Grid, Badge } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Wrapper } from "./App.styles";

const App = () => {
  return (
    <div className="App">
      <Drawer></Drawer>
    </div>
  );
};

export default App;
