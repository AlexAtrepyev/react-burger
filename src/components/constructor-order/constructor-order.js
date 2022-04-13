import styles from './constructor-order.module.css';

import { useDispatch, useSelector } from 'react-redux';

import { createOrder } from '../../services/actions';

import { TOGGLE_ORDER_MODAL } from '../../utils/constants';
import { getTotalPrice, getIDs } from '../../utils/utils';

import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function ConstructorOrder() {
  const dispatch = useDispatch();
  
  const allItems = useSelector(state => {
    const { bunItem, interItems } = state.burger.constructor;
    return bunItem._id ? interItems.concat([bunItem, bunItem]) : interItems;
  });
  const modalVisible = useSelector(state => state.ui.orderModal);
  
  function handleClick() {
    dispatch(createOrder(getIDs(allItems)));
    dispatch({ type: TOGGLE_ORDER_MODAL });
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
      {allItems.length > 0 && <Button type="primary" size="large" onClick={handleClick}>Оформить заказ</Button>}

      {modalVisible && (
        <Modal onClose={handleCloseModal}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

export default ConstructorOrder;
