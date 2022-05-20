import styles from './burger-constructor.module.css';

import { useDrop, DropTargetMonitor } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { ADD_BUN, ADD_INTER_INGREDIENT } from '../../utils/constants';

import { TIngredient } from '../../types';

import ConstructorIngredients from '../constructor-ingredients/constructor-ingredients';
import ConstructorOrder from '../constructor-order/constructor-order';

function BurgerConstructor() {
  const dispatch = useDispatch();

  const [{ isHover }, dropTargerRef] = useDrop({
    accept: 'ingredient',
    collect: (monitor: DropTargetMonitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item: TIngredient) {
      if (item.type === 'bun') {
        dispatch({
          type: ADD_BUN,
          bun: item
        });
      } else {
        dispatch({
          type: ADD_INTER_INGREDIENT,
          ingredient: {
            ...item,
            dragId: uuid()
          }
        });
      }
    },
  });
  
  return (
    <section ref={dropTargerRef} className={`${styles.section} ${isHover ? styles.hover : ''}`}>
      <ConstructorIngredients />
      <ConstructorOrder />
    </section>
  );
}

export default BurgerConstructor;
