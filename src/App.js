import Header from './UI/Header/Header';
import Meals from './components/Meals';
import MealsContext from './store/MealsContext';
import Cart from './components/Cart/Cart'
import { useState } from 'react';
function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <MealsContext.Provider value={{itemsTotal: 0}}>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onClick={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </MealsContext.Provider>
  );
}

export default App;
