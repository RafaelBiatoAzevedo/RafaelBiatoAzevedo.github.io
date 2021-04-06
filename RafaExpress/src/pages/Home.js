import React from 'react';
import HeaderHome from '../components/HeaderHome';
import NavHome from '../components/NavHome';
import Products from '../components/Products';

class Home extends React.Component {
  render() {
    return (
      <div>
        <HeaderHome />
        <NavHome />
        <Products />
      </div>
    );
  }
}

export default Home;
