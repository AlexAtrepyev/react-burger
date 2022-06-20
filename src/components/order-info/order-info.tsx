import styles from './order-info.module.css';

import { FC, useEffect } from 'react';
import { useLocation, useParams, useRouteMatch } from 'react-router-dom';

import { TOrder } from '../../@types/data';

import OrderItem from '../../components/order-item/order-item';
import Preloader from '../preloader/preloader';
import Price from '../price/price';

import { wsConnectionStartAction, wsConnectionStopAction } from '../../services/actions/feed';
import { useSelector, useDispatch } from '../../services/hooks';

import { getOrderPrice, getIngredientsDetails, getCookie, parseOrderDate } from '../../utils/functions';

const OrderInfo: FC = () => {
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
  }, [dispatch]);

  const getStatusElement = (status: "created" | "pending" | "done"): JSX.Element => {
    switch(status) {
      case 'created':
        return (<p className="text text_type_main-default">Оформлен</p>);
      case 'pending':
        return (<p className="text text_type_main-default">Готовится</p>);
      case 'done':
        return (<p className="text text_type_main-default text_color_success">Выполнен</p>);
      default:
        return (<p className="text text_type_main-default">Нет данных</p>);
    }
  }

  return order ? (
    <>
      <h2 className="text text_type_main-medium mt-10 mb-3">{order.name}</h2>
      {order.status && getStatusElement(order.status)}
      <p className="text text_type_main-medium mt-15 mb-6">Состав:</p>
      
      <ul className={styles.list}>
        {order.ingredientsDetails && order.ingredientsDetails.map(item => (
          <OrderItem key={item._id} name={item.name} image={item.image_mobile} count={item.count} price={item.price} />
        ))}
      </ul>

      <div className={styles.container}>
        <span className="text text_type_main-default text_color_inactive">{parseOrderDate(order.createdAt)}</span>
        <Price value={order.ingredientsDetails && getOrderPrice(order.ingredientsDetails)} />
      </div>
    </>
  ) : (
    <Preloader />
  );
}

export default OrderInfo;
