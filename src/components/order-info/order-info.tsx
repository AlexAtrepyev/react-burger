import styles from './order-info.module.css';

import { useEffect } from 'react';
import { useLocation, useParams, useRouteMatch } from 'react-router-dom';

import { TOrder } from '../../@types/data';

import OrderItem from '../../components/order-item/order-item';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { wsConnectionStartAction, wsConnectionStopAction } from '../../services/actions/feed';
import { useSelector, useDispatch } from '../../services/hooks';

import { getOrderPrice, getIngredientsDetails, getCookie } from '../../utils/functions';

function OrderInfo() {
  const location = useLocation<any>();
  const { id } = useParams<{ id: string }>();
  const isFeed = useRouteMatch<any>('/feed');
  const isProfile = useRouteMatch<any>('/profile');

  const dispatch = useDispatch();
  const orders = useSelector(state => state.feed.orders);
  const ingredients = useSelector(state => state.ingredients.ingredients);
  
  const improvedOrders: TOrder[] = orders.map(order => {
    order.ingredientsDetails = getIngredientsDetails(ingredients, order.ingredients);
    return order;
  });
  
  const order = improvedOrders.find(order => order._id === id);
  
  useEffect(() => {
    const isBackground = location.state && location.state.background;
    !isBackground && isFeed && dispatch(wsConnectionStartAction('wss://norma.nomoreparties.space/orders/all'));
    !isBackground && isProfile &&
      dispatch(wsConnectionStartAction(`wss://norma.nomoreparties.space/orders?token=${getCookie('accessToken')}`));
    return () => {
      !isBackground && dispatch(wsConnectionStopAction());
    };
  }, []);

  function getStatus(status: "created" | "pending" | "done"): JSX.Element {
    switch(status) {
      case 'created':
        return (<p className="text text_type_main-default">Оформлен</p>);
      case 'pending':
        return (<p className="text text_type_main-default text_color_success">Готовится</p>);
      case 'done':
        return (<p className="text text_type_main-default">Выполнен</p>);
      default:
        return (<p className="text text_type_main-default">Нет данных</p>);
    }
  }

  return (
    <>
      <h1 className="text text_type_digits-default text_align_center">{`#${order?.number}`}</h1>
      <h2 className="text text_type_main-medium mt-10 mb-3">{order?.name}</h2>
      {order?.status && getStatus(order.status)}
      <p className="text text_type_main-medium mt-15 mb-6">Состав:</p>
      
      <ul className={styles.list}>
        {order?.ingredientsDetails && order.ingredientsDetails.map(item => (
          <OrderItem key={item._id} name={item.name} image={item.image_mobile} count={item.count} price={item.price} />
        ))}
      </ul>

      <div className={styles.container}>
        <span className="text text_type_main-default text_color_inactive">{order?.createdAt}</span>
        <div className={styles.price}>
          <span className="text text_type_digits-default">
            {order?.ingredientsDetails && getOrderPrice(order.ingredientsDetails)}
          </span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </>
  );
}

export default OrderInfo;
