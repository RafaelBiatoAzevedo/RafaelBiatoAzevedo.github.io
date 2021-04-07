import React from 'react';
import { connect } from 'react-redux';
import { addProductCart } from '../action';
import '../styles/productsHome.css'

class ProductPromotion extends React.Component {
  render() {
    const { product, addProductCart } = this.props;
    return (
      <div className="product-container promotion-box">
        <img className="image-product" src={product.thumbnail} alt="product" />
        <p className="title-product">{ product.title }</p>
        <p className="price-product">{`R$ ${product.price.toFixed(2)}`}</p>
        <p className="parcel-product">{`10x de R$ ${(product.price / 10).toFixed(2)} sem juros no Cartão`}</p>
        <button
          onClick={ () => addProductCart(product) }
          className="btn-buy" type="button"
        >
          Adicionar
          <img className="img-btn" src="cart-icon.png" alt="cart-icon"/>
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  addProductCart: (product) => dispatch(addProductCart(product)),
});

export default connect(null, mapDispatchToProps)(ProductPromotion);
