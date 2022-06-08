import styles from './order-item.module.css';

import { FC } from 'react';

import IngredientLogo from '../ingredient-logo/ingredient-logo';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderItem: FC<{ name: string, image: string, count: number, price: number }> = ({ name, image, count, price }) => {
  return (
    <li className={styles.item}>
      <IngredientLogo image={image} name={name} />
      <h3 className="text text_type_main-default">{name}</h3>
      <div className={styles.price}>
        <span className="text text_type_digits-default">{`${count} x ${price}`}</span>
        <CurrencyIcon type="primary" />
      </div>
    </li>
  );
}

export default OrderItem;
