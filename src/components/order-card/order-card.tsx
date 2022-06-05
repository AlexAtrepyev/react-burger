import styles from './order-card.module.css';

import { FC } from 'react';

import IngredientLogo from '../ingredient-logo/ingredient-logo';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderCard: FC<{ location: 'feed' | 'profile' }> = ({ location }) => {
  return (
    <li className={`${styles.card} ${location === 'feed' ? styles.card_location_feed : styles.card_location_profile}`}>
      <div className={styles.number}>
        <span className="text text_type_digits-default">#034535</span>
        <span className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</span>
      </div>
      <h2 className={`text text_type_main-medium mt-6 ${location === 'feed' ? 'mb-6' : 'mb-2'}`}>
        Death Star Starship Main бургер
      </h2>
      {location === 'profile' && (<p className="text text_type_main-default mb-6">Создан</p>)}
      <div className={styles.info}>
        <ul className={styles.ingredients}>
          <span className={styles.container}><IngredientLogo /></span>
          <span className={styles.container}><IngredientLogo /></span>
          <span className={styles.container}><IngredientLogo /></span>
          <span className={styles.container}><IngredientLogo /></span>
          <span className={styles.container}><IngredientLogo /></span>
          <span className={styles.container}><IngredientLogo /></span>
          <span className={styles.container}><IngredientLogo /></span>
          <span className={styles.container}><IngredientLogo /></span>
        </ul>
        <div className={styles.price}>
          <span className="text text_type_digits-default">480</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </li>
  );
}

export default OrderCard;
