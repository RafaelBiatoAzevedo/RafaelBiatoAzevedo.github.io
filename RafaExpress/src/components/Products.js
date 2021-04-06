import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';

class Products extends React.Component {
  render() {
    const { listProducts } = this.props;
    const { results } = listProducts[0];
    return (
      <div className="products-container">
        { results.map((product) => <Product product={ product }/>) }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  listProducts: state.stateHome.products,
});

export default connect(mapStateToProps, null)(Products);
