import styles from './constructor-ingredients.module.css';

import { FC, useCallback } from 'react';

import { TMoveCard } from '../../@types/data';

import ConstructorBunItem from '../constructor-bun-item/constructor-bun-item';
import ConstructorInterItem from '../constructor-inter-item/constructor-inter-item';

import { updateIngredientAction } from '../../services/actions/burger';
import { useSelector, useDispatch } from '../../services/hooks';

const ConstructorIngredients: FC = () => {
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
      <ConstructorBunItem type={'top'} />
      <ul className={styles.list}>
        {ingredients.map((item, index) => <ConstructorInterItem key={item.dragId} index={index} item={item} moveCard={moveCard} />)}
      </ul>
      <ConstructorBunItem type={'bottom'} />
    </>
  );
}

export default ConstructorIngredients;
