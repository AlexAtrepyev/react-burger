import styles from './burger-constructor.module.css';

import { FC } from 'react';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import { v4 as uuid } from 'uuid';

import { TIngredient } from '../../@types/data';

import ConstructorIngredients from '../constructor-ingredients/constructor-ingredients';
import ConstructorOrder from '../constructor-order/constructor-order';

import { addBunAction, addIngredientAction } from '../../services/actions/burger';
import { useDispatch } from '../../services/hooks';

const BurgerConstructor: FC = () => {
  const dispatch = useDispatch();

  const [{ isHover }, dropTargerRef] = useDrop({
    accept: 'ingredient',
    collect: (monitor: DropTargetMonitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item: TIngredient) {
      if (item.type === 'bun') {
        dispatch(addBunAction(item));
      } else {
        dispatch(addIngredientAction({ ...item, dragId: uuid() }));
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
