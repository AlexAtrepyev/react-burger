import styles from './constructor-inter-item.module.css';

import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';

import { REMOVE_INTER_INGREDIENT } from '../../utils/constants';
import { itemObject } from '../../utils/prop-types';

import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function ConstructorInterItem({ index, item, moveCard }) {
  const dispatch = useDispatch();

  const ref = useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: 'orderedIngredient',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      // Переопределяем индексы ингредиентов для удобства
      const dragIndex = item.index;
      const hoverIndex = index;
      // Ничего не делаем, если ингредиент находится 
      if (dragIndex === hoverIndex) {
        return;
      }
      // Определяем границы карточки ингредиента
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Определяем середину карточки по оси Y нашего ингредиента
      // В момент пересечения этой границы, перетаскиваемым ингредиентом
      // Мы будем менять их местами
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Получаем текущую позицию курсора,
      // относительно текущего контейнера
      const clientOffset = monitor.getClientOffset();
      // Вычисляем координаты курсора и координаты середины карточки
      // на которую мы навели наш перетаскиваемый ингредиент
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Условие для перетаскивании элементов сверху вниз
      // Если перетаскиваемый ингредиент пересекает середину
      // текущего ингредиента, то мы идем дальше и выполняем moveCard
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Условие для перетаскивании элементов снизу вверх
      // Происходит тоже самое что и выше, только в обратном порядке
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Выполняем наш коллбэк с перемещением карточек внутри массива
      moveCard(dragIndex, hoverIndex);
      // Это сделано для внутренней оптимизации библиотеки
      // для поиска и замены элементом
      item.index = hoverIndex;
    }
  })
  
  const [{ opacity }, drag] = useDrag({
    type: 'orderedIngredient',
    item: () => ({ id: item.id, index }),
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0 : 1
    }),
  });
  
  if (item.type !== 'bun') drag(drop(ref));

  function removeOrderedIngredient() {
    dispatch({
      type: REMOVE_INTER_INGREDIENT,
      item: item
    });
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

ConstructorInterItem.propTypes = {
  index: PropTypes.number.isRequired,
  item: itemObject.isRequired,
  moveCard: PropTypes.func.isRequired
};

export default ConstructorInterItem;
