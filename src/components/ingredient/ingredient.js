import styles from './ingredient.module.css';

import { useState } from 'react';
import PropTypes from 'prop-types';

import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Ingredient({ name, proteins, fat, carbohydrates, calories, price, image, imageLarge }) {
  const [modalVisible, setModalVisible] = useState(false);

  function handleOpenModal() {
    setModalVisible(true);
  }

  function handleCloseModal() {
    setModalVisible(false);
  }
  
  return (
    <>
      <li className={styles.item} onClick={handleOpenModal} >
        <img src={image} alt={name} />
        <div className={styles.price}>
          <span className="text text_type_digits-default mr-2">{price}</span>
          <CurrencyIcon />
        </div>
        <div className={styles.name}>
          <h3 className="text text_type_main-default">{name}</h3>
        </div>
        <Counter count={1} size="default" />
      </li>

      {modalVisible && (
        <Modal title="Детали ингредиента" onClose={handleCloseModal}>
          <IngredientDetails
            name={name}
            proteins={proteins}
            fat={fat}
            carbohydrates={carbohydrates}
            calories={calories}
            image={imageLarge}
          />
        </Modal>
      )}
    </>
  );
}

Ingredient.propTypes = {
  name: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  imageLarge: PropTypes.string.isRequired
};

export default Ingredient;
