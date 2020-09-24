import React, { Component } from "react";
import { stireProducts, detailProduct, storeProducts } from "./data";
const ProductContext = React.createContext();
//provider
//consumer

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct
  };
  handelDetail = () => {
    console.log("Hello from Detail");
  };

  addToCart = () => {
    console.log("Hello from add to cart");
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handelDetail: this.handelDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
