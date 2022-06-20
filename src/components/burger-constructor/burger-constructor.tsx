import styles from './burger-constructor.module.css';

import { FC, useCallback } from 'react';

import { TMoveCard } from '../../@types/data';

import ConstructorBun from '../constructor-bun/constructor-bun';
import ConstructorIngredient from '../constructor-ingredient/constructor-ingredient';

import { updateIngredientAction } from '../../services/actions/burger';
import { useSelector, useDispatch } from '../../services/hooks';

const BurgerConstructor: FC = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.burger.ingredients);
  
  const moveCard = useCallback<TMoveCard>((dragIndex, hoverIndex) => {
    const dragItem = ingredients[dragIndex];
    const newIngredients = [ ...ingredients ];
    newIngredients.splice(dragIndex, 1);
    newIngredients.splice(hoverIndex, 0, dragItem);
    
    dispatch(updateIngredientAction(newIngredients));
  }, [ingredients, dispatch]);

  return (
    <>
      <ConstructorBun type={'top'} />
      <ul className={styles.list}>
        {ingredients.map((item, index) => <ConstructorIngredient key={item.dragId} index={index} item={item} moveCard={moveCard} />)}
      </ul>
      <ConstructorBun type={'bottom'} />
    </>
  );
}

export default BurgerConstructor;
