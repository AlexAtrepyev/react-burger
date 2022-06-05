import styles from './feed.module.css';

import OrderCard from '../../components/order-card/order-card';
import OrdersBoard from '../../components/orders-board/orders-board';
import OrderStats from '../../components/order-stats/order-stats';

function FeedPage() {
  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large mt-10 mb-5">Лента заказов</h1>
      <div className={styles.container}>
        <ul className={styles.orders}>
          <OrderCard location="feed" />
          <OrderCard location="feed" />
          <OrderCard location="feed" />
          <OrderCard location="feed" />
          <OrderCard location="feed" />
          <OrderCard location="feed" />
        </ul>
        <div className={styles.stats}>
          <div className={styles.cont}>
            <OrdersBoard title="Готовы:" orders={['034533', '034532', '034530', '034527', '034525']} done />
            <OrdersBoard title="В работе:" orders={['034538', '034541', '034542']} />
          </div>
          <OrderStats title="Выполнено за все время:" value="28 752" />
          <OrderStats title="Выполнено за сегодня:" value="138" />
        </div>
      </div>
    </section>
  );
}

export default FeedPage;
