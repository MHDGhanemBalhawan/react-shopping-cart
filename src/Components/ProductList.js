import React from "react";
import Product from "./Product";
import Total from "./Total";

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
  }
  calculateTotal = price => {
    this.setState({ total: this.state.total + price });
  };
  showProduct = name => {
    alert("You selected " + name);
  };
  render() {
    return (
      <div>
        <Product
          name="Android"
          price={111}
          handleShow={this.showProduct}
          handleTotal={this.calculateTotal}
        />
        <Product
          name="IPhone"
          price={222}
          handleShow={this.showProduct}
          handleTotal={this.calculateTotal}
        />
        <Product
          name="Nokia"
          price={55}
          handleShow={this.showProduct}
          handleTotal={this.calculateTotal}
        />
        <Total total={this.state.total} />
      </div>
    );
  }
}
