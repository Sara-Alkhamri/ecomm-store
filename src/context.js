import React, { Component } from "react";

const ProductContext = React.createContext();
//provider
//consumer

class ProductProvider extends Component {
  render() {
    return (
      <ProductContext.Provider value="hello from context">
        {this.props.childern}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
