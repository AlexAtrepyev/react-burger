import styles from './burger-constructor.module.css';

import { useDrop, DropTargetMonitor } from 'react-dnd';
import { v4 as uuid } from 'uuid';

import { addBunAction, addInterIngredientAction } from '../../services/actions/burger';
import { TIngredient } from '../../services/types/data';
import { useDispatch } from '../../services/hooks';

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
        dispatch(addBunAction(item));
      } else {
        dispatch(addInterIngredientAction({ ...item, dragId: uuid() }));
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
