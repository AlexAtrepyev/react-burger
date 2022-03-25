import styles from './app.module.css';

import { useState, useEffect } from 'react';

import Api from '../../utils/api';
import { BASE_URL, clusterData } from '../../utils/utils';

import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

function App() {
  const api = new Api(BASE_URL);

  const [data, setData] = useState(null);
  
  useEffect(() => {
    api.getData()
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);
  
  const { bun, main, sauce } = clusterData(data);
  
  return (
    <>
      <AppHeader />
      {data && (
        <main className={styles.main}>
          <BurgerIngredients bun={bun} main={main} sauce={sauce} />
          <BurgerConstructor bun={bun[0]} data={[...main, ...sauce].slice(0, 5)} />
        </main>
      )}
    </>
  );
}

export default App;
