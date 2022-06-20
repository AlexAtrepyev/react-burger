import styles from './constructor-ingredient.module.css';

import { FC, useRef } from 'react';
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd';

import { TIngredient, TMoveCard } from '../../@types/data';

import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { removeIngredientAction } from '../../services/actions/burger';
import { useDispatch } from '../../services/hooks';

const ConstructorIngredient: FC<{ index: number, item: TIngredient, moveCard: TMoveCard }> = ({ index, item, moveCard }) => {
  const ref = useRef<HTMLLIElement>(null);
  
  const dispatch = useDispatch();
  
  const [{ handlerId }, drop] = useDrop<TIngredient, any, any>({
    accept: 'orderedIngredient',
    collect(monitor: DropTargetMonitor) {
      return {
        handlerId: monitor.getHandlerId()
      }
    },
    hover(item: TIngredient, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset && clientOffset.y - hoverBoundingRect.top;
      if (dragIndex && dragIndex < hoverIndex && hoverClientY && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex && dragIndex > hoverIndex && hoverClientY && hoverClientY > hoverMiddleY) {
        return;
      }
      
      dragIndex && moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  })
  
  const [{ opacity }, drag] = useDrag({
    type: 'orderedIngredient',
    item: () => ({ _id: item._id, index }),
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0 : 1
    }),
  });
  
  if (item.type !== 'bun') drag(drop(ref));

  const removeOrderedIngredient = (): void => {
    dispatch(removeIngredientAction(item));
  }

  return (
    <li
      ref={ref}
      className={styles.item}
      style={{ opacity }}
      onDrop={e => e.preventDefault()}
      data-handler-id={handlerId}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        isLocked={false}
        text={item.name}
        price={item.price}
        thumbnail={item.image_mobile}
        handleClose={removeOrderedIngredient}
      />
    </li>
  )
}

export default ConstructorIngredient;
