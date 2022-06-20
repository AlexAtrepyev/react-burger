import styles from './feed.module.css';

import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import OrderCard from '../../components/order-card/order-card';
import OrdersBoard from '../../components/orders-board/orders-board';
import OrdersStats from '../../components/orders-stats/orders-stats';
import Preloader from '../../components/preloader/preloader';

import { wsConnectionStartAction, wsConnectionStopAction } from '../../services/actions/feed';
import { useSelector, useDispatch } from '../../services/hooks';

import { getIngredientsDetails, getOrderNumbers } from '../../utils/functions';

const FeedPage: FC = () => {
  const location = useLocation<any>();

  const dispatch = useDispatch();
  const { orders, total, totalToday, wsConnected } = useSelector(state => state.feed);
  const ingredients = useSelector(state => state.ingredients.ingredients);
  
  const improvedOrders = orders.map(order => {
    order.ingredientsDetails = getIngredientsDetails(ingredients, order.ingredients);
    return order;
  });
  const doneNumbers = getOrderNumbers(orders.filter(order => order.status === 'done'));
  const pendingNumbers = getOrderNumbers(orders.filter(order => order.status === 'pending'));
  
  useEffect(() => {
    dispatch(wsConnectionStartAction('wss://norma.nomoreparties.space/orders/all'));
    return () => {
      dispatch(wsConnectionStopAction());
    };
  }, [dispatch]);

  return wsConnected ? (
    <section className={styles.section}>
      <h1 className="text text_type_main-large mt-10 mb-5">Лента заказов</h1>
      <div className={styles.container}>
        <ul className={styles.orders}>
          {improvedOrders.map(order => <OrderCard key={order._id} path="feed" data={order} background={location} />)}
        </ul>
        <div className={styles.stats}>
          <div className={styles.cont}>
            <OrdersBoard title="Готовы:" orders={doneNumbers} done />
            <OrdersBoard title="В работе:" orders={pendingNumbers} />
          </div>
          <OrdersStats title="Выполнено за все время:" value={total} />
          <OrdersStats title="Выполнено за сегодня:" value={totalToday} />
        </div>
      </div>
    </section>
  ) : (
    <Preloader />
  );
}

export default FeedPage;
