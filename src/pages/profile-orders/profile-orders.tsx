import styles from './profile-orders.module.css';

import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { TOrder } from '../../@types/data';

import OrderCard from '../../components/order-card/order-card';
import ProfileSidebar from '../../components/profile-sidebar/profile-sidebar';
import Preloader from '../../components/preloader/preloader';

import { wsConnectionStartAction, wsConnectionStopAction } from '../../services/actions/feed';
import { useSelector, useDispatch } from '../../services/hooks';

import { getIngredientsDetails, getCookie } from '../../utils/functions';

const ProfileOrdersPage: FC = () => {
  const location = useLocation<any>();

  const dispatch = useDispatch();
  const { orders , wsConnected } = useSelector(state => state.feed);
  const ingredients = useSelector(state => state.ingredients.ingredients);

  const improvedOrders: TOrder[] = orders.map(order => {
    order.ingredientsDetails = getIngredientsDetails(ingredients, order.ingredients);
    return order;
  }).reverse();
  
  useEffect(() => {
    dispatch(wsConnectionStartAction(`wss://norma.nomoreparties.space/orders?token=${getCookie('accessToken')}`));
    return () => {
      dispatch(wsConnectionStopAction());
    };
  }, [dispatch]);

  return (
    <section className={styles.section}>
      <ProfileSidebar />
      {wsConnected ? (
        <ul className={styles.orders}>
          {improvedOrders.map(order => <OrderCard key={order._id} path="profile/orders" data={order} background={location} />)}
        </ul>
      ) : (
        <Preloader />
      )}
    </section>
  );
}

export default ProfileOrdersPage;
