import styles from './order-details.module.css';

import { useContext } from 'react';

import { OrderContext } from '../../services/orderContext';

function OrderDetails() {
  const order = useContext(OrderContext);

  return order ? (
    <>
      <h3 className="text text_type_digits-large mt-4 mb-8">{order.order.number}</h3>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <span className={styles.done}></span>
      <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mt-2 mb-15">Дождитесь готовности на орбитальной станции</p>
    </>
  ) : (
    <>
      <h3 className="text text_type_digits-large mt-4 mb-8">-</h3>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <span className={styles.loading}></span>
      <p className="text text_type_main-default">Ваш заказ оформляется</p>
      <p className="text text_type_main-default text_color_inactive mt-2 mb-15">Дождитесь оформления</p>
    </>
  );
}

export default OrderDetails;
