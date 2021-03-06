import { FC } from 'react';

const OrdersStats: FC<{ title: string, value: number }> = ({ title, value }) => {
  return (
    <div>
      <h2 className="text text_type_main-medium">{title}</h2>
      <p className="text text_type_digits-large">{value}</p>
    </div>
  );
}

export default OrdersStats;
