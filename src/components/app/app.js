import styles from './app.module.css';

import { useState, useReducer, useEffect } from 'react';

import { IngredientsContext } from '../../services/ingredientsContext';
import { OrderContext } from '../../services/orderContext';

import Api from '../../utils/api';
import { BASE_URL, ingredientsInitialState, reducer, getIngredientsId } from '../../utils/utils';

import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

function App() {
  const api = new Api(BASE_URL);

  const [ingredientsState, ingredientsDispatcher] = useReducer(reducer, ingredientsInitialState);
  const [order, setOrder] = useState(null);
  
  useEffect(() => {
    api.getIngredients()
      .then(res => ingredientsDispatcher({ type: 'set', payload: res.data }))
      .catch(err => console.log(err));
  }, []);

  function createOrder() {
    api.createOrder(getIngredientsId(ingredientsState.constructor))
      .then(res => setTimeout(() => setOrder(res), 1000))
      .catch(err => console.log(err));
  }
  
  return (
    <IngredientsContext.Provider value={ingredientsState}>
      <OrderContext.Provider value={order}>
        <AppHeader />
        {ingredientsState.constructor && ingredientsState.all &&  (
          <main className={styles.main}>
            <BurgerIngredients />
            <BurgerConstructor createOrder={createOrder} />
          </main>
        )}
      </OrderContext.Provider>
    </IngredientsContext.Provider>
  );
}

export default App;
