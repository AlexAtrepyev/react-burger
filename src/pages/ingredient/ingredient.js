import styles from './ingredient.module.css';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import NutritionalValue from '../../components/nutritional-value/nutritional-value';

function IngredientPage() {
  const ingredients = useSelector(state => state.burger.ingredients.items);

  const { ingredientId } = useParams();
  const ingredient = ingredients.find(item => item._id === ingredientId);
  const { name, proteins, fat, carbohydrates, calories, image } = ingredient ? ingredient : {};
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className="text text_type_main-large">Детали ингредиента</h1>
        <img src={image} alt={name} />
        <h2 className="text text_type_main-medium mt-4 mb-8">{name}</h2>
        <ul className={styles.list}>
          <NutritionalValue name="Калории, ккал" value={calories} />
          <NutritionalValue name="Белки, г" value={proteins} />
          <NutritionalValue name="Жиры, г" value={fat} />
          <NutritionalValue name="Углеводы, г" value={carbohydrates} />
        </ul>
      </div>
    </section>
  );
}

export default IngredientPage;
