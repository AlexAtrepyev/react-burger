import styles from './ingredients-item.module.css';

import { FC } from 'react';
import { useDrag } from 'react-dnd';

import { TIngredient } from '../../@types/data';

import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientsItem: FC<{ item: TIngredient }> = ({ item }) => {
  const [{ opacity }, dragRef] = useDrag({
    type: 'ingredient',
    item: item,
    collect: monitor => ({
      opacity: monitor.isDragging() ? .5 : 1
    })
  });
  
  return (
    <>
      <div ref={dragRef} className={styles.item} style={{ opacity }}>
        <img src={item.image} alt={item.name} />
        <div className={styles.price}>
          <span className="text text_type_digits-default mr-2">{item.price}</span>
          <CurrencyIcon type='primary' />
        </div>
        <div className={styles.name}>
          <h3 className="text text_type_main-default">{item.name}</h3>
        </div>
        {item.count > 0 && <Counter count={item.count} size="default" />}
      </div>
    </>
  );
}

export default IngredientsItem;
