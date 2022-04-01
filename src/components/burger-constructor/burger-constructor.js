import styles from './burger-constructor.module.css';

import { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { IngredientsContext } from '../../services/ingredientsContext';

import BurgerComponents from '../burger-components/burger-components';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { Button, ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor({ createOrder }) {
  const ingredientsState = useContext(IngredientsContext);
  const [modalVisible, setModalVisible] = useState(false);

  function handleClick() {
    createOrder();
    setModalVisible(true);
  }

  function handleCloseModal() {
    setModalVisible(false);
  }

  const [ bunTop ] = ingredientsState.constructor.slice(0);
  const [ bunBottom ] = ingredientsState.constructor.slice(-1);
  
  return (
    <section className={styles.section}>
      <div className={styles.item}>
        <div className={styles.deception} />
        <ConstructorElement
          type='top'
          isLocked={true}
          text={`${bunTop.name} (верх)`}
          price={bunTop.price}
          thumbnail={bunTop.image_mobile}
        />
      </div>

      <BurgerComponents data={ingredientsState.constructor.slice(1, -1)} />

      <div className={styles.item}>
        <div className={styles.deception} />
        <ConstructorElement
          type='bottom'
          isLocked={true}
          text={`${bunBottom.name} (низ)`}
          price={bunBottom.price}
          thumbnail={bunBottom.image_mobile}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.summary}>
          <span className="text text_type_digits-medium">{ingredientsState.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" onClick={handleClick}>Оформить заказ</Button>
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
  createOrder: PropTypes.func.isRequired
};

export default BurgerConstructor;
