import styles from './profile-orders.module.css';

import { useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { logoutThunk } from '../../services/actions/auth';
import { wsAuthConnectionStartAction, wsConnectionCloseAction } from '../../services/actions/feed';
import { TOrder } from '../../services/types/data';
import { useSelector, useDispatch } from '../../services/hooks';
import { getIngredientsDetails } from '../../services/utils';

import OrderCard from '../../components/order-card/order-card';

function ProfileOrdersPage() {
  const location = useLocation<any>();

  const dispatch = useDispatch();
  const orders = useSelector(state => state.feed.orders);
  const ingredients = useSelector(state => state.burger.ingredients.items);

  const improvedOrders: TOrder[] = orders.map(order => {
    order.ingredientsDetails = getIngredientsDetails(ingredients, order.ingredients);
    return order;
  }).reverse();
  
  useEffect(() => {
    dispatch(wsAuthConnectionStartAction());
    return () => {
      dispatch(wsConnectionCloseAction());
    };
  }, []);
  
  const onLogout = (): void => {
    dispatch(logoutThunk());
  };

  const linkClass = 'text text_type_main-medium text_decoration_none text_color_inactive ';

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink className={linkClass} activeClassName={styles.activeLink} exact to="/profile">Профиль</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink className={linkClass} activeClassName={styles.activeLink} exact to="/profile/orders">История заказов</NavLink>
          </li>
          <li className={styles.item}>
            <button className={linkClass + styles.logout} onClick={onLogout}>Выход</button>
          </li>
        </ul>
        <p className="text text_type_main-default text_color_inactive mt-20">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      
      <ul className={styles.orders}>
        {improvedOrders.map(order => 
          <Link
            key={order._id}
            className={styles.link}
            to={{
              pathname: `/profile/orders/${order._id}`,
              state: { background: location }
            }}
            >
              <OrderCard location="profile" data={order} />
            </Link>
          )}
      </ul>
    </section>
  );
}

export default ProfileOrdersPage;
