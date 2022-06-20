import styles from './order-info-page.module.css';

import { FC } from 'react';
import { useParams } from 'react-router-dom';

import OrderInfo from '../../components/order-info/order-info';

import { useSelector } from '../../services/hooks';

const OrderInfoPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const order = useSelector(state => {
    const { orders } = state.feed;
    return orders.find(order => order._id === id);
  });
  
  return (
    <section className={styles.section}>
      <h1 className="text text_type_digits-default text_align_center">{order ? `#${order.number}` : '-'}</h1>
      <OrderInfo/>
    </section>
  );
}

export default OrderInfoPage;
