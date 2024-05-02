import './App.css';
import Cart from './components/Cart';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <Item name='Macbook' price={100000}/>
      <Item name='Pendrive' price={900}/>
      <Item name='ssd' price={2000}/>
      <Item name='Graphic card' price={39999}/>
      <Cart />
    </div>
  );
}

export default App;
