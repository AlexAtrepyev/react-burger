import styles from './burger-constructor.module.css';

import { useState } from 'react';
import PropTypes from 'prop-types';

import dataPropTypes from '../../utils/prop-types';

import BurgerComponents from '../burger-components/burger-components';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';

import { Button, ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor({ bun, data }) {
  const [modalVisible, setModalVisible] = useState(false);

  function handleOpenModal() {
    setModalVisible(true);
  }

  function handleCloseModal() {
    setModalVisible(false);
  }

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
        <div className={styles.summary}>
          <span className="text text_type_digits-medium">{total}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" onClick={handleOpenModal}>Оформить заказ</Button>
        {modalVisible && (
          <Modal onClose={handleCloseModal}>
            <OrderDetails />
          </Modal>
        )}
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  bun: dataPropTypes.isRequired,
  data: PropTypes.arrayOf(dataPropTypes).isRequired
}; 

export default BurgerConstructor;
