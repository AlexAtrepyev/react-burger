import styles from './ingredients-item.module.css';

import { useDrag } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';

import { SET_CURRENT_INGREDIENT, RESET_CURRENT_INGREDIENT, TOGGLE_INGREDIENT_MODAL } from '../../utils/constants';
import { itemObject } from '../../utils/prop-types';

import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function IngredientsItem({ item }) {
  const dispatch = useDispatch();

  const modalVisible = useSelector(state => state.ui.ingredientModal);
  const currentIngredient = useSelector(state => state.burger.currentIngredient);
  
  const [{ opacity }, dragRef] = useDrag({
    type: 'ingredient',
    item: item,
    collect: monitor => ({
      opacity: monitor.isDragging() ? .5 : 1
    })
  });

  function handleOpenModal() {
    dispatch({ type: SET_CURRENT_INGREDIENT, ingredient: item });
    dispatch({ type: TOGGLE_INGREDIENT_MODAL });
  }

  function handleCloseModal() {
    dispatch({ type: TOGGLE_INGREDIENT_MODAL });
    dispatch({ type: RESET_CURRENT_INGREDIENT });
  }
  
  return (
    <>
      <li ref={dragRef} className={styles.item} style={{ opacity }} onClick={handleOpenModal} >
        <img src={item.image} alt={item.name} />
        <div className={styles.price}>
          <span className="text text_type_digits-default mr-2">{item.price}</span>
          <CurrencyIcon />
        </div>
        <div className={styles.name}>
          <h3 className="text text_type_main-default">{item.name}</h3>
        </div>
        {item.count > 0 && <Counter count={item.count} size="default" />}
      </li>

      {modalVisible && currentIngredient._id === item._id && (
        <Modal title="Детали ингредиента" onClose={handleCloseModal}>
          <IngredientDetails />
        </Modal>
      )}
    </>
  );
}

IngredientsItem.propTypes = {
  item: itemObject.isRequired
};

export default IngredientsItem;
