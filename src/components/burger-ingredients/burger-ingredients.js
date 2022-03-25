import styles from './burger-ingredients.module.css';

import { useState } from 'react';
import PropTypes from 'prop-types';

import dataPropTypes from '../../utils/prop-types';

import IngredientsGroup from '../ingredients-group/ingredients-group';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients({ bun, main, sauce }) {
  const [current, setCurrent] = useState('Булки');

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
        <IngredientsGroup title="Булки" data={bun} />
        <IngredientsGroup title="Соусы" data={sauce} />
        <IngredientsGroup title="Начинки" data={main} />
      </ul>
    </section>
  );
}

BurgerIngredients.propTypes = {
  bun: PropTypes.arrayOf(dataPropTypes).isRequired,
  sauce: PropTypes.arrayOf(dataPropTypes).isRequired,
  main: PropTypes.arrayOf(dataPropTypes).isRequired
}; 

export default BurgerIngredients;
