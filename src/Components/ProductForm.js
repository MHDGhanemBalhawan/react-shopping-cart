import React from "react";

export default class ProductForm extends React.Component {
  submit = e => {
    // alert("Name " + this.refs.name.value + " - $" + this.refs.price.value);
    e.preventDefault();
    const product = {
      name: this.refs.name.value,
      price: parseInt(this.refs.price.value)
    };
    this.props.handleCreate(product);
    this.refs.name.value = "";
    this.refs.price.value = "";
  };
  render() {
    return (
      <form>
        <input type="text" placeholder="Poduct Name" ref="name" />
        <input type="text" placeholder="Poduct Price" ref="price" />
        <br />
        <button onClick={this.submit}>Create Product</button>
      </form>
    );
  }
}
