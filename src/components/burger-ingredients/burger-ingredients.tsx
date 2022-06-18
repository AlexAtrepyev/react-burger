import styles from './burger-ingredients.module.css';

import { useRef, SyntheticEvent } from 'react';

import IngredientsGroup from '../ingredients-group/ingredients-group';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import { setCurrentTabAction } from '../../services/actions/ingredients';
import { useSelector, useDispatch } from '../../services/hooks';

import { getNearestRef, filterIngredients } from '../../utils/functions';

function BurgerIngredients() {
  const dispatch = useDispatch();
  const { currentTab, ingredients } = useSelector(state => state.ingredients);

  const bunsRef = useRef<HTMLHeadingElement>(null);
  const saucesRef = useRef<HTMLHeadingElement>(null);
  const mainsRef = useRef<HTMLHeadingElement>(null);
  
  function handleScroll(e: SyntheticEvent) {
    const nearestRef = getNearestRef(e.currentTarget, [bunsRef, saucesRef, mainsRef]);
    const newTab = nearestRef === bunsRef ? 'bun' : nearestRef === saucesRef ? 'sauce' : 'main';
    newTab !== currentTab && dispatch(setCurrentTabAction(newTab));
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
