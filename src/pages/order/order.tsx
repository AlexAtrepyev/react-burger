import styles from './order.module.css';

import { FC } from 'react';
import { useParams } from 'react-router-dom';

import OrderDetails from '../../components/order-details/order-details';

import { useSelector } from '../../services/hooks';

const OrderPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const order = useSelector(state => {
    const { orders } = state.feed;
    return orders.find(order => order._id === id);
  });
  
  return (
    <section className={styles.section}>
      <h1 className="text text_type_digits-default text_align_center">{order ? `#${order.number}` : '-'}</h1>
      <OrderDetails/>
    </section>
  );
}

export default OrderPage;
