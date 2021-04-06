import React from 'react';
import Footer from '../components/Footer';
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
        <Footer />
      </div>
    );
  }
}

export default Home;
