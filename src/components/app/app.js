import styles from './app.module.css';

import data from '../../utils/data';
import clusterData from '../../utils/functions';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

function App() {
  const { bun, main, sauce } = clusterData(data);
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients bun={bun} main={main} sauce={sauce} />
        <BurgerConstructor bun={bun[0]} data={[...main, ...sauce].slice(0, 5)} />
      </main>
    </>
  );
}

export default App;
