import styles from './feed.module.css';

import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { wsConnectionStartAction, wsConnectionClosedAction } from '../../services/actions/feed';
import { TOrder } from '../../services/types/data';
import { useSelector, useDispatch } from '../../services/hooks';
import { getIngredientsDetails, getOrderNumbers } from '../../services/utils';

import OrderCard from '../../components/order-card/order-card';
import OrdersBoard from '../../components/orders-board/orders-board';
import OrderStats from '../../components/order-stats/order-stats';

function FeedPage() {
  const location = useLocation<any>();

  const dispatch = useDispatch();
  const { orders, total, totalToday } = useSelector(state => state.feed);
  const ingredients = useSelector(state => state.burger.ingredients.items);
  
  const improvedOrders: TOrder[] = orders.map(order => {
    order.ingredientsDetails = getIngredientsDetails(ingredients, order.ingredients);
    return order;
  });
  const doneNumbers = getOrderNumbers(orders.filter(order => order.status === 'done'));
  const pendingNumbers = getOrderNumbers(orders.filter(order => order.status === 'pending'));
  
  useEffect(() => {
    dispatch(wsConnectionStartAction('wss://norma.nomoreparties.space/orders/all'));
    return () => {
      dispatch(wsConnectionClosedAction());
    };
  }, []);

  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large mt-10 mb-5">Лента заказов</h1>
      <div className={styles.container}>
        <ul className={styles.orders}>
          {improvedOrders.map(order => (
            <Link
              key={order._id}
              className={styles.link}
              to={{
                pathname: `/feed/${order._id}`,
                state: { background: location }
              }}
            >
              <OrderCard location="feed" data={order} />
            </Link>
          ))}
        </ul>
        <div className={styles.stats}>
          <div className={styles.cont}>
            <OrdersBoard title="Готовы:" orders={doneNumbers} done />
            <OrdersBoard title="В работе:" orders={pendingNumbers} />
          </div>
          <OrderStats title="Выполнено за все время:" value={total} />
          <OrderStats title="Выполнено за сегодня:" value={totalToday} />
        </div>
      </div>
    </section>
  );
}

export default FeedPage;
