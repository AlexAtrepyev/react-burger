import styles from './burger-ingredients.module.css';

import { useState, useContext } from 'react';

import { IngredientsContext } from '../../services/ingredientsContext';

import { clusterIngredients } from '../../utils/utils';

import IngredientsGroup from '../ingredients-group/ingredients-group';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients() {
  const ingredientState = useContext(IngredientsContext);
  const [current, setCurrent] = useState('Булки');

  const { buns, sauces, mains } = clusterIngredients(ingredientState.all);

  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <div className={styles.tabs}>
        <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <ul className={styles.list}>
        <IngredientsGroup title="Булки" data={buns} />
        <IngredientsGroup title="Соусы" data={sauces} />
        <IngredientsGroup title="Начинки" data={mains} />
      </ul>
    </section>
  );
}

export default BurgerIngredients;
