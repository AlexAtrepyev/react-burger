import styles from './burger-order.module.css';

import { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Modal from '../modal/modal';
import OrderInfo from '../order-info/order-info';
import Price from '../price/price';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { createOrderThunk, toggleOrderModalAction } from '../../services/actions/burger';
import { useSelector, useDispatch } from '../../services/hooks';

import { getTotalPrice, getIDs } from '../../utils/functions';

const BurgerOrder: FC = () => {
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
      <Price value={getTotalPrice(allItems)} mediumSize />
      {allItems.length > 0 && !createOrderRequest &&
      <Button type="primary" size="large" onClick={handleClick}>Оформить заказ</Button>}

      {orderModal && (
        <Modal onClose={handleCloseModal}>
          <OrderInfo />
        </Modal>
      )}
    </div>
  );
}

export default BurgerOrder;
