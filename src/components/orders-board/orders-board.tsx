import styles from './orders-board.module.css';

import { FC } from 'react';

import { MAX_ORDER_BOARD_CARD_COUNT } from '../../utils/constants';

const OrdersBoard: FC<{ title: string, orders: number[], done?: true }> = ({ title, orders, done }) => {
  let listClass = styles.list;
  if (done) listClass += ` text_color_success`;

  const textClass = 'text text_type_digits-default';

  return (
    <div>
      <h2 className="text text_type_main-medium mb-6">{title}</h2>
      <ul className={listClass}>
        {orders.slice(0, MAX_ORDER_BOARD_CARD_COUNT).map((order, index) => <li key={index} className={textClass}>{order}</li>)}
      </ul>
    </div>
  );
}

export default OrdersBoard;
