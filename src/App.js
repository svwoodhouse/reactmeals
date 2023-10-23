import Header from './UI/Header/Header';
import Meals from './components/Meals';
import MealsContext from './store/MealsContext';

function App() {
  return (
    <MealsContext.Provider value={{itemsTotal: 0}}>
      <Header/>
      <main>
        <Meals/>
      </main>
    </MealsContext.Provider>
  );
}

export default App;
