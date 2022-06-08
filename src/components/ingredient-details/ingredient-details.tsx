import styles from './ingredient-details.module.css';

import { useParams } from 'react-router-dom';

import { useSelector } from '../../services/hooks';

import NutritionalValue from '../nutritional-value/nutritional-value';

function IngredientDetails() {
  const ingredients = useSelector(state => state.burger.ingredients.items);
  
  const { ingredientId } = useParams<{ ingredientId: string }>();
  const ingredient = ingredients.find(item => item._id === ingredientId);
  const {
    image=undefined,
    name=undefined,
    calories=undefined,
    proteins=undefined,
    fat=undefined,
    carbohydrates=undefined
  } = ingredient ? ingredient : {};
  
  return (
    <>
      <img src={image} alt={name} />
      <h3 className="text text_type_main-medium mt-4 mb-8">{name}</h3>
      <ul className={styles.list}>
        <NutritionalValue name="Калории, ккал" value={calories} />
        <NutritionalValue name="Белки, г" value={proteins} />
        <NutritionalValue name="Жиры, г" value={fat} />
        <NutritionalValue name="Углеводы, г" value={carbohydrates} />
      </ul>
    </>
  );
}

export default IngredientDetails;
