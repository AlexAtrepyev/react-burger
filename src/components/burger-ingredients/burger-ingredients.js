import styles from './burger-ingredients.module.css';

import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SET_CURRENT_TAB } from '../../utils/constants';
import { getNearestRef, filterIngredients } from '../../utils/utils';

import IngredientsGroup from '../ingredients-group/ingredients-group';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients() {
  const dispatch = useDispatch();

  const ingredients = useSelector(state => state.burger.ingredients.items);
  const currentTab = useSelector(state => state.ui.currentTab);

  const bunsRef = useRef(null);
  const saucesRef = useRef(null);
  const mainsRef = useRef(null);
  
  function handleScroll(e) {
    const nearestRef = getNearestRef(e.currentTarget, [bunsRef, saucesRef, mainsRef]);
    const newTab = nearestRef === bunsRef ? 'bun' : nearestRef === saucesRef ? 'sauce' : 'main';
    newTab !== currentTab && dispatch({ type: SET_CURRENT_TAB, currentTab: newTab });
  }
  
  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <div className={styles.tabs}>
        <Tab value="Булки" active={currentTab === 'bun'}>
          Булки
        </Tab>
        <Tab value="Соусы" active={currentTab === 'sauce'}>
          Соусы
        </Tab>
        <Tab value="Начинки" active={currentTab === 'main'}>
          Начинки
        </Tab>
      </div>
      <ul className={styles.list} onScroll={handleScroll}>
        <IngredientsGroup ref={bunsRef} title="Булки" items={filterIngredients(ingredients, 'bun')} />
        <IngredientsGroup ref={saucesRef} title="Соусы" items={filterIngredients(ingredients, 'sauce')} />
        <IngredientsGroup ref={mainsRef} title="Начинки" items={filterIngredients(ingredients, 'main')} />
      </ul>
    </section>
  );
}

export default BurgerIngredients;
