import styles from './burger.module.css';

import { FC } from 'react';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import { v4 as uuid } from 'uuid';

import { TIngredient } from '../../@types/data';

import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerOrder from '../burger-order/burger-order';

import { addBunAction, addIngredientAction } from '../../services/actions/burger';
import { useDispatch } from '../../services/hooks';

const Burger: FC = () => {
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
      <BurgerConstructor />
      <BurgerOrder />
    </section>
  );
}

export default Burger;
