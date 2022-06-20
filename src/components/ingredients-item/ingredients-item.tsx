import styles from './ingredients-item.module.css';

import { FC } from 'react';
import { useDrag } from 'react-dnd';
import { Link } from 'react-router-dom';

import { TIngredient } from '../../@types/data';

import Price from '../price/price';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientsItem: FC<{ item: TIngredient, background: any }> = ({ item, background }) => {
  const [{ opacity }, dragRef] = useDrag({
    type: 'ingredient',
    item: item,
    collect: monitor => ({
      opacity: monitor.isDragging() ? .5 : 1
    })
  });
  
  return (
    <li ref={dragRef} className={styles.item} style={{ opacity }}>
      <Link className={styles.link} to={{ pathname: `/ingredients/${item._id}`, state: { background } }}>
        <img src={item.image} alt={item.name} />
        <Price value={item.price} />
        <div className={styles.name}>
          <h3 className="text text_type_main-default">{item.name}</h3>
        </div>
        {item.count > 0 && <Counter count={item.count} size="default" />}
      </Link>
    </li>
  );
}

export default IngredientsItem;
