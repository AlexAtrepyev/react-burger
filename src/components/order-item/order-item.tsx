import styles from './order-item.module.css';

import IngredientLogo from '../ingredient-logo/ingredient-logo';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function OrderItem() {
  return (
    <li className={styles.item}>
      <IngredientLogo />
      <h3 className="text text_type_main-default">Флюоресцентная булка R2-D3</h3>
      <div className={styles.price}>
        <span className="text text_type_digits-default">2 x 20</span>
        <CurrencyIcon type="primary" />
      </div>
    </li>
  );
}

export default OrderItem;
