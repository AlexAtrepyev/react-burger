import styles from './ingredient-details.module.css';

import PropTypes from 'prop-types';

import NutritionalValue from '../nutritional-value/nutritional-value';

function IngredientDetails({ name, proteins, fat, carbohydrates, calories, image }) {
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

IngredientDetails.propTypes = {
  name: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};

export default IngredientDetails;
