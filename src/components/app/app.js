import styles from './app.module.css';
import data from '../../utils/data';
import clusterData from '../../utils/functions';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

function App() {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={clusterData(data)} />
        <BurgerConstructor data={data.slice(0, 7)} />
      </main>
    </>
  );
}

export default App;
