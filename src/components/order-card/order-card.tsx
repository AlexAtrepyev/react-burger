import styles from './order-card.module.css';

import { FC } from 'react';
import { Link } from 'react-router-dom';

import { TOrder } from '../../@types/data';

import IngredientLogo from '../ingredient-logo/ingredient-logo';
import Price from '../price/price';

import { MAX_CARD_LOGO_COUNT } from '../../utils/constants';
import { getOrderPrice, parseOrderDate } from '../../utils/functions';

const OrderCard: FC<{ path: 'feed' | 'profile/orders', data: TOrder, background: any }> = ({ path, data, background }) => {
  const getStatusElement = (status: "created" | "pending" | "done"): JSX.Element => {
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
  
  let hiddenCount = data.ingredientsDetails && data.ingredientsDetails.length - MAX_CARD_LOGO_COUNT;
  if (hiddenCount && hiddenCount < 1) hiddenCount = undefined;

  const overlayNeeded = Boolean(hiddenCount);

  return (
    <li className={`${styles.card} ${path === 'feed' ? styles.card_section_feed : styles.card_section_profile}`}>
      <Link className={styles.link} to={{ pathname: `/${path}/${data._id}`, state: { background } }}>
        <div className={styles.number}>
          <span className="text text_type_digits-default">{`#${data.number}`}</span>
          <span className="text text_type_main-default text_color_inactive">{parseOrderDate(data.createdAt)}</span>
        </div>
        <h2 className={`text text_type_main-medium mt-6 ${path === 'feed' ? 'mb-6' : 'mb-2'}`}>{data.name}</h2>

        {path !== 'feed' && getStatusElement(data.status)}

        <div className={styles.info}>
          <ul className={styles.ingredients}>
            {data.ingredientsDetails && data.ingredientsDetails.slice(0, MAX_CARD_LOGO_COUNT).map((ingredient, index) => {
              if (overlayNeeded && index === 0) {
                return (
                  <span key={index} className={styles.container}>
                    <IngredientLogo image={ingredient.image_mobile} name={ingredient.name} hiddenCount={hiddenCount} />
                  </span>
                )
              } else {
                return (
                  <span key={index} className={styles.container}>
                    <IngredientLogo image={ingredient.image_mobile} name={ingredient.name} />
                  </span>
                )
              }
            })}
          </ul>
          <Price value={data.ingredientsDetails && getOrderPrice(data.ingredientsDetails)} />
        </div>
      </Link>
    </li>
  );
}

export default OrderCard;
