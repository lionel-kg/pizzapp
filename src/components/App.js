import '../css/App.css';
import Banner from './Banner';
import Cart from './Cart';
import Pizza from './Pizza';
import ShoppingList from './ShoppingList';
import { pizzaList } from "../datas/PizzaList";
import react from 'react';
import { render } from '@testing-library/react';

class App extends react.Component{
  
  state = {
    title : "La Maison jungle"
  }

  render(){
    return (
      <div className="App">
          <Banner titre={this.state.title}></Banner>
          <Pizza pizzaList={pizzaList}>orientale</Pizza>
          <Cart></Cart>
      </div>
    );
  }
  
}

export default App;
