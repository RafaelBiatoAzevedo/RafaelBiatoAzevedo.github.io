import { Route, Switch } from 'react-router';
import './App.css';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/carrinho" component= { Cart } />
      <Route path="*" component= { NoPage } />
    </Switch>
  )
}

export default App;
