import styles from './orders-board.module.css';

import { FC } from 'react';

const OrdersBoard: FC<{ title: string, orders: number[], done?: true }> = ({ title, orders, done }) => {
  let listClass = styles.list;
  if (done) listClass += ` text_color_success`;

  return (
    <div>
      <h2 className="text text_type_main-medium mb-6">{title}</h2>
      <ul className={listClass}>
        {orders.slice(0, 20).map((order, index) => <li key={index} className="text text_type_digits-default">{order}</li>)}
      </ul>
    </div>
  );
}

export default OrdersBoard;
