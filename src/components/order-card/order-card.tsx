import styles from './order-card.module.css';

import { FC } from 'react';
import { v4 as uuid } from 'uuid';

import { TOrder } from '../../services/types/data';
import { getOrderPrice } from '../../services/utils';

import IngredientLogo from '../ingredient-logo/ingredient-logo';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderCard: FC<{ location: 'feed' | 'profile', data: TOrder }> = ({ location, data }) => {
  function getStatus(status: "created" | "pending" | "done"): JSX.Element {
    switch(status) {
      case 'created':
        return (<p className="text text_type_main-default mb-6">Оформлен</p>);
      case 'pending':
        return (<p className="text text_type_main-default mb-6 text_color_success">Готовится</p>);
      case 'done':
        return (<p className="text text_type_main-default mb-6">Выполнен</p>);
      default:
        return (<p className="text text_type_main-default mb-6">Нет данных</p>);
    }
  }

  return (
    <li className={`${styles.card} ${location === 'feed' ? styles.card_location_feed : styles.card_location_profile}`}>
      <div className={styles.number}>
        <span className="text text_type_digits-default">{data.number}</span>
        <span className="text text_type_main-default text_color_inactive">{data.createdAt}</span>
      </div>
      <h2 className={`text text_type_main-medium mt-6 ${location === 'feed' ? 'mb-6' : 'mb-2'}`}>{data.name}</h2>

      {location === 'profile' && getStatus(data.status)}

      <div className={styles.info}>
        <ul className={styles.ingredients}>
          {data.ingredientsDetails && data.ingredientsDetails.map(ingredient => (
            <span key={uuid()} className={styles.container}>
              <IngredientLogo image={ingredient.image_mobile} name={ingredient.name} />
            </span>
          ))}
        </ul>
        <div className={styles.price}>
          <span className="text text_type_digits-default">
            {data.ingredientsDetails && getOrderPrice(data.ingredientsDetails)}
          </span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </li>
  );
}

export default OrderCard;