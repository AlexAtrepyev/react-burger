import styles from './constructor-order.module.css';

import { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { createOrderThunk, toggleOrderModalAction } from '../../services/actions/burger';
import { useSelector, useDispatch } from '../../services/hooks';

import { getTotalPrice, getIDs } from '../../utils/functions';

const ConstructorOrder: FC = () => {
  const history = useHistory();
  const location = useLocation();
  
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const allItems = useSelector(state => {
    const { bun, ingredients } = state.burger;
    return ingredients.concat(bun ? [bun, bun] : []);
  });
  const { createOrderRequest, orderModal } = useSelector(state => state.burger);
  
  const handleClick = (): void => {
    if (!user) {
      history.replace({ pathname: '/login', state: { from: location } });
    } else {
      dispatch(createOrderThunk(getIDs(allItems)));
      dispatch(toggleOrderModalAction());
    }
  }

  const handleCloseModal= (): void => {
    dispatch(toggleOrderModalAction());
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.price}>
        <span className="text text_type_digits-medium">{getTotalPrice(allItems)}</span>
        <CurrencyIcon type="primary" />
      </div>
      {allItems.length && !createOrderRequest && <Button type="primary" size="large" onClick={handleClick}>Оформить заказ</Button>}

      {orderModal && (
        <Modal onClose={handleCloseModal}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

export default ConstructorOrder;
