import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/productsDetails.css';

class ProductDetails extends React.Component {
  render() {
    return (
      <div>
        <div className="header-details">
          <h1>Detalhes do Produto</h1>
          <Link className="link-details" to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
