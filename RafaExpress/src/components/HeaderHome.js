import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveGreeting } from '../action';
import greeting from '../service/greeting';
import '../styles/headerHome.css';

class HeaderHome extends React.Component {
  componentDidMount() {
    const { saveGreeting } = this.props;
    saveGreeting();
  }
  
  render() {
    const { greeting } = this.props;
    return (
      <div className="header-container">
        <div className="logo-input-container">
          <img src="logoRafaExpressWhite.png" alt="logo" width="200px"/>
          <input className="input-search" type="text" placeholder="O que você esta procurando ?"/>
          <div>
            <span className="header-greeting">{ `${greeting},`}</span>
            <span className="header-user">Rafael</span>
        </div>
        </div>
        <div className="cart-container">
          <Link to="/carrinho">
            <img className="cart-icon" src="cart-icon.png" alt="cart-icon" width="40px"/>
          </Link>
          <span className="cart-counter">0</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  greeting: state.stateHome.greeting,
});

const mapDispatchToProps = (dispatch) => ({
  saveGreeting: () => dispatch(saveGreeting(greeting())),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderHome);
