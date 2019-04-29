import React from "react";
import Product from "./Product";
import Total from "./Total";

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      ProductList: [
        { name: "Android", price: 111 },
        { name: "Apple", price: 222 },
        { name: "Samsung", price: 55 }
      ]
    };
  }
  calculateTotal = price => {
    this.setState({ total: this.state.total + price });
  };
  showProduct = name => {
    alert("You selected " + name);
  };
  render() {
    const products = this.state.ProductList.map(product => {
      return (
        <div>
          <Product
            name={product.name}
            price={product.price}
            handleShow={this.showProduct}
            handleTotal={this.calculateTotal}
          />
        </div>
      );
    });
    return (
      <div>
        {products}

        <Total total={this.state.total} />
      </div>
    );
  }
}
