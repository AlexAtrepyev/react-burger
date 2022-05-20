import styles from './constructor-order.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import { createOrder } from '../../services/actions';

import { TOGGLE_ORDER_MODAL } from '../../utils/constants';
import { getTotalPrice, getIDs } from '../../utils/utils';

import { TIngredient, TUser } from '../../types';

import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function ConstructorOrder() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  
  const user = useSelector<any, TUser>(state => state.auth.user);
  const allItems = useSelector<any, TIngredient[]>(state => {
    const { bunItem, interItems } = state.burger.constructor;
    return bunItem._id ? interItems.concat([bunItem, bunItem]) : interItems;
  });
  const orderRequest = useSelector<any, boolean>(state => state.order.request);
  const modalVisible = useSelector<any, boolean>(state => state.ui.orderModal);
  
  function handleClick() {
    if (!user.name) {
      history.replace({
        pathname: '/login',
        state: { from: location }
      });
    } else {
      dispatch(createOrder(getIDs(allItems)));
      dispatch({ type: TOGGLE_ORDER_MODAL });
    }
  }

  function handleCloseModal() {
    dispatch({ type: TOGGLE_ORDER_MODAL });
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.price}>
        <span className="text text_type_digits-medium">{getTotalPrice(allItems)}</span>
        <CurrencyIcon type="primary" />
      </div>
      {allItems.length && !orderRequest && <Button type="primary" size="large" onClick={handleClick}>Оформить заказ</Button>}

      {modalVisible && (
        <Modal onClose={handleCloseModal}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

export default ConstructorOrder;
