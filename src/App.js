import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ProductList from "./Components/ProductList";

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <BrowserRouter>
        <Route exact path="/" component={ProductList} />
      </BrowserRouter>
    </div>
  );
}

export default App;
