import styles from './app.module.css';

import { useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from 'react-redux';

import { getIngredients } from '../../services/actions';

import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

function App() {
  const dispatch = useDispatch();

  const ingredients = useSelector(state => state.burger.ingredients.items);
  
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);
  
  return (
    <>
      <AppHeader />
      {ingredients.length > 0 && (
        <main className={styles.main}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </main>
      )}
    </>
  );
}

export default App;
