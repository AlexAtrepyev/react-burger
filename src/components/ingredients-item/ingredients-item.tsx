import styles from './ingredients-item.module.css';

import { FC } from 'react';
import { useDrag } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';

import { RESET_CURRENT_INGREDIENT, TOGGLE_INGREDIENT_MODAL } from '../../utils/constants';

import { TIngredient } from '../../types';

import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientsItem: FC<{ item: TIngredient }> = ({ item }) => {
  const dispatch = useDispatch();

  const modalVisible = useSelector<any, boolean>(state => state.ui.ingredientModal);
  const currentIngredient = useSelector<any, TIngredient>(state => state.burger.currentIngredient);
  
  const [{ opacity }, dragRef] = useDrag({
    type: 'ingredient',
    item: item,
    collect: monitor => ({
      opacity: monitor.isDragging() ? .5 : 1
    })
  });
  /*
  function handleOpenModal() {
    dispatch({ type: SET_CURRENT_INGREDIENT, ingredient: item });
    dispatch({ type: TOGGLE_INGREDIENT_MODAL });
  }
  */
  function handleCloseModal() {
    dispatch({ type: TOGGLE_INGREDIENT_MODAL });
    dispatch({ type: RESET_CURRENT_INGREDIENT });
  }
  
  return (
    <>
      <div ref={dragRef} className={styles.item} style={{ opacity }}>
        <img src={item.image} alt={item.name} />
        <div className={styles.price}>
          <span className="text text_type_digits-default mr-2">{item.price}</span>
          <CurrencyIcon type='primary' />
        </div>
        <div className={styles.name}>
          <h3 className="text text_type_main-default">{item.name}</h3>
        </div>
        {item.count > 0 && <Counter count={item.count} size="default" />}
      </div>

      {modalVisible && currentIngredient._id === item._id && (
        <Modal title="Детали ингредиента" onClose={handleCloseModal}>
          <IngredientDetails />
        </Modal>
      )}
    </>
  );
}

export default IngredientsItem;
