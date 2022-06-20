import styles from './order-item.module.css';

import { FC } from 'react';

import IngredientLogo from '../ingredient-logo/ingredient-logo';
import Price from '../price/price';

const OrderItem: FC<{ name: string, image: string, count: number, price: number }> = ({ name, image, count, price }) => {
  return (
    <li className={styles.item}>
      <IngredientLogo image={image} name={name} />
      <h3 className="text text_type_main-default">{name}</h3>
      <Price value={`${count} x ${price}`} />
    </li>
  );
}

export default OrderItem;
