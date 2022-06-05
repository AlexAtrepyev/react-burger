import styles from './order-info.module.css';

import OrderItem from '../../components/order-item/order-item';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function OrderInfo() {
  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-medium text_align_center">#034533</h1>
      <h2 className="text text_type_main-medium mt-10 mb-3">Black Hole Singularity острый бургер</h2>
      <p className="text text_type_main-default text_color_success">Выполнен</p>
      <p className="text text_type_main-medium mt-15 mb-6">Состав:</p>
      
      <ul className={styles.list}>
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </ul>

      <div className={styles.container}>
        <span className="text text_type_main-default text_color_inactive">Вчера, 13:50 i-GMT+3</span>
        <div className={styles.price}>
          <span className="text text_type_digits-default">510</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  );
}

export default OrderInfo;
