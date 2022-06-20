import styles from './order-details.module.css';

import { FC } from 'react';

import Preloader from '../preloader/preloader';

import { useSelector } from '../../services/hooks';

import { ORDER_DETAILS_TEXT } from '../../utils/constants';

const OrderDetails: FC = () => {
  const orderNumber = useSelector(state => state.burger.orderNumber);

  return (
    <div className={styles.container}>
      <h3 className="text text_type_digits-large mt-4 mb-8">{orderNumber ?? '-'}</h3>
      <p className="text text_type_main-medium">идентификатор заказа</p>

      {orderNumber ? (<span className={styles.done} />) : (<Preloader />)}

      <p className="text text_type_main-default">
        {orderNumber ? ORDER_DETAILS_TEXT.status.done : ORDER_DETAILS_TEXT.status.loading}
      </p>
      <p className="text text_type_main-default text_color_inactive mt-2 mb-15">
        {orderNumber ? ORDER_DETAILS_TEXT.message.done : ORDER_DETAILS_TEXT.message.loading}
      </p>
    </div>
  );
}

export default OrderDetails;
