import styles from './constructor-ingredients.module.css';

import { useCallback } from 'react';

import { updateInterIngredientAction } from '../../services/actions/burger';
import { TMoveCard } from '../../services/types/data';
import { useSelector, useDispatch } from '../../services/hooks';

import ConstructorBunItem from '../constructor-bun-item/constructor-bun-item';
import ConstructorInterItem from '../constructor-inter-item/constructor-inter-item';

function ConstructorIngredients() {
  const dispatch = useDispatch();
  const interItems = useSelector(state => state.burger.constructor.interItems);
  
  const moveCard = useCallback<TMoveCard>((dragIndex, hoverIndex) => {
    const dragItem = interItems[dragIndex];
    const newItems = [ ...interItems ];
    newItems.splice(dragIndex, 1);
    newItems.splice(hoverIndex, 0, dragItem);
    
    dispatch(updateInterIngredientAction(newItems));
  }, [interItems, dispatch]);

  return (
    <>
      <ConstructorBunItem type={'top'} />
      <ul className={styles.list}>
        {interItems.map((item, index) => (
          <ConstructorInterItem key={item.dragId} index={index} item={item} moveCard={moveCard} />
        ))}
      </ul>
      <ConstructorBunItem type={'bottom'} />
    </>
  );
}

export default ConstructorIngredients;
