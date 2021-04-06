import React from 'react';
import { categoriesThunk, getProductsByCategory } from '../action';
import { connect } from 'react-redux';
import '../styles/navHome.css'

class NavHome extends React.Component {
  componentDidMount() {
    const { saveCategories } = this.props;
    saveCategories();
  }

  render() {
    const { listCategories, saveProducts } = this.props;
    return (
      <div>
        <nav className="nav-container">
          <select className="select-category" onChange={ (evt) => saveProducts(evt.target.value) }>
            <option>Categorias</option>
            { listCategories.map((category) => <option key={ category.id } value={ category.id }>{ category.name }</option>) }
          </select>
          <a className="nav-a" href="blank">Baixe App</a>
          <a className="nav-a" href="blank">Mais Vendidos</a>
          <a className="nav-a" href="blank">Promoções da Semana</a>
          <a className="nav-a" href="blank">Promoções do Dia</a>
        </nav>
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  listCategories: state.stateHome.categories,
});

const mapDispatchToProps = (dispatch) => ({
  saveCategories: () => dispatch(categoriesThunk()),
  saveProducts: (value) => dispatch(getProductsByCategory(value)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(NavHome);
