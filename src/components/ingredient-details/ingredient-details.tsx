import styles from './ingredient-details.module.css';

import { FC } from 'react';
import { useParams } from 'react-router-dom';

import NutritionalValue from '../nutritional-value/nutritional-value';
import Preloader from '../preloader/preloader';

import { useSelector } from '../../services/hooks';

const IngredientDetails: FC = () => {
  const { ingredientId } = useParams<{ ingredientId: string }>();

  const ingredient = useSelector(state => {
    const { ingredients } = state.ingredients;
    return ingredients.find(item => item._id === ingredientId);
  });
  
  return ingredient ? (
    <div className={styles.container}>
      <img src={ingredient.image} alt={ingredient.name} />
      <h2 className="text text_type_main-medium mt-4 mb-8">{ingredient.name}</h2>
      <ul className={styles.list}>
        <NutritionalValue name="Калории, ккал" value={ingredient.calories} />
        <NutritionalValue name="Белки, г" value={ingredient.proteins} />
        <NutritionalValue name="Жиры, г" value={ingredient.fat} />
        <NutritionalValue name="Углеводы, г" value={ingredient.carbohydrates} />
      </ul>
    </div>
  ) : (
    <Preloader />
  );
}

export default IngredientDetails;
