import styles from './burger-ingredients.module.css';

import { FC, SyntheticEvent, useRef } from 'react';

import IngredientsGroup from '../ingredients-group/ingredients-group';
import Preloader from '../preloader/preloader';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import { setCurrentTabAction } from '../../services/actions/ingredients';
import { useSelector, useDispatch } from '../../services/hooks';

import { getNearestRef, filterIngredients } from '../../utils/functions';

const BurgerIngredients: FC = () => {
  const dispatch = useDispatch();
  const burgerIngredients = useSelector(state => {
    const { bun, ingredients } = state.burger;
    return ingredients.concat(bun ? [bun, bun] : []);
  });
  const { currentTab, getIngredientsFailed, getIngredientsRequest, ingredients } = useSelector(state => state.ingredients);
  const countedIngredients = ingredients.map(ingredient => {
    const filterIngredients = burgerIngredients.filter(burgerIngredient => burgerIngredient._id === ingredient._id);
    return filterIngredients.length ? { ...ingredient, count: filterIngredients.length } : ingredient;
  });

  const bunsRef = useRef<HTMLHeadingElement>(null);
  const saucesRef = useRef<HTMLHeadingElement>(null);
  const mainsRef = useRef<HTMLHeadingElement>(null);
  
  const handleScroll = (e: SyntheticEvent): void => {
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
      
      {getIngredientsRequest ? (
        <Preloader />
      ) : getIngredientsFailed ? (
        <div>Не удалось загрузить ингредиенты</div>
      ) : (
        <ul className={styles.list} onScroll={handleScroll}>
          <IngredientsGroup ref={bunsRef} title="Булки" items={filterIngredients(countedIngredients, 'bun')} />
          <IngredientsGroup ref={saucesRef} title="Соусы" items={filterIngredients(countedIngredients, 'sauce')} />
          <IngredientsGroup ref={mainsRef} title="Начинки" items={filterIngredients(countedIngredients, 'main')} />
        </ul>
      )}
    </section>
  );
}

export default BurgerIngredients;
