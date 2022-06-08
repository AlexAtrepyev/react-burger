import styles from './order-info-page.module.css';

import OrderInfo from '../../components/order-info/order-info';

function OrderInfoPage() {
  return (
    <section className={styles.section}>
      <OrderInfo/>
    </section>
  );
}

export default OrderInfoPage;
