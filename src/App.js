import { Fragment } from 'react';
import Header from './UI/Header/Header';
import MealsSummary from './components/MealsSummary/MealsSummary';
import AvailableMeals from './components/AvailableMeals/AvailableMeals';

function App() {
  return (
    <Fragment>
      <Header/>
      <MealsSummary/>
      <AvailableMeals/>
    </Fragment>
  );
}

export default App;
