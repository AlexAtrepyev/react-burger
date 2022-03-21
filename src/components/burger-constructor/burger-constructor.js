import styles from './burger-constructor.module.css';
import BurgerComponents from '../burger-components/burger-components';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor({ data }) {
  const total = data.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  return (
    <section className={styles.section}>
      <BurgerComponents data={data} />
      <div className={styles.container}>
        <div className={styles.info}>
          <span className="text text_type_digits-medium">{total}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large">Оформить заказ</Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;
