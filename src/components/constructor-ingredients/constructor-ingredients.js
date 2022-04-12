import styles from './constructor-ingredients.module.css';

import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { UPDATE_INTER_INGREDIENT } from '../../utils/constants';

import ConstructorBunItem from '../constructor-bun-item/constructor-bun-item';
import ConstructorInterItem from '../constructor-inter-item/constructor-inter-item';

function ConstructorIngredients() {
  const { interItems } = useSelector(state => state.burger.constructor);
  const dispatch = useDispatch();
  
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    const dragItem = interItems[dragIndex];
    const newItems = [ ...interItems ];
    newItems.splice(dragIndex, 1);
    newItems.splice(hoverIndex, 0, dragItem);
    
    dispatch({
      type: UPDATE_INTER_INGREDIENT,
      newInterItems: newItems
    })
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
