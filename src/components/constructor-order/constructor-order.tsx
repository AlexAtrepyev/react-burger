import styles from './constructor-order.module.css';

import { useLocation, useHistory } from 'react-router-dom';

import { createOrderThunk } from '../../services/actions/order';
import { toggleOrderModalAction } from '../../services/actions/ui';
import { useSelector, useDispatch } from '../../services/hooks';
import { getTotalPrice, getIDs } from '../../services/utils';

import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function ConstructorOrder() {
  const location = useLocation();
  const history = useHistory();

  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const allItems = useSelector(state => {
    const { bunItem, interItems } = state.burger.constructor;
    return bunItem._id ? interItems.concat([bunItem, bunItem]) : interItems;
  });
  const orderRequest = useSelector(state => state.order.request);
  const modalVisible = useSelector(state => state.ui.orderModal);
  
  function handleClick() {
    if (!user.name) {
      history.replace({
        pathname: '/login',
        state: { from: location }
      });
    } else {
      dispatch(createOrderThunk(getIDs(allItems)));
      dispatch(toggleOrderModalAction());
    }
  }

  function handleCloseModal() {
    dispatch(toggleOrderModalAction());
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
