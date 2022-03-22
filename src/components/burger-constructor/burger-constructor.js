import styles from './burger-constructor.module.css';

import PropTypes from 'prop-types';

import dataPropTypes from '../../utils/prop-types';

import BurgerComponents from '../burger-components/burger-components';
import { CurrencyIcon, Button, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor({ bun, data }) {
  const total = data.reduce((sum, item) => {
    return sum + item.price;
  }, 2 * bun.price);

  return (
    <section className={styles.section}>
      <div className={styles.item}>
        <div className={styles.deception} />
        <ConstructorElement
          type='top'
          isLocked={true}
          text={`${bun.name} (верх)`}
          price={bun.price}
          thumbnail={bun.image_mobile}
        />
      </div>
      <BurgerComponents data={data} />
      <div className={styles.item}>
        <div className={styles.deception} />
        <ConstructorElement
          type='bottom'
          isLocked={true}
          text={`${bun.name} (низ)`}
          price={bun.price}
          thumbnail={bun.image_mobile}
        />
      </div>

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

BurgerConstructor.propTypes = {
  bun: dataPropTypes.isRequired,
  data: PropTypes.arrayOf(dataPropTypes).isRequired
}; 

export default BurgerConstructor;
